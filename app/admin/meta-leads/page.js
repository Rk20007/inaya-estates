"use client";

import { useEffect, useState } from "react";
import { RefreshCw, Loader2, AlertCircle } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import StatsGrid from "@/components/admin/StatsGrid";
import MetaLeadsTable from "@/components/admin/MetaLeadsTable";

export default function MetaLeadsPage() {
  const [leads, setLeads] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [syncNote, setSyncNote] = useState("");

  async function fetchLeads() {
    setStatus((prev) => (prev === "idle" ? "refreshing" : "loading"));
    setError("");
    try {
      const response = await fetch("/api/admin/meta-leads", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to load Meta leads.");
      }
      setLeads(data.leads);
      setStatus("idle");
    } catch (err) {
      setError(err.message || "Failed to load Meta leads.");
      setStatus("error");
    }
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  async function handleRefresh() {
    setStatus("refreshing");
    setError("");
    setSyncNote("");
    try {
      const syncResponse = await fetch("/api/admin/meta-leads/sync", { method: "POST" });
      const syncData = await syncResponse.json();
      if (!syncResponse.ok || !syncData.success) {
        throw new Error(syncData.message || "Failed to sync leads from Meta.");
      }
      setSyncNote(`Synced ${syncData.fetched} leads from Meta (${syncData.created} new).`);
      await fetchLeads();
    } catch (err) {
      setError(err.message || "Failed to sync leads from Meta.");
      setStatus("error");
    }
  }

  async function handleStatusChange(id, nextStatus) {
    const previous = leads;
    setLeads((prev) => prev.map((lead) => (lead._id === id ? { ...lead, status: nextStatus } : lead)));

    const response = await fetch(`/api/admin/meta-leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });

    if (!response.ok) {
      setLeads(previous);
    }
  }

  async function handleSaveRemarks(id, remarks) {
    const previous = leads;
    setLeads((prev) => prev.map((lead) => (lead._id === id ? { ...lead, remarks } : lead)));

    const response = await fetch(`/api/admin/meta-leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ remarks }),
    });

    if (!response.ok) {
      setLeads(previous);
    }
  }

  async function handleDelete(id) {
    const previous = leads;
    setLeads((prev) => prev.filter((lead) => lead._id !== id));

    const response = await fetch(`/api/admin/meta-leads/${id}`, { method: "DELETE" });
    if (!response.ok) {
      setLeads(previous);
    }
  }

  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold text-ink-900">Meta Leads</h1>
            <p className="mt-1 text-sm text-ink-500">
              Leads captured from your Facebook &amp; Instagram lead ads. Click refresh to pull the latest.
            </p>
          </div>
          <button
            type="button"
            onClick={handleRefresh}
            disabled={status === "loading" || status === "refreshing"}
            className="btn-ghost !px-4 !py-2.5 text-sm disabled:opacity-60"
          >
            {status === "refreshing" ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
            )}
            Refresh from Meta
          </button>
        </div>

        {syncNote && (
          <p className="mt-3 rounded-xl bg-secondary/10 px-4 py-2.5 text-sm font-medium text-secondary-700">
            {syncNote}
          </p>
        )}

        {status === "loading" ? (
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-ink-500">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Loading Meta leads...
          </div>
        ) : status === "error" ? (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
            <AlertCircle className="h-8 w-8 text-red-500" aria-hidden="true" />
            <p className="text-sm font-medium text-red-700">{error}</p>
            <p className="max-w-md text-xs text-red-600">
              Make sure <code>META_LEADS_ACCESS_TOKEN</code> and <code>META_LEAD_FORM_ID</code> are set in{" "}
              <code>.env.local</code>, and that <code>MONGODB_URI</code> points to a reachable database.
            </p>
            <button type="button" onClick={fetchLeads} className="btn-primary !px-4 !py-2 text-sm">
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="mt-6">
              <StatsGrid leads={leads} dateField="createdTime" />
            </div>
            <div className="mt-6">
              <MetaLeadsTable
                leads={leads}
                onStatusChange={handleStatusChange}
                onSaveRemarks={handleSaveRemarks}
                onDelete={handleDelete}
              />
            </div>
          </>
        )}
      </main>
    </>
  );
}

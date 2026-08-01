"use client";

import { useEffect, useState } from "react";
import { RefreshCw, Loader2, AlertCircle } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import StatsGrid from "@/components/admin/StatsGrid";
import LeadsTable from "@/components/admin/LeadsTable";

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  async function fetchLeads() {
    setStatus((prev) => (prev === "idle" ? "refreshing" : "loading"));
    setError("");
    try {
      const response = await fetch("/api/admin/leads", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to load leads.");
      }
      setLeads(data.leads);
      setStatus("idle");
    } catch (err) {
      setError(err.message || "Failed to load leads.");
      setStatus("error");
    }
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  async function handleStatusChange(id, nextStatus) {
    const previous = leads;
    setLeads((prev) => prev.map((lead) => (lead._id === id ? { ...lead, status: nextStatus } : lead)));

    const response = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });

    if (!response.ok) {
      setLeads(previous);
    }
  }

  async function handleDelete(id) {
    const previous = leads;
    setLeads((prev) => prev.filter((lead) => lead._id !== id));

    const response = await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    if (!response.ok) {
      setLeads(previous);
    }
  }

  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-ink-900">Leads Dashboard</h1>
            <p className="mt-1 text-sm text-ink-500">Track and manage every enquiry submitted on the website.</p>
          </div>
          <button
            type="button"
            onClick={fetchLeads}
            disabled={status === "loading" || status === "refreshing"}
            className="btn-ghost !px-4 !py-2.5 text-sm disabled:opacity-60"
          >
            {status === "refreshing" ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
            )}
            Refresh
          </button>
        </div>

        {status === "loading" ? (
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-ink-500">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Loading leads...
          </div>
        ) : status === "error" ? (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
            <AlertCircle className="h-8 w-8 text-red-500" aria-hidden="true" />
            <p className="text-sm font-medium text-red-700">{error}</p>
            <p className="max-w-md text-xs text-red-600">
              If this is your first time running the project, make sure <code>MONGODB_URI</code> is set in{" "}
              <code>.env.local</code> and points to a reachable MongoDB instance.
            </p>
            <button type="button" onClick={fetchLeads} className="btn-primary !px-4 !py-2 text-sm">
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="mt-6">
              <StatsGrid leads={leads} />
            </div>
            <div className="mt-6">
              <LeadsTable leads={leads} onStatusChange={handleStatusChange} onDelete={handleDelete} />
            </div>
          </>
        )}
      </main>
    </>
  );
}

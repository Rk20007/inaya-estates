"use client";

import { useMemo, useState } from "react";
import { Search, Download, Eye, Trash2 } from "lucide-react";
import LeadDetailsModal from "./LeadDetailsModal";

const STATUS_OPTIONS = ["New", "Contacted", "Site Visit", "Closed"];

const STATUS_STYLES = {
  New: "bg-accent/10 text-accent-700",
  Contacted: "bg-primary/10 text-primary",
  "Site Visit": "bg-secondary/10 text-secondary-700",
  Closed: "bg-ink-100 text-ink-600",
};

function toCsvValue(value) {
  const stringValue = String(value ?? "");
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
}

function downloadCsv(leads) {
  const headers = [
    "Name",
    "Phone",
    "Email",
    "Requirement",
    "Location",
    "Budget",
    "Message",
    "Source",
    "Status",
    "Submitted",
  ];
  const rows = leads.map((lead) => [
    lead.name,
    lead.phone,
    lead.email,
    lead.requirement,
    lead.location,
    lead.budget,
    lead.message,
    lead.source,
    lead.status,
    lead.createdAt ? new Date(lead.createdAt).toLocaleString("en-IN") : "",
  ]);

  const csvContent = [headers, ...rows].map((row) => row.map(toCsvValue).join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `inaya-estates-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function LeadsTable({ leads, onStatusChange, onDelete }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedLead, setSelectedLead] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const filteredLeads = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
      const matchesQuery =
        !query ||
        [lead.name, lead.phone, lead.email, lead.location].some((field) =>
          String(field ?? "").toLowerCase().includes(query)
        );
      return matchesStatus && matchesQuery;
    });
  }, [leads, search, statusFilter]);

  async function handleDelete(lead) {
    if (!window.confirm(`Delete the lead from "${lead.name}"? This cannot be undone.`)) return;
    setDeletingId(lead._id);
    await onDelete(lead._id);
    setDeletingId(null);
  }

  return (
    <div className="rounded-2xl border border-ink-100 bg-white shadow-card">
      <div className="flex flex-col gap-3 border-b border-ink-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" aria-hidden="true" />
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search leads..."
              className="w-full rounded-xl border border-ink-200 py-2.5 pl-10 pr-4 text-sm text-ink-900 sm:w-64"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="rounded-xl border border-ink-200 py-2.5 px-3 text-sm text-ink-700"
          >
            <option value="all">All Statuses</option>
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => downloadCsv(filteredLeads)}
          disabled={filteredLeads.length === 0}
          className="btn-ghost !px-4 !py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[880px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs font-semibold uppercase tracking-wide text-ink-400">
              <th className="px-5 py-3">Lead</th>
              <th className="px-5 py-3">Requirement</th>
              <th className="px-5 py-3">Location</th>
              <th className="px-5 py-3">Budget</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Submitted</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-5 py-10 text-center text-sm text-ink-400">
                  No leads match your search or filter.
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr key={lead._id} className="border-b border-ink-50 last:border-0 hover:bg-surface/60">
                  <td className="px-5 py-3.5">
                    <p className="font-semibold text-ink-900">{lead.name}</p>
                    <p className="text-xs text-ink-500">{lead.phone}</p>
                  </td>
                  <td className="px-5 py-3.5 capitalize text-ink-600">{lead.requirement}</td>
                  <td className="px-5 py-3.5 text-ink-600">{lead.location || "—"}</td>
                  <td className="px-5 py-3.5 text-ink-600">{lead.budget || "—"}</td>
                  <td className="px-5 py-3.5">
                    <select
                      value={lead.status}
                      onChange={(event) => onStatusChange(lead._id, event.target.value)}
                      className={`rounded-full border-0 px-3 py-1.5 text-xs font-semibold ${STATUS_STYLES[lead.status] ?? "bg-ink-100 text-ink-600"}`}
                    >
                      {STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status} className="bg-white text-ink-900">
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-5 py-3.5 whitespace-nowrap text-xs text-ink-500">
                    {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString("en-IN") : "—"}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedLead(lead)}
                        aria-label={`View details for ${lead.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Eye className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(lead)}
                        disabled={deletingId === lead._id}
                        aria-label={`Delete lead from ${lead.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <LeadDetailsModal lead={selectedLead} onClose={() => setSelectedLead(null)} />
    </div>
  );
}

import { Users, CalendarDays, Sparkles, PhoneCall, MapPinned, CheckCircle2 } from "lucide-react";

function isToday(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

export default function StatsGrid({ leads, dateField = "createdAt" }) {
  const stats = [
    { label: "Total Leads", value: leads.length, icon: Users, color: "text-primary bg-primary/10" },
    {
      label: "Today's Leads",
      value: leads.filter((lead) => isToday(lead[dateField])).length,
      icon: CalendarDays,
      color: "text-secondary bg-secondary/10",
    },
    {
      label: "New",
      value: leads.filter((lead) => lead.status === "New").length,
      icon: Sparkles,
      color: "text-accent-700 bg-accent/10",
    },
    {
      label: "Contacted",
      value: leads.filter((lead) => lead.status === "Contacted").length,
      icon: PhoneCall,
      color: "text-primary bg-primary/10",
    },
    {
      label: "Site Visit",
      value: leads.filter((lead) => lead.status === "Site Visit").length,
      icon: MapPinned,
      color: "text-secondary bg-secondary/10",
    },
    {
      label: "Closed",
      value: leads.filter((lead) => lead.status === "Closed").length,
      icon: CheckCircle2,
      color: "text-ink-600 bg-ink-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-ink-100 bg-white p-4 shadow-card">
          <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${stat.color}`}>
            <stat.icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="mt-3 font-display text-2xl font-bold text-ink-900">{stat.value}</p>
          <p className="mt-0.5 text-xs font-medium text-ink-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

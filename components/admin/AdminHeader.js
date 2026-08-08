"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Loader2, LayoutDashboard, Facebook } from "lucide-react";
import Logo from "@/components/ui/Logo";

const NAV_TABS = [
  { href: "/admin", label: "Website Leads", icon: LayoutDashboard },
  { href: "/admin/meta-leads", label: "Meta Leads", icon: Facebook },
];

export default function AdminHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-10 border-b border-ink-100 bg-white/95 backdrop-blur-lg">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <Logo
          size={36}
          wordmarkClassName="font-display text-base font-bold leading-tight text-ink-900"
          subtitle="Leads Admin"
        />
        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-600 transition-colors hover:border-red-300 hover:text-red-600 disabled:opacity-60"
        >
          {loggingOut ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <LogOut className="h-4 w-4" aria-hidden="true" />}
          Logout
        </button>
      </div>
      <nav aria-label="Admin sections" className="flex gap-1 px-5 sm:px-8">
        {NAV_TABS.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex items-center gap-2 border-b-2 px-3 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent text-ink-500 hover:text-primary"
              }`}
            >
              <tab.icon className="h-4 w-4" aria-hidden="true" />
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

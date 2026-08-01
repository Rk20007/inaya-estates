"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Loader2 } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function AdminHeader() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-ink-100 bg-white/95 px-5 py-4 backdrop-blur-lg sm:px-8">
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
    </header>
  );
}

"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, User, LogIn, Loader2, AlertCircle } from "lucide-react";
import Logo from "@/components/ui/Logo";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Invalid username or password.");
        setStatus("idle");
        return;
      }

      const redirectTo = searchParams.get("redirect") || "/admin";
      router.push(redirectTo);
      router.refresh();
    } catch {
      setError("Unable to reach the server. Please try again.");
      setStatus("idle");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-3xl border border-ink-100 bg-white p-8 shadow-card">
        <Logo size={40} />
        <h1 className="mt-6 font-display text-2xl font-bold text-ink-900">Admin Login</h1>
        <p className="mt-1 text-sm text-ink-500">Sign in to manage leads and enquiries.</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" aria-hidden="true" />
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={credentials.username}
                onChange={handleChange}
                className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-11 pr-4 text-sm text-ink-900 transition-colors focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" aria-hidden="true" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={credentials.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-11 pr-4 text-sm text-ink-900 transition-colors focus:border-primary"
              />
            </div>
          </div>

          {error && (
            <p className="flex items-start gap-2 rounded-xl bg-red-50 px-3 py-2.5 text-xs font-medium text-red-600">
              <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {error}
            </p>
          )}

          <button type="submit" disabled={status === "submitting"} className="btn-primary mt-2 w-full disabled:opacity-70">
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Signing in...
              </>
            ) : (
              <>
                <LogIn className="h-4 w-4" aria-hidden="true" />
                Sign In
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}

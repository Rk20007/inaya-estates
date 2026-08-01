import Link from "next/link";
import { Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center container-px text-center">
      <p className="font-display text-8xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink-900 sm:text-3xl">
        This parcel doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-md text-ink-500">
        The page you&apos;re looking for has been moved or doesn&apos;t exist. Let&apos;s get you back to exploring land across the NCR Growth Corridor.
      </p>
      <Link href="/" className="btn-primary mt-8">
        <Home className="h-4 w-4" aria-hidden="true" />
        Back to Home
      </Link>
    </div>
  );
}

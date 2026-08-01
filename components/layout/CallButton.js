import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function CallButton() {
  return (
    <Link
      href={`tel:${siteConfig.phone}`}
      aria-label={`Call Inaya Estates at ${siteConfig.phoneDisplay}`}
      className="group fixed bottom-8 left-8 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-primary shadow-premium transition-transform hover:scale-110 lg:flex"
    >
      <Phone className="h-6 w-6 text-white" aria-hidden="true" />
    </Link>
  );
}

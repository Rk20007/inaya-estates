"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20land%20opportunities%20with%20Inaya%20Estates`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-secondary shadow-gold transition-transform hover:scale-110 lg:bottom-8 lg:right-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-secondary/60" aria-hidden="true" />
      <MessageCircle className="relative h-6 w-6 text-white" aria-hidden="true" />
    </Link>
  );
}

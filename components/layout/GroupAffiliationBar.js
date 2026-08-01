"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const linkClasses = "font-semibold text-accent-200 underline underline-offset-2 hover:text-accent";

export default function GroupAffiliationBar() {
  const { lang } = useLanguage();

  return (
    <div className="border-t border-white/10 bg-ink-900 py-4">
      <p className="container-px mx-auto max-w-8xl text-center text-xs leading-relaxed text-white/60 sm:text-sm">
        {lang === "en" ? (
          <>
            Inaya Estates is part of{" "}
            <span className="font-semibold text-white">Inaya Group</span>, alongside{" "}
            <Link
              href="https://landbid.in"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              LandBid.in
            </Link>{" "}
            — our land bidding platform where you can list land, invite bids or place bids on listed
            land — and{" "}
            <Link
              href="https://inayainfratech.in"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Inaya Infratech
            </Link>
            , our construction company.
          </>
        ) : (
          <>
            Inaya Estates, <span className="font-semibold text-white">Inaya Group</span> का हिस्सा है, साथ
            ही{" "}
            <Link
              href="https://landbid.in"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              LandBid.in
            </Link>{" "}
            — हमारा भूमि बोली प्लेटफ़ॉर्म जहां आप ज़मीन लिस्ट कर सकते हैं, बोली मंगवा सकते हैं या लिस्टेड
            ज़मीन पर बोली लगा सकते हैं — और{" "}
            <Link
              href="https://inayainfratech.in"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Inaya Infratech
            </Link>
            , हमारी निर्माण कंपनी।
          </>
        )}
      </p>
    </div>
  );
}

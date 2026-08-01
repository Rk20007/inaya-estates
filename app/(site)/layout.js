import { getRealEstateAgentSchema, getWebsiteSchema } from "@/lib/schema";
import JsonLd from "@/components/schema/JsonLd";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GroupAffiliationBar from "@/components/layout/GroupAffiliationBar";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CallButton from "@/components/layout/CallButton";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";
import { EnquiryModalProvider } from "@/components/ui/EnquiryModal";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export default function SiteLayout({ children }) {
  return (
    <LanguageProvider>
      <EnquiryModalProvider>
        <JsonLd data={getRealEstateAgentSchema()} />
        <JsonLd data={getWebsiteSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-6 focus:py-3 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <GroupAffiliationBar />
        <Footer />
        <WhatsAppButton />
        <CallButton />
        <StickyMobileCTA />
        <LeadCaptureModal />
      </EnquiryModalProvider>
    </LanguageProvider>
  );
}

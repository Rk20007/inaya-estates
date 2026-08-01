import JsonLd from "@/components/schema/JsonLd";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";
import Hero from "@/components/sections/Hero";
import WhyInvest from "@/components/sections/WhyInvest";
import GrowthCorridor from "@/components/sections/GrowthCorridor";
import Locations from "@/components/sections/Locations";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", url: "/" }])} />
      <JsonLd data={getFaqSchema()} />

      <Hero />
      <WhyInvest />
      <GrowthCorridor />
      <Locations />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

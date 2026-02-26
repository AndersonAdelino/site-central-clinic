import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import { clinicInfo } from "@/data/content";

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), { ssr: true });
const ServicesGrid = dynamic(() => import("@/components/sections/ServicesGrid"), { ssr: true });
const LocationSection = dynamic(() => import("@/components/sections/LocationSection"), { ssr: true });

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": clinicInfo.name,
    "image": "https://site-central-clinic-vercel-app.vercel.app/og-image.jpg",
    "@id": "https://site-central-clinic-vercel-app.vercel.app/",
    "url": "https://site-central-clinic-vercel-app.vercel.app/",
    "telephone": clinicInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Otávio Lamartine, 138b, Centro",
      "addressLocality": "Jucurutu",
      "addressRegion": "RN",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:30",
        "closes": "17:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:30",
        "closes": "11:30"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <LocationSection />
    </>
  );
}

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import LocationSection from "@/components/sections/LocationSection";
import { clinicInfo } from "@/data/content";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": clinicInfo.name,
    "image": "https://centralclinicjucurutu.com.br/placeholder.jpg",
    "@id": "https://centralclinicjucurutu.com.br/",
    "url": "https://centralclinicjucurutu.com.br/",
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

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { services, doctors, clinicInfo } from "@/data/content";
import ServicePageClient from "./ServicePageClient";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Serviço não encontrado",
        };
    }

    return {
        title: `${service.title} em Jucurutu/RN`,
        description: service.shortDescription,
        openGraph: {
            title: `${service.title} | Central Clinic Jucurutu`,
            description: service.shortDescription,
            url: `https://centralclinicjucurutu.com.br/servicos/${service.slug}`,
            type: "article",
        }
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const relatedDoctors = doctors.filter(doc => service.relatedDoctors?.includes(doc.id));

    // If no related doctors, provide a generic "Equipe Central Clinic" card
    const displayDoctors = relatedDoctors.length > 0 ? relatedDoctors : [
        {
            id: 'generic-staff',
            name: "Equipe Especializada",
            specialty: service.title,
            imagePath: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=1000&auto=format&fit=crop" // Generic medical team image
        }
    ];

    // JSON-LD MedicalSpecialty Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalSpecialty",
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
            "@type": "MedicalClinic",
            "name": clinicInfo.name,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jucurutu",
                "addressRegion": "RN"
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServicePageClient
                service={service}
                displayDoctors={displayDoctors}
            />
        </>
    );
}

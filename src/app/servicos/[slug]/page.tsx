import { notFound } from "next/navigation";
import { Metadata } from "next";
import { services, doctors, clinicInfo } from "@/data/content";
import { Phone, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

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
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
                <Link href="/#servicos" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors mb-8">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Voltar para Serviços</span>
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight">
                            {service.title}
                        </h1>
                        <p className="text-primary font-medium mt-1">Atendimento Especializado</p>
                    </div>
                </div>

                <div className="prose prose-lg text-gray-600 mb-12">
                    <p className="lead text-xl text-gray-800 font-medium">
                        {service.shortDescription}
                    </p>
                    <p>
                        {service.longDescription}
                    </p>
                </div>



                <div className="mt-12 bg-primary/5 rounded-2xl p-8 md:p-10 text-center flex flex-col items-center">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                        Precisa de atendimento em {service.title}?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-lg">
                        Nossa equipe está pronta para tirar suas dúvidas e agendar o seu horário com todo o conforto.
                    </p>
                    <a
                        href={`https://wa.me/5584998183636?text=${encodeURIComponent(`Olá, gostaria de agendar uma consulta de ${service.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-lg"
                    >
                        <Phone className="h-6 w-6" />
                        <span>Agendar pelo WhatsApp</span>
                    </a>
                </div>

            </div>
        </div>
    );
}

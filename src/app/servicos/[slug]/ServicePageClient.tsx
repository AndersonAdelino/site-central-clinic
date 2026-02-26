"use client";

import { Service } from "@/data/content";
import { Phone, ArrowLeft, Calendar, User, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface Doctor {
    id: string;
    name: string;
    specialty: string;
    imagePath?: string;
}

interface ServicePageClientProps {
    service: Service;
    displayDoctors: Doctor[];
}

export default function ServicePageClient({ service, displayDoctors }: ServicePageClientProps) {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            {/* Header / Hero Area */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-background">
                {/* Accent Background Blobs */}
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10 hidden lg:block"></div>
                <div className="absolute top-1/2 left-0 -ml-32 -mt-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl z-0" />

                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href={service.category === 'especialidade' ? "/#especialidades" : "/#exames"}
                        className="inline-flex items-center gap-2 text-sm font-bold text-foreground/50 hover:text-primary transition-colors mb-16 group"
                    >
                        <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                        <span className="uppercase tracking-widest">Voltar para {service.category === 'especialidade' ? 'Especialidades' : 'Exames'}</span>
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                        <div className="lg:w-2/3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-1 bg-primary rounded-full"></div>
                                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">
                                        {service.category === 'especialidade' ? 'Especialidade Médica' : 'Exame Diagnóstico'}
                                    </span>
                                </div>
                                <h1 className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold text-foreground leading-[1.05] tracking-tight mb-8">
                                    {service.title}
                                </h1>
                                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-sans max-w-2xl">
                                    {service.shortDescription}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Description Column */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="prose prose-lg max-w-none text-foreground/70 font-sans"
                            >
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 flex items-center gap-3">
                                    <ShieldCheck className="text-primary h-8 w-8" />
                                    Sobre o Atendimento
                                </h2>
                                <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                                    {service.longDescription.split('\n').map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>

                                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-background p-8 rounded-[2rem] border border-foreground/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                        <h4 className="font-display font-bold text-foreground text-xl mb-3">Compromisso</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed">Atendimento humanizado e ético em todas as etapas, com foco total no seu bem-estar.</p>
                                    </div>
                                    <div className="bg-background p-8 rounded-[2rem] border border-foreground/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                        <h4 className="font-display font-bold text-foreground text-xl mb-3">Tecnologia</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed">Equipamentos modernos e protocolos atualizados para diagnósticos e tratamentos precisos.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Doctor Card Column */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2.5rem] border border-foreground/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] p-8 md:p-12 relative overflow-hidden"
                            >
                                {/* Decorative background blob */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -mr-12 -mt-12 z-0"></div>

                                <h3 className="text-sm font-bold text-secondary tracking-[0.2em] mb-10 text-center uppercase relative z-10">
                                    Disponibilidade
                                </h3>

                                <div className="space-y-10 relative z-10">
                                    {service.category === 'especialidade' ? (
                                        displayDoctors.map((doc) => (
                                            <div key={doc.id} className="flex flex-col items-center">
                                                <div className="relative mb-6">
                                                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10">
                                                        <Image
                                                            src={doc.imagePath || `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.name)}&background=00AEEF&color=fff&size=512`}
                                                            alt={doc.name}
                                                            fill
                                                            className="object-cover hover:scale-110 transition-transform duration-500"
                                                            unoptimized
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-2 -right-2 bg-white p-4 rounded-full shadow-lg border border-foreground/5 z-20">
                                                        <User className="h-6 w-6 text-primary" />
                                                    </div>
                                                </div>

                                                <div className="text-center mb-8">
                                                    <h4 className="text-3xl font-display font-bold text-foreground">{doc.name}</h4>
                                                    <p className="text-primary font-bold uppercase tracking-widest text-xs mt-2">
                                                        {doc.specialty}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center mb-10">
                                            <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-primary shadow-inner">
                                                <Calendar className="h-10 w-10" />
                                            </div>
                                            <p className="text-foreground/70 font-sans text-lg leading-relaxed">
                                                Nossa equipe técnica está preparada para realizar seu exame com total precisão e cuidado. Garantimos resultados rápidos e eficientes.
                                            </p>
                                        </div>
                                    )}

                                    <div className="space-y-6 pt-6 border-t border-foreground/5">
                                        <a
                                            href={`https://wa.me/5584998183636?text=${encodeURIComponent(`Olá, gostaria de agendar o exame de ${service.title}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-center gap-3 bg-cta hover:bg-cta-dark text-white w-full py-5 px-6 rounded-2xl font-bold text-lg transition-all shadow-[0_10px_20px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(249,115,22,0.6)] hover:-translate-y-1"
                                        >
                                            <Phone className="h-5 w-5 group-hover:animate-pulse" />
                                            <span>Agendar pelo WhatsApp</span>
                                        </a>

                                        <p className="text-center text-foreground/40 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                                            <ShieldCheck className="h-4 w-4" />
                                            Certificado de Qualidade
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

"use client";

import { Service } from "@/data/content";
import { Phone, ArrowLeft, Calendar, User, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServicePageClientProps {
    service: Service;
    displayDoctors: any[];
}

export default function ServicePageClient({ service, displayDoctors }: ServicePageClientProps) {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            {/* Header / Hero Area */}
            <section className="relative py-16 md:py-24 overflow-hidden bg-gray-50/50">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

                <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <Link
                        href={service.category === 'especialidade' ? "/#especialidades" : "/#exames"}
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors mb-12 group"
                    >
                        <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                        <span>Voltar para {service.category === 'especialidade' ? 'Especialidades' : 'Exames'}</span>
                    </Link>

                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
                                    {service.category === 'especialidade' ? 'Especialidade Médica' : 'Exame Diagnóstico'}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-[1.1] mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                                {service.shortDescription}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Description Column */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="prose prose-lg max-w-none text-gray-600"
                            >
                                <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <ShieldCheck className="text-primary h-8 w-8" />
                                    Sobre o Atendimento
                                </h2>
                                <div className="space-y-6 text-lg leading-relaxed">
                                    {service.longDescription.split('\n').map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>

                                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-2">Compromisso</h4>
                                        <p className="text-sm text-gray-500">Atendimento humanizado e ético em todas as etapas.</p>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-2">Tecnologia</h4>
                                        <p className="text-sm text-gray-500">Equipamentos modernos para diagnósticos precisos.</p>
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
                                className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl shadow-gray-200/50 p-8 md:p-10"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-8 text-center uppercase tracking-widest text-primary/60">
                                    Agendar Agora
                                </h3>

                                <div className="space-y-8">
                                    {service.category === 'especialidade' ? (
                                        displayDoctors.map((doc) => (
                                            <div key={doc.id} className="flex flex-col items-center">
                                                <div className="relative mb-6">
                                                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl">
                                                        <img
                                                            src={doc.imagePath || `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.name)}&background=00AEEF&color=fff&size=512`}
                                                            alt={doc.name}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.name)}&background=00AEEF&color=fff&size=512`;
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-full shadow-lg border border-gray-100">
                                                        <User className="h-6 w-6 text-primary" />
                                                    </div>
                                                </div>

                                                <div className="text-center mb-8">
                                                    <h4 className="text-2xl font-display font-bold text-gray-900">{doc.name}</h4>
                                                    <p className="text-primary font-bold uppercase tracking-wide text-sm mt-1">
                                                        {doc.specialty}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center mb-8">
                                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                                <Calendar className="h-10 w-10" />
                                            </div>
                                            <p className="text-gray-600 font-medium">
                                                Nossa equipe técnica está preparada para realizar seu exame com total precisão e cuidado.
                                            </p>
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <a
                                            href={`https://wa.me/5584998183636?text=${encodeURIComponent(`Olá, gostaria de agendar o exame de ${service.title}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1"
                                        >
                                            <Phone className="h-6 w-6" />
                                            <span>Agendar pelo WhatsApp</span>
                                        </a>

                                        <p className="text-center text-gray-400 text-sm font-medium flex items-center justify-center gap-2">
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

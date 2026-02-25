"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, StarHalf } from "lucide-react";
import { clinicInfo } from "@/data/content";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white pt-32 md:pt-24 lg:pt-40 pb-16 md:pb-24">
            {/* Background Graphic Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

            <div className="max-w-[1080px] relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                            Onde seu <span className="text-primary italic">sorriso</span> e <span className="text-primary italic">saúde</span> é a nossa missão
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                            Das consultas especializadas aos exames diagnósticos. Oferecemos uma estrutura completa para garantir segurança e bem estar em cada atendimento.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={clinicInfo.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1"
                            >
                                <Phone className="h-5 w-5" />
                                <span>Agendar Consulta</span>
                            </a>
                            <a
                                href="#especialidades"
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-100 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-full font-bold transition-all"
                            >
                                <span>Especialidades</span>
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>

                        <div className="mt-10 flex flex-col gap-2">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4].map((star) => (
                                    <Star key={star} className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                                ))}
                                <StarHalf className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                                <span className="ml-2 font-display font-bold text-lg text-gray-900">4.8/5.0</span>
                            </div>
                            <p className="text-sm font-medium text-gray-500">Avaliação média baseada na satisfação de nossos pacientes</p>
                        </div>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:ml-auto"
                    >
                        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                            {/* Note: In a real scenario you would put the real clinic image here */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 mix-blend-multiply z-10 rounded-2xl md:rounded-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
                                alt="Consultório médico moderno na Central Clinic em Jucurutu"
                                className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, StarHalf } from "lucide-react";
import { clinicInfo } from "@/data/content";

import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-32">
            {/* Background Grain/Depth Elements instead of Glassmorphism */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl" />

            <div className="max-w-[1280px] relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-start">

                    {/* Left: Massive Typographic Content (Asymmetric 60/40 Split) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-[60%] z-10"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-display font-bold text-foreground leading-[1.05] tracking-tight mb-8">
                            Onde seu <br className="hidden md:block" />
                            <span className="text-primary">sorriso</span> e <br className="hidden md:block" />
                            <span className="text-primary">saúde</span> é a<br className="hidden md:block" />
                            nossa missão.
                        </h1>
                        <p className="text-lg md:text-xl text-foreground mb-10 leading-relaxed max-w-lg font-sans">
                            Das consultas especializadas aos exames diagnósticos. Oferecemos uma estrutura premium para garantir segurança e bem-estar em cada atendimento.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <a
                                href={clinicInfo.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-cta hover:bg-cta-dark text-white px-8 py-4 rounded-lg font-sans font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                            >
                                <Phone className="h-5 w-5" />
                                <span>Agendar Consulta</span>
                            </a>
                            <a
                                href="#especialidades"
                                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-foreground/10 hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-lg font-sans font-bold transition-all duration-300"
                            >
                                <span>Especialidades</span>
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Overlapping Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-[40%] relative mt-10 lg:mt-0"
                    >
                        {/* Review Badge Overlaid */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-white p-6 rounded-xl shadow-xl z-20 border border-foreground/5 max-w-[200px]"
                        >
                            <div className="flex items-center gap-1 mb-2">
                                <Star className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                                <Star className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                                <Star className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                                <Star className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                                <StarHalf className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                            </div>
                            <span className="block font-display font-bold text-2xl text-foreground mb-1">4.8/5.0</span>
                            <p className="text-xs font-sans text-foreground leading-tight">Avaliação baseada na satisfação dos nossos pacientes</p>
                        </motion.div>

                        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl border border-foreground/5 bg-muted">
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 transition-opacity duration-500 hover:opacity-0"></div>
                            <Image
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
                                alt="Consultório médico moderno na Central Clinic em Jucurutu"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

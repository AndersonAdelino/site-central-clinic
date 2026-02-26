"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Image from "next/image";

export default function AboutSection() {
    const benefits = [
        "Cuidado Humanizado e Ético",
        "Especialistas em Diversas Áreas",
        "Estrutura Moderna e Confortável",
        "Tecnologia Diagnóstica Avançada"
    ];

    return (
        <section id="sobre" className="py-24 lg:py-40 bg-white relative z-10 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-background rounded-l-3xl -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0">

                    {/* Editorial Text Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-5/12 lg:pr-16"
                    >
                        <div className="w-16 h-1 bg-secondary mb-8 rounded-full"></div>
                        <h2 className="text-sm font-bold text-secondary tracking-[0.2em] uppercase mb-4">A Central Clinic</h2>

                        <h3 className="text-5xl md:text-6xl font-display font-bold text-foreground leading-[1.1] tracking-tight mb-8">
                            Saúde premium e <span className="text-primary italic relative">
                                especializada
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                                </svg>
                            </span> no coração de Jucurutu.
                        </h3>

                        <article className="prose prose-lg text-foreground/85 mb-10 font-sans">
                            <p className="text-lg md:text-xl leading-relaxed">
                                Nascemos para transformar o acesso à saúde na região. Unimos uma equipe multidisciplinar e tecnologia de ponta para garantir um atendimento médico e odontológico de excelência. Nós cuidamos do que realmente importa: o bem-estar da sua família.
                            </p>
                        </article>

                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                        <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="font-semibold text-foreground border-b border-transparent group-hover:border-foreground/20 transition-all duration-300">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Overlapping Images Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-7/12 relative min-h-[500px] md:min-h-[600px] mt-12 lg:mt-0"
                    >
                        {/* Primary Big Image */}
                        <div className="absolute top-0 right-0 w-4/5 h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] z-10 border border-foreground/5 bg-muted">
                            <Image
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
                                alt="Dentista trabalhando"
                                fill
                                sizes="(max-width: 768px) 80vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Secondary Overlapping Image */}
                        <div className="absolute bottom-0 left-0 w-3/5 h-[300px] md:h-[350px] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] z-20 border-8 border-white bg-white">
                            <Image
                                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop"
                                alt="Médico conversando com paciente"
                                fill
                                sizes="(max-width: 768px) 60vw, 35vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Floating Stats Block */}
                        <div className="absolute top-20 -left-12 md:left-4 z-30 bg-white p-6 md:p-8 rounded-3xl shadow-[0_30px_50px_-20px_rgba(59,130,246,0.3)] border border-foreground/5 animate-bounce-slow">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-inner">
                                    <span className="font-display font-bold text-white text-3xl">+10</span>
                                </div>
                                <div>
                                    <p className="font-bold text-foreground text-xl leading-none">Anos de</p>
                                    <p className="text-foreground/80 text-sm uppercase tracking-widest mt-1">Experiência</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

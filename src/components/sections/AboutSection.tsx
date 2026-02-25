"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
    const benefits = [
        "Cuidado Humanizado e Ético",
        "Especialistas em Diversas Áreas",
        "Estrutura Moderna e Confortável",
        "Tecnologia Diagnóstica Avançada"
    ];

    return (
        <section id="sobre" className="py-20 bg-gray-50/50">
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
                                alt="Dentista trabalhando"
                                className="rounded-2xl object-cover h-64 w-full"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop"
                                alt="Médico conversando com paciente"
                                className="rounded-2xl object-cover h-64 w-full mt-8"
                            />
                        </div>
                        {/* Decorative block */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-xl">
                            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                                <span className="font-display font-bold text-accent text-2xl">+10</span>
                            </div>
                            <p className="text-center font-bold text-xs mt-2 text-gray-800">Anos de<br />Experiência</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Sobre a Clínica</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">
                            Saúde completa e especializada no coração de Jucurutu.
                        </h3>

                        <article className="prose prose-lg text-gray-600 mb-8">
                            <p>
                                A <strong>Central Clinic</strong> nasceu para transformar o acesso à saúde em Jucurutu e região. Unimos uma equipe multidisciplinar e tecnologia de ponta para garantir que você não precise sair da cidade para ter um atendimento médico e odontológico de excelência. Nosso compromisso é com o seu equilíbrio físico e o cuidado global da sua família.
                            </p>
                        </article>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                                    <span className="font-medium text-gray-800">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { clinicInfo } from "@/data/content";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
            {/* Background Graphic Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight tracking-tight mb-6">
                            Clínica Médica e Odontológica em <span className="text-primary">Jucurutu</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                            Atendimento multidisciplinar e humanizado para você e sua família. Excelência em saúde, estrutura moderna e o conforto que você merece.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={clinicInfo.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <Phone className="h-5 w-5" />
                                <span>Agendar Consulta</span>
                            </a>
                            <a
                                href="#servicos"
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-full font-semibold transition-all"
                            >
                                <span>Conheça os Serviços</span>
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>

                        <div className="mt-10 flex items-center gap-4 text-sm font-medium text-gray-500">
                            <div className="flex -space-x-2">
                                {/* Fallback avatar circles */}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
                            </div>
                            <p>Mais de <strong className="text-gray-900">5.000+</strong> pacientes atendidos</p>
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
                            <div className="absolute inset-0 z-20 flex items-center justify-center">
                                {/* Decorative element over image */}
                                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-[80%] text-center">
                                    <p className="font-display font-bold text-xl text-primary mb-1">Qualidade de Vida</p>
                                    <p className="text-sm font-medium text-gray-600">A saúde da sua família em boas mãos.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

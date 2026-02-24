"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/content";
import { ArrowRight, SmilePlus, Bone, Activity, Baby, Users, HeartPulse, Brain, Stethoscope, Apple, Sparkles, Microscope, Eye } from "lucide-react";

// Helper component to render icons dynamically
const getIcon = (iconName: string, className: string = "h-8 w-8") => {
    const IconProps = { className, strokeWidth: 1.5 };
    switch (iconName) {
        case 'SmilePlus': return <SmilePlus {...IconProps} />;
        case 'Bone': return <Bone {...IconProps} />;
        case 'Activity': return <Activity {...IconProps} />;
        case 'Baby': return <Baby {...IconProps} />;
        case 'Users': return <Users {...IconProps} />;
        case 'HeartPulse': return <HeartPulse {...IconProps} />;
        case 'Brain': return <Brain {...IconProps} />;
        case 'Stethoscope': return <Stethoscope {...IconProps} />;
        case 'Apple': return <Apple {...IconProps} />;
        case 'Sparkles': return <Sparkles {...IconProps} />;
        case 'Microscope': return <Microscope {...IconProps} />;
        case 'Eye': return <Eye {...IconProps} />;
        default: return <HeartPulse {...IconProps} />;
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicesGrid() {
    const specialties = services.filter(s => s.category === 'especialidade');
    const exams = services.filter(s => s.category === 'exame');

    return (
        <section id="servicos" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Excelência em Saúde</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                        Nossos Serviços
                    </h3>
                    <p className="text-gray-600 text-lg">
                        Oferecemos uma ampla variedade de especialidades médicas e exames laboratoriais e de imagem em um só lugar.
                    </p>
                </div>

                {/* ESPECIALIDADES */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <h4 className="text-xl font-display font-bold text-gray-900 uppercase tracking-widest px-4 bg-white">Especialidades</h4>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {specialties.map((service) => (
                            <motion.div key={service.id} variants={itemVariants}>
                                <Link
                                    href={`/servicos/${service.slug}`}
                                    className="group block h-full bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 hover:shadow-[0_8px_30_rgba(0,0,0,0.1)] hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {getIcon(service.iconName, "h-7 w-7")}
                                    </div>

                                    <h5 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h5>

                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                                        {service.shortDescription}
                                    </p>

                                    <div className="flex items-center text-sm font-bold text-primary group-hover:text-primary-dark mt-auto pt-4 border-t border-gray-100">
                                        <span>Saiba mais</span>
                                        <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* EXAMES */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <h4 className="text-xl font-display font-bold text-gray-900 uppercase tracking-widest px-4 bg-white">Exames</h4>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {exams.map((service) => (
                            <motion.div key={service.id} variants={itemVariants}>
                                <Link
                                    href={`/servicos/${service.slug}`}
                                    className="group block h-full bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 hover:shadow-[0_8px_30_rgba(0,0,0,0.1)] hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                        {getIcon(service.iconName, "h-7 w-7")}
                                    </div>

                                    <h5 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h5>

                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                                        {service.shortDescription}
                                    </p>

                                    <div className="flex items-center text-sm font-bold text-accent group-hover:text-accent-dark mt-auto pt-4 border-t border-gray-100">
                                        <span>Saiba mais</span>
                                        <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

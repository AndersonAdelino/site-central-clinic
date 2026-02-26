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
        <section id="especialidades" className="py-24 lg:py-40 bg-background relative z-10 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Sticky Header */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 lg:h-[calc(100vh-10rem)] flex flex-col pt-10">
                        <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>
                        <h2 className="text-sm font-bold text-secondary tracking-[0.2em] uppercase mb-4">Excelência Médica</h2>
                        <h3 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                            Nossos<br />
                            <span className="text-primary italic">Serviços</span>
                        </h3>
                        <p className="text-foreground text-lg md:text-xl font-sans leading-relaxed mb-10 max-w-sm">
                            Ampla variedade de especialidades médicas e exames em um só lugar, com equipamentos de última geração e profissionais focados em você.
                        </p>
                        <div className="mt-auto hidden lg:block">
                            <p className="text-sm text-foreground font-bold uppercase tracking-widest mb-4">Deslize para explorar</p>
                            <div className="w-px h-24 bg-foreground/10 animate-pulse"></div>
                        </div>
                    </div>

                    {/* Right Scrolling Grid */}
                    <div className="lg:w-2/3">
                        {/* ESPECIALIDADES */}
                        <div className="mb-24">
                            <div className="flex items-center gap-4 mb-8">
                                <h4 className="text-3xl font-display font-bold text-foreground">Especialidades</h4>
                                <div className="h-px bg-foreground/10 flex-1 ml-4"></div>
                            </div>

                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {specialties.map((service, idx) => (
                                    <motion.div key={service.id} variants={itemVariants} className={idx % 2 !== 0 ? "md:mt-12" : ""}>
                                        <Link
                                            href={`/servicos/${service.slug}`}
                                            className="group flex flex-col h-full bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-foreground/5 hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150"></div>

                                            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10 shadow-inner">
                                                {getIcon(service.iconName, "h-8 w-8")}
                                            </div>

                                            <h5 className="text-2xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors relative z-10">
                                                {service.title}
                                            </h5>

                                            <p className="text-foreground text-base mb-8 leading-relaxed font-sans flex-grow relative z-10">
                                                {service.shortDescription}
                                            </p>

                                            <div className="flex items-center text-sm font-bold text-primary group-hover:text-primary-dark mt-auto pt-6 border-t border-foreground/5 relative z-10">
                                                <span className="font-sans uppercase tracking-wider text-xs">Saiba mais</span>
                                                <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* EXAMES */}
                        <div id="exames" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-8">
                                <h4 className="text-3xl font-display font-bold text-foreground">Exames</h4>
                                <div className="h-px bg-foreground/10 flex-1 ml-4"></div>
                            </div>

                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {exams.map((service, idx) => (
                                    <motion.div key={service.id} variants={itemVariants} className={idx % 2 !== 0 ? "md:mt-12" : ""}>
                                        <Link
                                            href={`/servicos/${service.slug}`}
                                            className="group flex flex-col h-full bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-foreground/5 hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(96,165,250,0.15)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150"></div>

                                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500 relative z-10 shadow-inner">
                                                {getIcon(service.iconName, "h-8 w-8")}
                                            </div>

                                            <h5 className="text-2xl font-bold font-display text-foreground mb-4 group-hover:text-secondary transition-colors relative z-10">
                                                {service.title}
                                            </h5>

                                            <p className="text-foreground text-base mb-8 leading-relaxed font-sans flex-grow relative z-10">
                                                {service.shortDescription}
                                            </p>

                                            <div className="flex items-center text-sm font-bold text-secondary group-hover:text-primary-dark mt-auto pt-6 border-t border-foreground/5 relative z-10">
                                                <span className="font-sans uppercase tracking-wider text-xs">Saiba mais</span>
                                                <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

"use client";

import { Star, StarHalf, Phone, ShieldCheck, HeartPulse } from "lucide-react";
import Image from "next/image";
import { clinicInfo } from "@/data/content";

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-background/30 rounded-l-[5rem] -z-10 hidden lg:block"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* Left content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left opacity-0 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                            <ShieldCheck className="h-4 w-4" />
                            Atendimento Seguro e Ético
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                            Onde seu <br />
                            <span className="text-primary">saúde</span> é a<br className="hidden md:block" />
                            nossa missão.
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-lg font-sans">
                            Das consultas especializadas aos exames diagnósticos. Oferecemos uma estrutura premium para garantir segurança e bem-estar em cada atendimento.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <a
                                href={clinicInfo.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
                            >
                                <Phone className="h-5 w-5" />
                                <span>Agendar Consulta</span>
                            </a>
                            <a
                                href="#especialidades"
                                className="w-full sm:w-auto flex items-center justify-center text-gray-600 hover:text-primary font-bold px-8 py-5 transition-colors"
                            >
                                Ver Especialidades
                            </a>
                        </div>

                        {/* Social Proof Mini */}
                        <div className="mt-12 flex items-center gap-4 pt-8 border-t border-gray-100 w-full lg:w-auto justify-center lg:justify-start">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <Image
                                            src={`https://ui-avatars.com/api/?name=User+${i}&background=random`}
                                            alt="Paciente"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm">
                                <p className="font-bold text-gray-900 leading-none">+2.000 Pacientes</p>
                                <p className="text-gray-500 mt-1">atendidos com excelência</p>
                            </div>
                        </div>
                    </div>

                    {/* Right content / Video or Image */}
                    <div className="w-full lg:w-1/2 relative opacity-0 animate-scale-in animation-delay-200">
                        {/* Floating Review Card */}
                        <div className="absolute -bottom-6 -left-6 md:left-0 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[240px] hidden sm:block">
                            <div className="flex gap-1 mb-2">
                                <Star className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                                <Star className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                                <Star className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                                <Star className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                                <StarHalf className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
                            </div>
                            <span className="block font-display font-bold text-2xl text-foreground mb-1">4.8/5.0</span>
                            <p className="text-xs font-sans text-foreground/60 leading-tight">Avaliação baseada na satisfação dos nossos pacientes</p>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl border border-foreground/5 bg-muted">
                            <Image
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                                alt="Atendimento Central Clinic"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

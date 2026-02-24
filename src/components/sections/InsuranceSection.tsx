"use client";

import { insurances } from "@/data/content";
import { ShieldCheck } from "lucide-react";

export default function InsuranceSection() {
    return (
        <section id="convenios" className="py-20 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Acessibilidade</h2>
                        <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <ShieldCheck className="h-8 w-8 text-accent" />
                            Convênios Aceitos
                        </h3>
                        <p className="text-gray-600">
                            Trabalhamos com os principais planos de saúde para garantir que você receba o melhor atendimento com toda a comodidade.
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <a href="#contato" className="text-sm font-bold text-primary hover:text-primary-dark transition-colors border-b-2 border-primary pb-1">
                            Ver lista completa
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-6 lg:gap-10">
                    {insurances.map((insurance) => (
                        <div
                            key={insurance.id}
                            className="flex items-center justify-center bg-gray-50 rounded-xl px-8 py-6 w-[160px] md:w-[200px] hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 grayscale hover:grayscale-0"
                        >
                            {/* Fallback to text if logos are missing */}
                            <span className="font-display font-bold text-gray-500 text-lg md:text-xl text-center">
                                {insurance.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { clinicInfo } from "@/data/content";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function LocationSection() {
    const [showMap, setShowMap] = useState(false);

    return (
        <section id="localizacao" className="py-20 relative bg-gray-50">
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[500px] bg-gray-200 group">
                        {!showMap ? (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                                <Image
                                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop"
                                    alt="Mapa de Jucurutu"
                                    fill
                                    className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="relative z-20 flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg animate-pulse">
                                        <MapPin className="h-8 w-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Ver Mapa Interativo</h4>
                                    <p className="text-gray-600 text-sm mb-6 max-w-[240px]">Clique abaixo para carregar o mapa e ver nossa localização exata.</p>
                                    <button
                                        onClick={() => setShowMap(true)}
                                        className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95"
                                    >
                                        Carregar Mapa
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.807817345674!2d-37.02145952414371!3d-6.03560426092789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b01798006acc13%3A0x1acc113962f9a0c7!2sCentral%20Clinic!5e0!3m2!1spt-BR!2sbr!4v1740437504358!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                                title="Localização da Central Clinic no Google Maps"
                            ></iframe>
                        )}
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Onde Estamos</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8 leading-tight">
                            Venha nos fazer uma visita em Jucurutu
                        </h3>

                        <div className="space-y-8">

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Endereço Completo</h4>
                                    <p className="text-gray-600 leading-relaxed max-w-sm">
                                        {clinicInfo.address}
                                    </p>
                                    <a href={clinicInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm font-bold text-primary hover:text-primary-dark">
                                        <span>Como chegar</span>
                                        <Navigation className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                    <Clock className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Horário de Funcionamento</h4>
                                    <ul className="text-gray-600 space-y-1">
                                        <li><strong className="font-medium">Seg a Sex:</strong> {clinicInfo.hours.weekdays}</li>
                                        <li><strong className="font-medium">Sábado:</strong> {clinicInfo.hours.saturday}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <Phone className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Fale Conosco</h4>
                                    <p className="text-gray-600 mb-1">{clinicInfo.phone}</p>
                                    <p className="text-gray-600">{clinicInfo.email}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

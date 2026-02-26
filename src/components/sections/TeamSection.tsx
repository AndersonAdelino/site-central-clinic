"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { doctors } from "@/data/content";

export default function TeamSection() {
    return (
        <section id="equipe" className="py-20 bg-gray-50/80">
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Profissionais</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                        Corpo Clínico
                    </h3>
                    <p className="text-gray-600 text-lg">
                        Conheça os especialistas dedicados a cuidar da sua saúde com excelência, ética e profundo respeito ao paciente.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={doctor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
                        >
                            <div className="aspect-[4/5] overflow-hidden relative bg-gray-200">
                                {/* Fallback image if doctor image fails or is missing */}
                                <Image
                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=0D8ABC&color=fff&size=512&font-size=0.33`}
                                    alt={doctor.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 350px"
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80"></div>

                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <h4 className="text-2xl font-display font-bold mb-1">{doctor.name}</h4>
                                    <p className="text-white font-medium">{doctor.specialty}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

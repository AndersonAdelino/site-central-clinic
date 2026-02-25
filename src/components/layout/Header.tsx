"use client";

import Link from "next/link";
import { Phone, Menu, X, HeartPulse } from "lucide-react";
import { clinicInfo } from "@/data/content";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: "Home", href: "/" },
        { label: "Sobre Nós", href: "/#sobre" },
        { label: "Especialidades", href: "/#especialidades" },
        { label: "Exames", href: "/#exames" },
        { label: "Localização", href: "/#localizacao" },
    ];

    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
            <div className="mx-auto max-w-[1080px] bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl md:rounded-full transition-all duration-300 pointer-events-auto">
                <div className="px-4 sm:px-6">
                    <div className="flex justify-between items-center h-16 md:h-20">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <HeartPulse className="h-7 w-7 md:h-8 md:w-8 text-primary" strokeWidth={2.5} />
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-lg md:text-xl leading-tight text-foreground">
                                    Central Clinic
                                </span>
                                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-accent uppercase">
                                    Jucurutu
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex">
                            <a
                                href={clinicInfo.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                <Phone className="h-4 w-4" />
                                <span>Agendar</span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden border-t border-gray-100 overflow-hidden rounded-b-2xl">
                        <nav className="flex flex-col px-6 py-6 gap-4 bg-white/95 backdrop-blur-xl">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-bold text-gray-700 hover:text-primary transition-colors block py-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href={clinicInfo.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-primary text-white px-5 py-4 rounded-xl font-bold mt-2 shadow-lg"
                            >
                                <Phone className="h-5 w-5" />
                                <span>Agendar via WhatsApp</span>
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

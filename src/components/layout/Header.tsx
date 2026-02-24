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
        { label: "Serviços", href: "/#servicos" },
        { label: "Localização", href: "/#localizacao" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <HeartPulse className="h-8 w-8 text-primary" strokeWidth={2.5} />
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-xl leading-tight text-foreground">
                                Central Clinic
                            </span>
                            <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                                Jucurutu
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
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
                            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
                        >
                            <Phone className="h-4 w-4" />
                            <span>Agendar Consulta</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <nav className="flex flex-col px-4 pt-2 pb-6 gap-3">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-gray-700 block py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href={clinicInfo.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-medium mt-2"
                        >
                            <Phone className="h-5 w-5" />
                            <span>Agendar via WhatsApp</span>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

import Link from "next/link";
import { clinicInfo } from "@/data/content";
import { HeartPulse, MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand Col */}
                    <div className="space-y-4">
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
                        <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                            Clínica multidisciplinar com foco em atendimento humanizado e excelência em serviços de saúde para você e sua família.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Col */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 tracking-tight">Acesso Rápido</h3>
                        <ul className="space-y-3">
                            <li><Link href="/#sobre" className="text-sm text-gray-600 hover:text-primary transition-colors">Sobre Nós</Link></li>
                            <li><Link href="/#servicos" className="text-sm text-gray-600 hover:text-primary transition-colors">Nossos Serviços</Link></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 tracking-tight">Contato</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <a href={clinicInfo.whatsappLink} className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    {clinicInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <a href={`mailto:${clinicInfo.email}`} className="text-sm text-gray-600 hover:text-primary transition-colors break-words">
                                    {clinicInfo.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-600 leading-relaxed">
                                    {clinicInfo.address}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours Col */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 tracking-tight">Horário de Funcionamento</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Segunda a Sexta</p>
                                    <p className="text-sm text-gray-600 mt-0.5">{clinicInfo.hours.weekdays}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Sábado</p>
                                    <p className="text-sm text-gray-600 mt-0.5">{clinicInfo.hours.saturday}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Central Clinic Jucurutu. Todos os direitos reservados.
                    </p>
                    <p className="text-xs text-gray-400">
                        Desenvolvido com excelência
                    </p>
                </div>
            </div>
        </footer>
    );
}

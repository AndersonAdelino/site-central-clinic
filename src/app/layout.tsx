import type { Metadata } from "next";
import { Rubik, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://centralclinicjucurutu.com.br"), // Update with actual domain
  title: {
    template: "%s | Central Clinic Jucurutu",
    default: "Central Clinic Jucurutu | Excelência em Saúde",
  },
  description: "Clínica multidisciplinar com foco em atendimento humanizado e excelência em Jucurutu. Odontologia, Ortopedia, Ginecologia e mais.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Central Clinic Jucurutu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${rubik.variable} ${manrope.variable} antialiased flex flex-col min-h-screen`} suppressHydrationWarning>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Figtree, Noto_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${figtree.variable} ${notoSans.variable} antialiased flex flex-col min-h-screen`} suppressHydrationWarning>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

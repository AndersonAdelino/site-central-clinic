import type { Metadata } from "next";
import { Figtree, Noto_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://site-central-clinic-vercel-app.vercel.app"),
  title: {
    template: "%s | Central Clinic Jucurutu",
    default: "Central Clinic Jucurutu | Excelência em Saúde",
  },
  description: "Clínica multidisciplinar com foco em atendimento humanizado e excelência em Jucurutu. Odontologia, Ortopedia, Ginecologia e mais. Agende sua consulta agora.",
  keywords: ["clínica jucurutu", "dentista jucurutu", "médico jucurutu", "central clinic", "saúde jucurutu"],
  authors: [{ name: "Central Clinic" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Central Clinic Jucurutu",
    title: "Central Clinic Jucurutu | Excelência em Saúde",
    description: "Clínica multidisciplinar com excelência em Jucurutu. Odontologia, Ortopedia, Ginecologia e mais.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Central Clinic Jucurutu",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_components/aos-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Dra. Loyana Gonzaga | Médica Veterinária Especialista - Cuidados Completos para Pets",
  description:
    "Cuidados veterinários especializados com a Dra. Loyana Gonzaga. Consultas, cirurgias, emergências 24h e muito amor pelos pets. Atendimento humanizado com equipamentos modernos para seu animal de estimação.",
  keywords: [
    "veterinária",
    "médica veterinária",
    "loyana gonzaga",
    "consulta veterinária",
    "cirurgia animal",
    "emergência veterinária 24h",
    "vacinação pets",
    "clínica veterinária",
    "check-up animal",
    "exames veterinários",
    "cuidados pets",
  ],
  authors: [{ name: "Dra. Loyana Gonzaga" }],
  creator: "Dra. Loyana Gonzaga - Médica Veterinária",
  openGraph: {
    title: "Dra. Loyana Gonzaga | Médica Veterinária Especialista",
    description:
      "Cuidados veterinários completos com equipamentos modernos e atendimento humanizado. Seu pet merece o melhor cuidado médico especializado.",
    url: "https://loyana-gonzaga-cwqa.vercel.app/",
    siteName: "Dra. Loyana Gonzaga - Veterinária",
    images: [
      {
        url: "/og-image-veterinaria.jpeg",
        width: 1200,
        height: 630,
        alt: "Dra. Loyana Gonzaga - Médica Veterinária Especialista",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Loyana Gonzaga | Médica Veterinária",
    description: "Cuidados veterinários especializados com muito amor pelos pets",
    images: ["/og-image-veterinaria.jpeg"],
    creator: "@dra_loyana_vet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "WKbHrteBd7ZVAata6JEWdk1U8D2AAF8Smo41RTP5XFU",
  },
  alternates: {
    canonical: "https://loyana-gonzaga-cwqa.vercel.app/",
  },
  category: "Medicina Veterinária",
  other: {
    "geo.region": "BR-MG",
    "geo.placename": "Minas Gerais, Brasil",
    "format-detection": "telephone=yes",
    "theme-color": "#10b981",
  },
};

// ✅ Agora definimos os dados estruturados
const veterinaryStructuredData = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Dra. Loyana Gonzaga - Clínica Veterinária",
  url: "https://loyana-gonzaga-cwqa.vercel.app/",
  telephone: "+55 31 99999-9999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Exemplo, 123",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    postalCode: "30000-000",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Dados estruturados para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(veterinaryStructuredData),
          }}
        />

        {/* Meta tags adicionais */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#10b981" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}

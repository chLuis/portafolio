import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio.luischrestia.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luis Chrestia | Fullstack Developer",
    template: "%s | Luis Chrestia",
  },
  description:
    "Fullstack Developer especializado en React, Next.js y Node.js. Construyo aplicaciones rápidas, escalables y optimizadas para SEO con foco en experiencia real de usuario.",
  keywords: [
    "Fullstack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "React Native",
    "Luis Chrestia",
    "Desarrollo Web",
    "Frontend Developer",
    "Backend Developer",
    "Argentina",
  ],
  authors: [{ name: "Luis Chrestia", url: siteUrl }],
  creator: "Luis Chrestia",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Luis Chrestia | Portfolio",
    title: "Luis Chrestia | Fullstack Developer",
    description:
      "Fullstack Developer especializado en React, Next.js y Node.js. Construyo aplicaciones rápidas, escalables y optimizadas para SEO con foco en experiencia real de usuario.",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "Luis Chrestia - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Chrestia | Fullstack Developer",
    description:
      "Fullstack Developer especializado en React, Next.js y Node.js. Construyo aplicaciones rápidas, escalables y optimizadas para SEO.",
    images: ["/icon.svg"],
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
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

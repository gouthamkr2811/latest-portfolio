import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gouthamkr.in"),
  title: "Gouthaman K R — Python & Django Backend Developer",
  description:
    "Backend developer specializing in scalable microservices, high-throughput REST APIs, and robust payment & search infrastructures using Python, Django, and modern cloud technologies.",
  keywords: [
    "Gouthaman K R",
    "Python Developer",
    "Django Developer",
    "Backend Developer",
    "Full Stack Developer",
    "REST API",
    "Microservices",
    "Django REST Framework",
    "Elasticsearch",
    "Docker",
  ],
  openGraph: {
    title: "Gouthaman K R — Python & Django Backend Developer",
    description:
      "Architecting scalable microservices, high-throughput REST APIs, and robust payment & search infrastructures.",
    url: "https://gouthamkr.in",
    siteName: "Gouthaman K R Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gouthaman K R — Python & Django Backend Developer",
    description:
      "Architecting scalable microservices, high-throughput REST APIs, and robust payment & search infrastructures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

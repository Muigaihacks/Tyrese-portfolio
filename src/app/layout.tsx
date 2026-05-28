import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, JetBrains_Mono } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kratosystems.africa"),
  title: {
    default: "Kratos Systems, Engineered software for ambitious businesses",
    template: "%s · Kratos Systems",
  },
  description:
    "Kratos Systems builds production-grade web platforms, AI workflows, and internal tooling for businesses across Africa.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.ico?v=5", type: "image/x-icon" },
      { url: "/favicon.svg?v=5", type: "image/svg+xml" },
      { url: "/icon.svg?v=5", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg?v=5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg?v=5" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
});

export const metadata: Metadata = {
  title: "Kratos Systems",
  description: "Kratos Systems",
  icons: {
    icon: [
      // Include both cached and cache-busting variants.
      // Some browsers (notably Safari) may cache by path ignoring query strings.
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.ico?v=4", type: "image/x-icon" },
      { url: "/favicon.svg?v=4", type: "image/svg+xml" },
      { url: "/icon.svg?v=4", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg?v=4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Explicit icons to avoid cached/incorrect defaults on some browsers */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico?v=4" />
        <link rel="icon" href="/favicon.svg?v=4" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Sixtyfour } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sixtyfour = Sixtyfour({
  variable: "--font-sixtyfour",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conceptos básicos de React",
  description: "Cuatro conceptos fundamentales para entender React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sixtyfour.variable} antialiased bg-slate-800 min-w-44`}
      >
        {children}
      </body>
    </html>
  );
}

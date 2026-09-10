import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABHISHEK — Visual Creative · Graphic Designer · Creative Technologist",
  description:
    "Ideas Deserve Better Visuals. Personal portfolio and digital design studio of Abhishek. Specializing in visual identities, 3D art direction, social campaign design, UI/UX architecture & creative development.",
  keywords: [
    "Abhishek Visual Creative",
    "Abhishek Graphic Designer",
    "Abhishek Portfolio",
    "Brand Identity Designer",
    "3D Art Director",
    "TEDx Design Lead",
    "UI UX Architect",
    "Creative Technologist",
    "3D Archive Portfolio",
  ],
  authors: [{ name: "Abhishek" }],
  openGraph: {
    title: "ABHISHEK — Visual Creative & Graphic Designer",
    description: "IDEAS DESERVE BETTER VISUALS. Art-directed portfolio & 3D visual archive.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#F7F7F3] text-[#111111] font-sans antialiased min-h-screen selection:bg-[#FFB800] selection:text-[#111111]">
        {children}
      </body>
    </html>
  );
}

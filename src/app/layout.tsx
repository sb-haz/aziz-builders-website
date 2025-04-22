import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aziz Building Services | Professional Building Contractors",
  description: "West Midlands premier building services company based in Stourport-on-Severn, offering home extensions, renovations and new builds with exceptional craftsmanship.",
  keywords: "building services, contractors, home extensions, renovations, new builds, Stourport-on-Severn, West Midlands",
  authors: [{ name: "Aziz Building Services" }],
  openGraph: {
    title: "Aziz Building Services | Professional Building Contractors",
    description: "West Midlands premier building services company based in Stourport-on-Severn",
    url: "https://azizbuildingservices.co.uk",
    siteName: "Aziz Building Services",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { Layout } from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Azulita Holistics | Natural Healing & Wellness",
    template: "%s | Azulita Holistics",
  },
  description: "Professional homeopathy, reiki, and holistic healing services",
  icons: {
    icon: "/azulita.svg",
    apple: "/azulita.svg",
  },
  verification: {
    google: "google-site-verification-code", // Add actual code when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>
          <Layout>{children}</Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}

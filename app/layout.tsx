import "./css/style.css";
import Header from "@/components/ui/header";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ESMK | KPMG Audit AI",
  description: "Optimisez vos missions d'audit avec KPMG Audit AI",
  metadataBase: new URL("https://kpmg-audit-ai.vercel.app"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "KPMG Audit AI",
    description: "Optimisez vos missions d'audit avec KPMG Audit AI",
    url: "https://kpmg-audit-ai.vercel.app",
    siteName: "KPMG Audit AI",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "KPMG Audit AI",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}

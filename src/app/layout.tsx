import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Floating from "@/components/site/Floating";
import Motion from "@/components/site/Motion";
import { CONFIG } from "@/config/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = `${CONFIG.name} — We Build & Grow Digital Businesses`;
const description =
  "GOPANI is one team for websites, mobile apps, custom software, SEO, Google & Meta ads and branding. We build your business online, then grow it with marketing that brings real customers.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", siteName: CONFIG.name },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28'><rect width='28' height='28' rx='6' fill='%23221C15'/><rect x='5' y='15' width='5' height='8' fill='%23E2A788'/><rect x='11.5' y='10' width='5' height='13' fill='%23E2A788'/><rect x='18' y='5' width='5' height='18' fill='%239C7A24'/></svg>",
  },
};

export const viewport: Viewport = { themeColor: "#221c15" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: CONFIG.legalName,
  description: "IT services and digital marketing company: websites, apps, software, SEO and ads.",
  url: "https://www.gopani.com",
  email: CONFIG.email,
  telephone: CONFIG.phone,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks the page as JS-enabled before first paint so scroll animations can hide elements without a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.setAttribute('data-js','')",
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c") }}
        />
        <SmoothScroll />
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <Floating />
        <Motion />
      </body>
    </html>
  );
}

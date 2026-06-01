import type { Metadata, Viewport } from "next";
import { Inter, Lora, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0F19",   /* navbar color */
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rakibulhasan.dev"),
  title: {
    default: "Mohammed Rakibul Hasan",
    template: "%s · Mohammed Rakibul Hasan",
  },
  description:
    "Incoming PhD student in Computer Engineering (Fall 2026) working on Quantum Communication, Quantum Key Distribution, Radar Sensing, and AI-driven systems under Dr. Jonathan Blakely.",
  keywords: [
    "Mohammed Rakibul Hasan",
    "Quantum Key Distribution",
    "QKD",
    "Quantum Communication",
    "Radar Sensing",
    "AI Researcher",
    "PhD Computer Engineering",
    "UAH",
    "Deep Learning",
  ],
  authors: [{ name: "Mohammed Rakibul Hasan" }],
  creator: "Mohammed Rakibul Hasan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakibulhasan.dev",
    title: "Mohammed Rakibul Hasan",
    description:
      "Incoming PhD student in Computer Engineering focusing on Quantum Communication, QKD, Radar Sensing, and AI.",
    siteName: "Mohammed Rakibul Hasan",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Rakibul Hasan",
    description: "Incoming PhD researcher · Quantum Communication · QKD · AI · Radar Sensing",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${lora.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

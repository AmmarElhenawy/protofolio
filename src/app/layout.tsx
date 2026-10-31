import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ammar-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s · Ammar Elhenawy",
    default: "Ammar Elhenawy — Backend & DevOps Engineer",
  },
  description:
    "Backend developer specializing in Laravel, NestJS and Node.js APIs, currently expanding into Docker and CI/CD.",
  keywords: [
    "backend developer",
    "devops",
    "portfolio",
    "laravel",
    "nestjs",
    "node.js",
    "docker",
  ],
  openGraph: {
    type: "website",
    siteName: "Ammar Elhenawy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0e10",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-[#0c0e10] text-[#eeeef0] font-body selection:bg-primary/30">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
<html lang="en" data-scroll-behavior="smooth"></html>

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

export const metadata: Metadata = {
  title: "Ammar Portfolio",
  description:
    "Backend architect & DevOps engineer specializing in high-concurrency systems and automated infrastructure.",
  keywords: [
    "backend",
    "devops",
    "engineer",
    "portfolio",
    "kubernetes",
    "golang",
    "nestjs",
  ],
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

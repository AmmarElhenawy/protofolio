"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import portrait from "@/assets/images/portrait-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative flex-1 flex items-center justify-center py-12 md:py-20 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(400px,100vw)] md:w-[800px] h-[min(400px,100vw)] md:h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#feca5d]/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero content: social rail is its own flex item so it can never overlap the text columns */}
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 grayscale animate-fadeColor">
        {/* Social rail — hidden on mobile, visible md+; positioned in normal flow, not absolute */}
        <div className="hidden md:flex flex-col gap-6 self-center opacity-0 animate-slideDown [animation-delay:200ms]">
          <a
            href="https://github.com/AmmarElhenawy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded bg-surface-container-high border border-outline-variant/20 hover:border-primary/50 hover:text-primary transition-all duration-300 text-slate-400"
          >
            <Icon name="github" size={16} label="GitHub profile" />
          </a>
          <a
            href="https://www.linkedin.com/in/ammar-elhenawy-393b60252/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded bg-surface-container-high border border-outline-variant/20 hover:border-primary/50 hover:text-primary transition-all duration-300 text-slate-400"
          >
            <Icon name="linkedin" size={16} label="LinkedIn profile" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-24 flex-1">
          {/* Left text — hidden on mobile */}
          <div className="text-right flex-1 hidden md:block opacity-0 animate-fadeUp [animation-delay:200ms]">
            <p className="font-headline uppercase tracking-[0.4em] text-primary mb-2 text-sm">
              Identification
            </p>
          </div>

          {/* Central portrait */}
          <div className="relative group opacity-0 animate-slideDown [animation-delay:200ms]">
            <div className="absolute inset-0 aura-glow rounded-none -z-10 bg-primary/10 scale-110" />
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-none border-4 border-outline-variant/30 overflow-hidden backdrop-blur-md bg-surface-container-highest">
              <Image
                src={portrait}
                alt="Ammar Elhenawy"
                fill
                sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 384px"
                loading="eager"
                fetchPriority="high"
                className="object-cover hover:grayscale-0 transition-all duration-700 scale-110"
              />
            </div>
            {/* HUD overlay */}
            <div className="absolute -top-4 -right-4 bg-surface-bright/80 backdrop-blur-md p-2 sm:p-3 rounded border border-outline-variant/20">
              <span className="font-headline text-[11px] tracking-widest uppercase text-tertiary block">
                Status
              </span>
              <span className="font-headline font-bold text-[10px] sm:text-xs text-on-surface">
                READY_FOR_CODE
              </span>
            </div>
          </div>

          {/* Right text */}
          <div className="text-center md:text-left flex-1 opacity-0 animate-fadeUp [animation-delay:200ms]">
            {/* This is the page's single <h1> — always in the DOM at every width;
                only its layout (centered/mobile vs right-text/desktop) changes. */}
            <p className="block md:hidden font-headline uppercase tracking-[0.4em] text-primary mb-1 text-xs">
              Identification
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-headline font-black text-on-surface leading-none mb-4 md:mb-0">
              HELLO, I&apos;M{" "}
              <span className="text-glow-primary text-primary">AMMAR</span>
            </h1>

            <p className="font-headline uppercase tracking-[0.4em] text-[#feca5d] mb-2 mt-6 text-sm">
              Specialization
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-on-surface leading-tight">
              BACKEND &amp; <br />
              <span className="text-[#feca5d] text-glow-secondary">DEVOPS</span>{" "}
              <br />
              ENGINEER
            </h2>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start">
              <Link
                href="/projects"
                className="w-full sm:w-auto text-center bg-primary text-on-primary px-6 py-4 font-headline font-bold uppercase tracking-widest text-xs rounded-lg hover:brightness-110 transition-all active:scale-95"
              >
                Launch Projects
              </Link>
              <Link
                href="/experience"
                className="w-full sm:w-auto text-center border border-outline-variant text-on-surface px-6 py-4 font-headline font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-white/5 transition-all active:scale-95"
              >
                Experience
              </Link>
            </div>

            {/* Mobile social icons */}
            <div className="flex md:hidden justify-center gap-4 mt-6">
              <a
                href="https://github.com/AmmarElhenawy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high border border-outline-variant/20 hover:border-primary/50 hover:text-primary transition-all duration-300 text-slate-400"
              >
                <Icon name="github" size={16} label="GitHub profile" />
              </a>
              <a
                href="https://www.linkedin.com/in/ammar-elhenawy-393b60252/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high border border-outline-variant/20 hover:border-primary/50 hover:text-primary transition-all duration-300 text-slate-400"
              >
                <Icon name="linkedin" size={16} label="LinkedIn profile" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import profile from "../profile.jpeg";

export default function HeroSection() {
  return (
    <section className="relative flex-1 flex items-center justify-center py-12 md:py-20 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#feca5d]/5 rounded-full blur-[100px]" />
      </div>

      {/* Social rail — hidden on mobile, visible md+ */}
      <div className="hidden md:flex absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 flex-col gap-8 z-20 opacity-0 animate-[slideDown_0.9s_ease-out_forwards] delay-200">
        <a
          href="https://github.com/AmmarElhenawy"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded bg-surface-container-high border border-outline-variant/20 hover:border-primary/50 hover:text-primary transition-all duration-300 text-slate-400"
        >
          <span className="material-symbols-outlined">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/ammar-elhenawy-393b60252/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded bg-surface-container-high border border-outline-variant/20 hover:border-primary/50 hover:text-primary transition-all duration-300 text-slate-400"
        >
          <span className="material-symbols-outlined">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </span>
        </a>
        <div className="h-24 w-[1px] bg-outline-variant/20 mx-auto" />
      </div>

      {/* Hero content */}
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-24 grayscale animate-[fadeColor_1.2s_ease-out_forwards]">
        {/* Left text — hidden on mobile */}
        <div className="text-right flex-1 hidden md:block opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] delay-200">
          <p className="font-headline uppercase tracking-[0.4em] text-primary mb-2 text-sm">
            Identification
          </p>
          <h2 className="font-headline text-5xl lg:text-7xl font-black text-on-surface leading-none">
            HELLO, <br /> I&apos;M{" "}
            <span className="text-glow-primary text-primary">AMMAR</span>
          </h2>
        </div>

        {/* Central portrait */}
        <div className="relative group opacity-0 animate-[slideDown_0.9s_ease-out_forwards] delay-200">
          <div className="absolute inset-0 aura-glow rounded-none -z-10 bg-purple-600/10 scale-110" />
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-none border-4 border-outline-variant/30 overflow-hidden backdrop-blur-md bg-surface-container-highest">
            <Image
              src={profile}
              alt="Developer Portrait"
              fill
              className="object-cover hover:grayscale-0 transition-all duration-700 scale-110"
              unoptimized
            />
          </div>
          {/* HUD overlay */}
          <div className="absolute -top-4 -right-4 bg-surface-bright/80 backdrop-blur-md p-2 sm:p-3 rounded border border-outline-variant/20">
            <span className="font-headline text-[9px] sm:text-[10px] tracking-widest uppercase text-tertiary block">
              Status
            </span>
            <span className="font-headline font-bold text-[10px] sm:text-xs text-on-surface">
              READY_FOR_CODE
            </span>
          </div>
        </div>

        {/* Right text */}
        <div className="text-center md:text-left flex-1 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] delay-200">
          {/* Mobile-only name */}
          <div className="block md:hidden mb-2">
            <p className="font-headline uppercase tracking-[0.4em] text-primary mb-1 text-xs">
              Identification
            </p>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-on-surface leading-none mb-4">
              HELLO, I&apos;M{" "}
              <span className="text-glow-primary text-primary">AMMAR</span>
            </h2>
          </div>

          <p className="font-headline uppercase tracking-[0.4em] text-[#feca5d] mb-2 text-sm">
            Specialization
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-on-surface leading-tight animate-[slideLoop_6s_ease-in-out_infinite]">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ammar-elhenawy-393b60252/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high border border-outline-variant/20 hover:border-primary/50 hover:text-primary transition-all duration-300 text-slate-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/icon";
import { PageHeading } from "@/components/ui/page-heading";
import hackathonPhoto from "@/assets/images/dana-hackathon.jpg";
import bannerPhoto from "@/assets/images/dana-banner.jpg";

export const metadata: Metadata = {
  title: "DANA — Pediatric Health Platform",
  description:
    "A NestJS medical support API for pediatric growth monitoring, role-based therapeutic coordination, and real-time chat — 3rd place at the Delta Hackathon 2025.",
};

type Feature = {
  icon: IconName;
  title: string;
  desc: string;
  tags: string[];
  color: string;
};

const coreFeatures = [
  "Authentication (JWT + Refresh Token)",
  "Role-Based Access Control (RBAC)",
  "Full CRUD operations with request validation (DTO / class-validator)",
  "Centralized error handling",
  "Redis caching for session performance",
  "Payment integration (Paymob)",
  "File upload (Cloudinary)",
  "Real-time chat (Socket.io gateway)",
  "Email system (queue-based MailerModule)",
  "MongoDB with Mongoose",
];

const features: Feature[] = [
  {
    icon: "shieldShaded",
    title: "Secure Auth Framework",
    desc: "JWT with Refresh Token rotation and RBAC via custom NestJS Guards.",
    tags: ["JWT", "Passport.js", "Bcrypt"],
    color: "text-[#ff8d8d]",
  },
  {
    icon: "lightningCharge",
    title: "Redis Caching",
    desc: "Cache-aside strategy for active session metadata.",
    tags: [],
    color: "text-[#feca5d]",
  },
  {
    icon: "cloudArrowUp",
    title: "Cloudinary",
    desc: "Cloudinary integration for secure file uploads.",
    tags: [],
    color: "text-[#ff8d8d]",
  },
  {
    icon: "chatLeftText",
    title: "Chat Gateway",
    desc: "Socket.io for real-time doctor-patient communication.",
    tags: [],
    color: "text-[#a9ffdf]",
  },
  {
    icon: "cashStack",
    title: "Payment Integration",
    desc: "Paymob payment gateway for subscription-based consultations.",
    tags: [],
    color: "text-[#feca5d]",
  },
  {
    icon: "envelope",
    title: "Mailer Module",
    desc: "Queue-based transactional emails via Nodemailer and EJS.",
    tags: [],
    color: "text-slate-300",
  },
];

export default function DanaPage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <PageHeading
            title="Project: DANA"
            eyebrow="NestJS API"
            tag="NESTJS API"
            intro="A medical support API leveraging AI for growth monitoring and role-based therapeutic coordination."
            actions={
              <a
                href="https://documenter.getpostman.com/view/42406499/2sBXcHizG6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff8d8d] text-[#640012] px-6 py-3 font-label font-bold text-xs tracking-widest uppercase flex items-center gap-2 rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,141,141,0.2)]"
              >
                <Icon name="bookHalf" size={16} />
                API Docs
              </a>
            }
          />
          <p className="mt-4 text-sm text-slate-400 font-body italic">
            Client project — source code is not public; API documentation is available above.
          </p>

          {/* Hero banner */}
          <div className="relative h-64 w-full overflow-hidden bg-surface-container-low mt-8">
            <Image
              src={bannerPhoto}
              alt="DANA hackathon presentation banner"
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/30" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex flex-wrap gap-6 sm:gap-12">
              {[
                { label: "Architecture", value: "NestJS Modular", color: "text-[#ff8d8d]" },
                { label: "Database", value: "MongoDB / Mongoose", color: "text-[#feca5d]" },
                { label: "Real-time", value: "Socket.io Chat", color: "text-[#a9ffdf]" },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <p className={`text-[11px] font-label ${color} uppercase tracking-widest mb-1`}>
                    {label}
                  </p>
                  <p className="text-xl font-headline font-bold text-on-surface tracking-tight">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-surface-container-low p-8 relative overflow-hidden border-t-2 border-[#ff7578]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ff8d8d]/5 rounded-full blur-3xl" />
            <h2 className="text-xs font-label text-[#ff8d8d] uppercase tracking-[0.3em] mb-6">
              01 // Project Idea
            </h2>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              DANA is a fully integrated medical support platform designed to assist children&apos;s development from birth through early childhood.
              It combines health tracking, AI-based growth monitoring, developmental screening, and parenting guidance into one unified system.
            </p>
            <div className="p-4 bg-surface-container-high border-l-2 border-[#ff8d8d]/40">
              <p className="text-xs font-label text-slate-400 uppercase mb-2">
                Solution
              </p>
              <p className="text-sm font-body italic text-on-surface-variant">
                The platform solves the problem of fragmented healthcare tools by providing a centralized system for doctors and parents with real-time insights and structured medical data.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 relative overflow-hidden border-t-2 border-[#00edba]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#a9ffdf]/5 rounded-full blur-3xl" />
            <h2 className="text-xs font-label text-[#a9ffdf] uppercase tracking-[0.3em] mb-6">
              02 // Core Features
            </h2>
            <ul className="text-slate-300 font-body leading-relaxed mb-6 list-disc list-inside space-y-1">
              {coreFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4">
              {["Growth Monitoring", "Real-time Chat"].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <Icon name="checkAll" size={16} className="text-[#a9ffdf]" />
                  <span className="text-[11px] font-label text-slate-400 uppercase">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievement */}
        <section className="w-full mb-24">
          <div className="bg-surface-container-low p-6 sm:p-10 relative overflow-hidden border-t-2 border-[#00edba]">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#00edba]/10 rounded-full blur-3xl" />

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-xs font-label text-[#00edba] uppercase tracking-[0.3em] mb-6">
                  03 // Achievement
                </h2>

                <h2 className="text-2xl font-headline font-bold text-white mb-4 flex items-center gap-2">
                  <span className="whitespace-nowrap">🏆 3rd Place</span>
                  <span>— Delta Hackathon 2025</span>
                </h2>

                <p className="text-slate-300 font-body leading-relaxed mb-6">
                  Our team, DANA, placed{" "}
                  <span className="text-[#00edba] font-semibold">3rd</span> in
                  the Delta Hackathon 2025 (AI Vibes theme), organized by
                  Tanta University in collaboration with ITI and Appout —
                  competing against 120+ teams from across the Delta region.
                </p>

                <p className="text-slate-400 leading-relaxed">
                  The result reflected the team&apos;s technical execution
                  under time pressure as much as the underlying idea.
                </p>
              </div>

              <div className="relative w-full h-64 md:h-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={hackathonPhoto}
                  alt="The DANA team receiving their 3rd place award at the Delta Hackathon 2025"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="mb-24">
          <h2 className="text-xs font-label text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">
            Engine Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-surface-container-high p-6 group hover:bg-[#1d2023] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon name={f.icon} size={20} className={f.color} />
                  <h2 className="font-headline font-bold text-lg tracking-tight">
                    {f.title}
                  </h2>
                </div>
                <p className="text-sm text-slate-400 mb-4">{f.desc}</p>
                {f.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-surface-container-low px-3 py-1 rounded text-[11px] font-label text-slate-400 border border-outline-variant/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-label text-[#ff8d8d] uppercase tracking-[0.3em] mb-4">
              Architecture Design
            </h2>
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tighter">
              NestJS Modular Engine
            </h2>
            <p className="text-slate-400 font-body leading-relaxed mb-8">
              Strictly decoupled modular architecture. Each feature exists as a
              standalone module, facilitating horizontal scaling.
            </p>
            <ul className="space-y-4">
              {[
                { n: "01", c: "text-[#ff8d8d]", title: "Shared Module", desc: "Global utilities, database connections, and logger middleware." },
                { n: "02", c: "text-[#a9ffdf]", title: "Dependency Injection", desc: "Strict IoC implementation for service decoupling." },
                { n: "03", c: "text-[#feca5d]", title: "Exception Filters", desc: "Unified error handling with standardized JSON:API responses." },
                { n: "04", c: "text-[#a9ffdf]", title: "System Scalability", desc: "Modular design that supports a future microservices split." },
              ].map(({ n, c, title, desc }) => (
                <li key={n} className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 ${c} text-xs font-bold font-headline`}>
                    {n}
                  </div>
                  <div>
                    <p className="text-sm font-headline font-bold text-on-surface uppercase tracking-tight">
                      {title}
                    </p>
                    <p className="text-xs text-slate-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Code schematic */}
          <div className="lg:col-span-7 bg-surface-container-low p-8 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[11px] font-label text-slate-400 uppercase tracking-widest">
                module graph
              </span>
            </div>
            <div className="space-y-4 font-mono text-[11px]">
              <div className="flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#ff8d8d]">
                <span className="text-[#ff8d8d]">UserModule</span>
                <span className="text-slate-400">-&gt; Profile / Roles / Permissions</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#a9ffdf]">
                <span className="text-[#a9ffdf]">AuthModule</span>
                <span className="text-slate-400">-&gt; Service, Controller, Guard</span>
              </div>
              <div className="ml-16 flex items-center gap-4 p-3 bg-[#0c0e10]/40">
                <span className="text-slate-300">DatabaseModule</span>
                <span className="text-slate-400">-&gt; Mongoose connection</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#feca5d]">
                <span className="text-[#feca5d]">PaymentModule</span>
                <span className="text-slate-400">-&gt; Paymob integration</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-surface-container-high/30">
                <span className="text-slate-300">NotificationModule</span>
                <span className="text-slate-400">-&gt; Mailer queue</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom links */}
        <section className="bg-surface-container-low p-12 text-center border border-outline-variant/5 mb-12">
          <h2 className="text-2xl font-headline font-bold mb-8 tracking-tighter">
            Explore Technical Documentation
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://documenter.getpostman.com/view/42406499/2sBXcHizG6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-surface-container-high hover:bg-surface-bright transition-all w-48 rounded-lg group"
            >
              <Icon name="bookHalf" size={28} className="text-[#ff8d8d] mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-label text-slate-400 uppercase tracking-widest mb-1">
                API Docs
              </span>
              <span className="text-sm font-headline font-bold text-on-surface">
                Postman
              </span>
            </a>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

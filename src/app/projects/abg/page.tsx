import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/icon";
import { PageHeading } from "@/components/ui/page-heading";
import banner from "@/assets/images/abg-banner.jpg";

export const metadata: Metadata = {
  title: "ABG Social App",
  description:
    "A Laravel social networking engine with real-time interactions, friend requests, and media-rich posts, built with Sanctum authentication and Pusher.",
};

type Feature = {
  icon: IconName;
  title: string;
  desc: string;
  tags: string[];
  color: string;
};

const features: Feature[] = [
  {
    icon: "shieldShaded",
    title: "Secure API Layer",
    desc: "Laravel Sanctum for secure token-based authentication, protecting every mobile-ready endpoint.",
    tags: ["Sanctum", "Token Auth"],
    color: "text-[#7dc8ff]",
  },
  {
    icon: "columnsGap",
    title: "Modular Controllers",
    desc: "Specialized controllers for Friends, Posts, Comments, and Search ensuring high maintainability.",
    tags: [],
    color: "text-[#feca5d]",
  },
  {
    icon: "database",
    title: "Data Integrity",
    desc: "Relational schema using Laravel Migrations and Seeders for consistent environment setup.",
    tags: [],
    color: "text-[#a9ffdf]",
  },
  {
    icon: "archive",
    title: "Containerization Ready",
    desc: "Configured with Laravel Sail (Docker) providing a standardized PHP and MySQL dev environment.",
    tags: [],
    color: "text-[#ff8d8d]",
  },
  {
    icon: "lightningCharge",
    title: "Real-time Ready",
    desc: "Database and events structure designed for easy Laravel Echo WebSocket integration.",
    tags: [],
    color: "text-[#feca5d]",
  },
  {
    icon: "cloudArrowUp",
    title: "Media Uploads",
    desc: "File storage integration for media-rich posts with scalable cloud delivery.",
    tags: [],
    color: "text-slate-300",
  },
];

export default function AbgPage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <PageHeading
            title="ABG Social App"
            eyebrow="Laravel API"
            tag="LARAVEL API"
            accent="info"
            intro="A social networking engine built with Laravel providing a full-cycle user experience — secure auth, real-time notifications, and media-rich posts."
            actions={
              <>
                <a
                  href="https://documenter.getpostman.com/view/42406499/2sBXc8qPbR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7dc8ff] text-[#001a2c] px-6 py-3 font-label font-bold text-xs tracking-widest uppercase flex items-center gap-2 rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(125,200,255,0.2)]"
                >
                  <Icon name="bookHalf" size={16} />
                  API Docs
                </a>
                <a
                  href="https://github.com/AmmarElhenawy/abg-social-app/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-container-high border border-outline-variant/30 text-on-surface px-6 py-3 font-label font-bold text-xs tracking-widest uppercase flex items-center gap-2 rounded-lg hover:bg-surface-bright transition-all"
                >
                  <Icon name="code" size={16} />
                  GitHub
                </a>
              </>
            }
          />

          {/* Hero banner */}
          <div className="relative h-64 w-full overflow-hidden bg-surface-container-low flex items-end mt-8">
            <Image
              src={banner}
              alt="ABG Social App registration screen"
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/30" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex flex-wrap gap-6 sm:gap-12">
              {[
                { label: "Framework", value: "Laravel 11", color: "text-[#7dc8ff]" },
                { label: "Database", value: "MySQL", color: "text-[#feca5d]" },
                { label: "Real-time", value: "Pusher", color: "text-[#a9ffdf]" },
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

        {/* Problem / Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#7dc8ff]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#7dc8ff]/5 rounded-full blur-3xl" />
            <h2 className="text-xs font-label text-[#7dc8ff] uppercase tracking-[0.3em] mb-6">
              01 // Problem
            </h2>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              Traditional niche communities often lack a centralized, private
              space for seamless interaction, media sharing, and real-time
              networking.
            </p>
            <div className="p-4 bg-surface-container-high border-l-2 border-[#7dc8ff]/40">
              <p className="text-xs font-label text-slate-400 uppercase mb-2">
                Solution
              </p>
              <p className="text-sm font-body italic text-on-surface-variant">
                A robust social networking engine that provides a full-cycle
                user experience — from secure authentication and profile
                customization to friend requests, media-rich posts, and instant
                notifications.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#00edba]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#a9ffdf]/5 rounded-full blur-3xl" />
            <h2 className="text-xs font-label text-[#a9ffdf] uppercase tracking-[0.3em] mb-6">
              02 // Features
            </h2>
            <ul className="text-slate-300 font-body leading-relaxed mb-6 list-disc list-inside space-y-1">
              <li>Sanctum token authentication</li>
              <li>Role-based access</li>
              <li>Full CRUD operations with validation</li>
              <li>Centralized error handling</li>
              <li>File uploads for media-rich posts</li>
              <li>Real-time notifications (Pusher)</li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              {["Real-time Notifications", "Media-rich Posts"].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <Icon name="checkAll" size={16} className="text-[#a9ffdf]" />
                  <span className="text-[11px] font-label text-slate-400 uppercase">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-low p-6 sm:p-10 relative overflow-hidden border-t-2 border-[#ff9bd2] md:col-span-2">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#ff9bd2]/10 rounded-full blur-3xl" />
            <h2 className="text-xs font-label text-[#ff9bd2] uppercase tracking-[0.3em] mb-6">
              03 // Task
            </h2>
            <p className="text-slate-300 font-body leading-relaxed mb-8 max-w-2xl">
              This task was assigned by <span className="text-white font-semibold">ABG Company</span>{" "}
              with a strict deadline of <span className="text-white font-semibold">2 days</span>.
              The requirement was to build a structured backend system following both
              <span className="text-[#7dc8ff]"> API architecture</span> and
              <span className="text-[#a9ffdf]"> MVC pattern</span>, ensuring clean code, scalability, and proper separation of concerns.
            </p>
            <a
              href="https://drive.google.com/file/d/1wOqOo_Q8ibc3-YxJ7LvmFzoUt0kAG3MZ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-label uppercase tracking-widest border border-[#ff9bd2]/40 text-[#ff9bd2] hover:bg-[#ff9bd2]/10 transition"
            >
              View Task Requirement
              <span>→</span>
            </a>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="mb-24">
          <h2 className="text-xs font-label text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">
            Engineering &amp; Technical Highlights
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
            <h2 className="text-xs font-label text-[#7dc8ff] uppercase tracking-[0.3em] mb-4">
              Architecture Design
            </h2>
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tighter">
              MVC · RESTful API
            </h2>
            <p className="text-slate-400 font-body leading-relaxed mb-8">
              Model-View-Controller with RESTful Resource Controllers for
              consistent JSON responses and standard HTTP status codes.
            </p>
            <ul className="space-y-4">
              {[
                { n: "01", c: "text-[#7dc8ff]", title: "FriendsController", desc: "Friend request flows and friendship management." },
                { n: "02", c: "text-[#feca5d]", title: "PostsController", desc: "Media-rich posts with file upload support." },
                { n: "03", c: "text-[#a9ffdf]", title: "CommentsController", desc: "Threaded discussion and engagement logic." },
                { n: "04", c: "text-[#ff8d8d]", title: "ProfileController", desc: "Profile management and user data handling." },
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
          <div className="lg:col-span-7 bg-surface-container-low p-4 sm:p-8 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[11px] font-label text-slate-400 uppercase tracking-widest">
                routes/api.php
              </span>
            </div>
            <div className="space-y-4 font-mono text-[11px]">
              <div className="flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#7dc8ff]">
                <span className="text-[#7dc8ff]">Route::resource</span>
                <span className="text-slate-400">-&gt; posts (PostController)</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#feca5d]">
                <span className="text-[#feca5d]">Route::resource</span>
                <span className="text-slate-400">-&gt; friends (FriendsController)</span>
              </div>
              <div className="ml-16 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#a9ffdf]">
                <span className="text-[#a9ffdf]">Route::resource</span>
                <span className="text-slate-400">-&gt; profiles (ProfileController)</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-[#0c0e10]/40">
                <span className="text-slate-300">Sanctum::middleware</span>
                <span className="text-slate-400">-&gt; auth:sanctum</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-surface-container-high/30">
                <span className="text-[#ff8d8d]">WebSocket</span>
                <span className="text-slate-400">-&gt; Pusher / Laravel Echo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom links */}
        <section className="bg-surface-container-low p-6 sm:p-12 text-center border border-outline-variant/5 mb-12">
          <h2 className="text-2xl font-headline font-bold mb-8 tracking-tighter">
            Explore Technical Documentation
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: "bookHalf" as const, label: "API Demo", value: "Postman", color: "text-[#7dc8ff]", href: "https://documenter.getpostman.com/view/42406499/2sBXc8qPbR" },
              { icon: "codeSquare" as const, label: "Source Code", value: "GitHub", color: "text-[#feca5d]", href: "https://github.com/AmmarElhenawy/abg-social-app/tree/main" },
            ].map(({ icon, label, value, color, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-surface-container-high hover:bg-surface-bright transition-all w-48 rounded-lg group"
              >
                <Icon name={icon} size={28} className={`${color} mb-3 group-hover:scale-110 transition-transform`} />
                <span className="text-[11px] font-label text-slate-400 uppercase tracking-widest mb-1">
                  {label}
                </span>
                <span className="text-sm font-headline font-bold text-on-surface">
                  {value}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}

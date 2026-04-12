import AppShell from "@/components/layout/AppShell";
import Image from "next/image";
import hackathon_IMG from "../../../components/dana3.jpg";
import dana_IMG from "../../../components/dana6.jpeg";

const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-shaded" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
    </svg>, title: "Secure Auth Framework", desc: "JWT with Refresh Token rotation and RBAC via custom NestJS Guards.", tags: ["JWT", "Passport.js", "Bcrypt"], span: "md:col-span-2", filled: true, color: "text-[#ff8d8d]"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-charge" viewBox="0 0 16 16">
      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
    </svg>
    , title: "Redis-Caching", desc: "Cache-aside strategy for active session metadata.", tags: [], span: "", filled: false, color: "text-[#feca5d]", border: "border-l-2 border-[#feca5d]"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z" />
      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
    </svg>, title: "Cloudinary", desc: "Cloudinary integration for secure file uploads.", tags: [], span: "", filled: false, color: "text-[#ff8d8d]", border: "border-r-2 border-[#ff8d8d]"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
      <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
    </svg>, title: "ChatGateway", desc: "Socket.io for real-time doctor-patient communication.", tags: [], span: "", filled: false, color: "text-[#a9ffdf]"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
      <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
    </svg>, title: "Payment Integration", desc: "paymob payment gateway for subscription-based consultations.", tags: [], span: "md:col-span-2", filled: false, color: "text-[#feca5d]"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
    </svg>, title: "MailerModule", desc: "Queue-based transactional emails via Nodemailer and EJS.", tags: [], span: "", filled: false, color: "text-slate-300"
  },
];

export default function DanaPage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#ff7578]/20 text-[#ff8d8d] text-[10px] font-bold tracking-widest uppercase border border-[#ff8d8d]/20">
                  Production Ready
                </span>
                <span className="text-slate-600 font-label text-xs tracking-tighter">
                  PROJECT_ID: DANA-0922
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black tracking-tighter text-on-surface mb-4">
                Project: DANA
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-body">
                An advanced medical support API leveraging AI for growth
                monitoring and role-based therapeutic coordination.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://documenter.getpostman.com/view/42406499/2sBXcHizG6"
                target="_blank"
                className="bg-[#ff8d8d] text-[#640012] px-6 py-3 font-label font-bold text-xs tracking-widest uppercase flex items-center gap-2 rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,141,141,0.2)]"
              >
                <span className="material-symbols-outlined text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                </span>
                Demo
              </a>
            </div>
          </div>

          {/* Hero banner */}
          <div className="relative h-64 w-full overflow-hidden bg-surface-container-low">
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
            <Image
              src={dana_IMG}
              alt="DANA Neural Network"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover opacity-40 grayscale"
              unoptimized
            />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex flex-wrap gap-6 sm:gap-12">
              {[
                { label: "Architecture", value: "NestJS Modular", color: "text-[#ff8d8d]" },
                { label: "Database", value: "MongoDB / Mongoose", color: "text-[#feca5d]" },
                { label: "Response Time", value: "42ms avg", color: "text-[#a9ffdf]" },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <p className={`text-[10px] font-label ${color} uppercase tracking-widest mb-1`}>
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
            <h3 className="text-xs font-label text-[#ff8d8d] uppercase tracking-[0.3em] mb-6">
              01 // PROJECT IDEA
            </h3>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              DANA is a fully integrated medical support platform designed to assist children’s development from birth through early childhood.
              It combines health tracking, AI-based growth monitoring, developmental screening, and parenting guidance into one unified system.
            </p>
            <div className="p-4 bg-surface-container-high border-l-2 border-[#ff8d8d]/40">
              <p className="text-xs font-label text-slate-500 uppercase mb-2">
                Technical Constraint
              </p>
              <p className="text-sm font-body italic text-on-surface-variant">
                &quot;The platform solves the problem of fragmented healthcare tools by providing a centralized system for doctors and parents with real-time insights and structured medical data.&quot;
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 relative overflow-hidden border-t-2 border-[#00edba]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#a9ffdf]/5 rounded-full blur-3xl" />
            <h3 className="text-xs font-label text-[#a9ffdf] uppercase tracking-[0.3em] mb-6">
              02 // CORE FEATURES
            </h3>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              Authentication (JWT + Refresh Token)
              - Role-Based Access Control (RBAC)
              - Full CRUD Operations
              - Request Validation (DTO / class-validator)
              - Centralized Error Handling
              - Redis Caching (Performance Optimization)
              - Payment Integration (paymob)
              - File Upload (Cloudinary)
              - Real-time Chat (Socket.io Gateway)
              - Email System (MailerModule)
              - MongoDB with Mongoose
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Real-time Telemetry", "Predictive Analysis"].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a9ffdf] text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16">
                      <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                    </svg>

                  </span>
                  <span className="text-[10px] font-label text-slate-400 uppercase">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* 04 // Achievement */}
        <section className="w-full mb-24">
          <div className="bg-surface-container-low p-10 relative overflow-hidden border-t-2 border-[#00edba]">

            {/* Glow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#00edba]/10 rounded-full blur-3xl" />

            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Text */}
              <div>
                <h3 className="text-xs font-label text-[#00edba] uppercase tracking-[0.3em] mb-6">
                  03 // ACHIEVEMENT
                </h3>

                <h2 className="text-2xl font-bold text-white mb-4">
                  Delta Hackathon 2025 — 3rd Place Winner 🏆
                </h2>

                <p className="text-slate-300 font-body leading-relaxed mb-6">
                  Proud to announce that our team <span className="text-white font-semibold">Dana</span> secured
                  <span className="text-[#00edba] font-semibold"> 3rd place</span> in the
                  <span className="text-white"> Delta Hackathon 2025 (AI Vibes Theme)</span>,
                  organized by Tanta University in collaboration with ITI and Appout.
                </p>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Competing against <span className="text-white">120+ teams</span> from across the Delta region,
                  we built an AI-powered solution driven by strong teamwork, dedication, and a shared vision.
                </p>

                <p className="text-slate-400 italic mb-8">
                  "This achievement reflects not only technical skills, but also true team spirit, persistence, and belief in the idea."
                </p>

                {/* Button */}
                {/* <a
                  href="#project-details"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-label uppercase tracking-widest border border-[#00edba]/40 text-[#00edba] hover:bg-[#00edba]/10 transition"
                >
                  Explore Project
                  <span>→</span>
                </a> */}
              </div>

              {/* Image */}
              <div className="relative w-full h-64 md:h-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={hackathon_IMG}
                  alt="Hackathon Achievement"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="mb-24">
          <h3 className="text-xs font-label text-slate-500 uppercase tracking-[0.3em] mb-8 text-center">
            Engine Core Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className={`${f.span} bg-surface-container-high p-6 group hover:bg-[#1d2023] transition-all ${f.border || ""}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`material-symbols-outlined ${f.color}`}
                    style={f.filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    {f.icon}
                  </span>
                  <h4 className="font-headline font-bold text-lg tracking-tight">
                    {f.title}
                  </h4>
                </div>
                <p className="text-sm text-slate-400 mb-4">{f.desc}</p>
                {f.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-surface-container-low px-3 py-1 rounded text-[10px] font-label text-slate-400 border border-outline-variant/10"
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
            <h3 className="text-xs font-label text-[#ff8d8d] uppercase tracking-[0.3em] mb-4">
              Architecture Design
            </h3>
            <h4 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tighter">
              NestJS Modular Engine
            </h4>
            <p className="text-slate-400 font-body leading-relaxed mb-8">
              Strictly decoupled modular architecture. Each feature exists as a
              standalone module, facilitating horizontal scaling.
            </p>
            <ul className="space-y-4">
              {[
                { n: "01", c: "text-[#ff8d8d]", title: "Shared Module", desc: "Global utilities, database connections, and logger middleware." },
                { n: "02", c: "text-[#a9ffdf]", title: "Dependency Injection", desc: "Strict IoC implementation for service decoupling." },
                { n: "03", c: "text-[#feca5d]", title: "Exception Filters", desc: "Unified error handling with standardized JSON:API responses." },
                { n: "04", c: "text-[#a9ffdf]", title: "System Scalability", desc: " Scalable design for microservices transition." },
              ].map(({ n, c, title, desc }) => (
                <li key={n} className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 ${c} text-xs font-bold font-headline`}>
                    {n}
                  </div>
                  <div>
                    <p className="text-sm font-headline font-bold text-on-surface uppercase tracking-tight">
                      {title}
                    </p>
                    <p className="text-xs text-slate-500">{desc}</p>
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
              <span className="text-[10px] font-label text-slate-600 uppercase tracking-widest">
                nest-cli.json // schematic_view
              </span>
            </div>
            <div className="space-y-4 font-mono text-[11px]">
              <div className="flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#ff8d8d]">
                <span className="text-[#ff8d8d]">UserModule</span>
                <span className="text-slate-600">-&gt;Profile / Roles / Permissions</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#a9ffdf]">
                <span className="text-[#a9ffdf]">AuthModule</span>
                <span className="text-slate-600">-&gt; [Service, Controller, Guard]</span>
              </div>
              <div className="ml-16 flex items-center gap-4 p-3 bg-[#0c0e10]/40">
                <span className="text-slate-400">DatabaseModule</span>
                <span className="text-slate-600">-&gt; MongooseConnection</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#feca5d]">
                <span className="text-[#feca5d]">PaymentModule</span>
                <span className="text-slate-600">-&gt; paymob Integration</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-surface-container-high/30">
                <span className="text-slate-400">NotificationModule</span>
                <span className="text-slate-600">-&gt;  Mailer - Queue</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom links */}
        <section className="bg-surface-container-low p-12 text-center border border-outline-variant/5 mb-12">
          <h3 className="text-2xl font-headline font-bold mb-8 tracking-tighter">
            Explore Technical Documentation
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>
                , label: "API Docs", value: "Postman", color: "text-[#ff8d8d]", href: "https://documenter.getpostman.com/view/42406499/2sBXcHizG6"
              },

            ].map(({ icon, label, value, color, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                className="flex flex-col items-center p-6 bg-surface-container-high hover:bg-surface-bright transition-all w-48 rounded-lg group"
              >
                <span className={`material-symbols-outlined ${color} text-3xl mb-3 group-hover:scale-110 transition-transform`}>
                  {icon}
                </span>
                <span className="text-[10px] font-label text-slate-400 uppercase tracking-widest mb-1">
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

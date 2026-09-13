import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import { Icon, type IconName } from "@/components/ui/icon";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "Clinic & Patient System",
  description:
    "A Laravel MVC healthcare management system digitalizing patient registration, doctor referrals, and automated prescription generation.",
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
    icon: "personFill",
    title: "Patient Registration",
    desc: "Front-desk registration flow with dynamic doctor referrals and full historical patient timeline management.",
    tags: ["Laravel Auth", "Middleware"],
    color: "text-[#ff8d8d]",
  },
  {
    icon: "bookHalf",
    title: "Dynamic Record Tracking",
    desc: "Real-time views for Today's Records, Examined Patients, and Transferred Cases with AJAX status updates.",
    tags: [],
    color: "text-[#feca5d]",
  },
  {
    icon: "receipt",
    title: "Prescription PDF",
    desc: "Automated prescription generation with direct PDF print output for immediate clinical use.",
    tags: [],
    color: "text-[#a9ffdf]",
  },
  {
    icon: "lightningCharge",
    title: "Ajax Status Updates",
    desc: "Real-time AJAX-powered status flipping without page reload for a smooth clinical workflow.",
    tags: [],
    color: "text-[#feca5d]",
  },
  {
    icon: "database",
    title: "Complex MySQL Schema",
    desc: "Multi-relational database schema handling patients, doctors, prescriptions, and records with referential integrity.",
    tags: [],
    color: "text-slate-300",
  },
  {
    icon: "shieldShaded",
    title: "Custom Middleware",
    desc: "Route-level guards restricting patient, doctor, and front-desk actions to their own dashboards.",
    tags: [],
    color: "text-[#7dc8ff]",
  },
];

export default function ClinicPage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <PageHeading
            title="Clinic & Patient System"
            eyebrow="Healthcare MVC"
            tag="HEALTHCARE MVC"
            intro="A streamlined Healthcare Management System digitalizing the patient journey — from front-desk registration to automated prescription generation and medical record archiving."
            actions={
              <a
                href="https://github.com/AmmarElhenawy/Clinc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff8d8d] text-[#640012] px-6 py-3 font-label font-bold text-xs tracking-widest uppercase flex items-center gap-2 rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,141,141,0.2)]"
              >
                <Icon name="code" size={16} />
                GitHub
              </a>
            }
          />

          {/* Hero banner */}
          <div className="relative h-64 w-full overflow-hidden bg-surface-container-low flex items-end mt-8">
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,141,141,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,141,141,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex flex-wrap gap-6 sm:gap-12">
              {[
                { label: "Framework", value: "Laravel 11", color: "text-[#ff8d8d]" },
                { label: "Database", value: "MySQL (Complex)", color: "text-[#feca5d]" },
                { label: "Reports", value: "PDF / Print", color: "text-[#a9ffdf]" },
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
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#ff8d8d]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ff8d8d]/5 rounded-full blur-3xl" />
            <h2 className="text-xs font-label text-[#ff8d8d] uppercase tracking-[0.3em] mb-6">
              01 // Problem
            </h2>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              Managing patient flow, doctor assignments, and medical
              prescriptions manually leads to long waiting times and
              disorganized medical history.
            </p>
            <div className="p-4 bg-surface-container-high border-l-2 border-[#ff8d8d]/40">
              <p className="text-xs font-label text-slate-400 uppercase mb-2">
                Solution
              </p>
              <p className="text-sm font-body italic text-on-surface-variant">
                A streamlined Healthcare Management System that digitalizes
                the patient journey — from front-desk registration and dynamic
                doctor referrals to automated prescription generation and
                medical record archiving.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#feca5d]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#feca5d]/5 rounded-full blur-3xl" />
            <h2 className="text-xs font-label text-[#feca5d] uppercase tracking-[0.3em] mb-6">
              02 // Key Features
            </h2>
            <ul className="text-slate-300 font-body leading-relaxed mb-6 list-disc list-inside space-y-1">
              <li>Dynamic record tracking (Today&apos;s / Examined / Transferred)</li>
              <li>Profile management for doctors and patients with historical timelines</li>
              <li>Real-time AJAX status updates</li>
              <li>Prescription PDF generation</li>
              <li>Custom middleware / Laravel Auth</li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              {["PDF Prescriptions", "Ajax Live Updates"].map((feat) => (
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

        {/* Features Bento Grid */}
        <section className="mb-24">
          <h2 className="text-xs font-label text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">
            Clinical Engineering Highlights
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
              MVC + Resource Controllers
            </h2>
            <p className="text-slate-400 font-body leading-relaxed mb-8">
              MVC architecture with Resource Controllers handling the full
              patient lifecycle with complex MySQL relationships.
            </p>
            <ul className="space-y-4">
              {[
                { n: "01", c: "text-[#ff8d8d]", title: "PatientController", desc: "Registration, referrals, and timeline management." },
                { n: "02", c: "text-[#feca5d]", title: "DoctorController", desc: "Profile management and case assignment." },
                { n: "03", c: "text-[#a9ffdf]", title: "PrescriptionController", desc: "Automated generation and PDF printing." },
                { n: "04", c: "text-[#7dc8ff]", title: "RecordController", desc: "Daily tracking: Today / Examined / Transferred." },
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
          <div className="lg:col-span-7 bg-surface-container-low p-6 sm:p-8 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[11px] font-label text-slate-400 uppercase tracking-widest">
                routes/web.php
              </span>
            </div>
            <div className="space-y-4 font-mono text-[11px]">
              <div className="flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#ff8d8d]">
                <span className="text-[#ff8d8d]">PatientController</span>
                <span className="text-slate-400">-&gt; register / refer / archive</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#feca5d]">
                <span className="text-[#feca5d]">DoctorController</span>
                <span className="text-slate-400">-&gt; profile / cases</span>
              </div>
              <div className="ml-16 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#a9ffdf]">
                <span className="text-[#a9ffdf]">Prescription</span>
                <span className="text-slate-400">-&gt; generate / print (PDF)</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-[#0c0e10]/40">
                <span className="text-slate-300">Records</span>
                <span className="text-slate-400">-&gt; today / examined / transferred</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-surface-container-high/30">
                <span className="text-[#7dc8ff]">Ajax</span>
                <span className="text-slate-400">-&gt; Real-time status flip</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom links */}
        <section className="bg-surface-container-low p-12 text-center border border-outline-variant/5 mb-12">
          <h2 className="text-2xl font-headline font-bold mb-8 tracking-tighter">
            Explore Source Code
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/AmmarElhenawy/Clinc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-surface-container-high hover:bg-surface-bright transition-all w-48 rounded-lg group"
            >
              <Icon name="codeSquare" size={28} className="text-[#ff8d8d] mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-label text-slate-400 uppercase tracking-widest mb-1">
                Source Code
              </span>
              <span className="text-sm font-headline font-bold text-on-surface">
                GitHub
              </span>
            </a>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

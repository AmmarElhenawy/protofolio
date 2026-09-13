import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import { Icon, type IconName } from "@/components/ui/icon";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "Invoice ERP System",
  description:
    "A Laravel MVC ERP module automating invoice creation, multi-status billing, archiving, and secure document attachments.",
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
    icon: "folder",
    title: "Storage & File Management",
    desc: "Secure system for invoice attachments featuring custom logic for viewing, downloading, and safely deleting sensitive documents.",
    tags: ["Storage::disk", "Local"],
    color: "text-[#feca5d]",
  },
  {
    icon: "arrowDownSquare",
    title: "Automated Life-Cycle",
    desc: "Archiving system to move inactive invoices to a separate archive without data loss, optimizing DB performance.",
    tags: [],
    color: "text-[#7dc8ff]",
  },
  {
    icon: "patchCheck",
    title: "Data Integrity",
    desc: "Database transactions and complex relational schemas (Sections, Products, Invoices) ensuring financial records remain consistent.",
    tags: [],
    color: "text-[#a9ffdf]",
  },
  {
    icon: "palette",
    title: "UI/UX Consistency",
    desc: "Custom Blade templates with centralized layouts and error-handling views (404/500) for a professional enterprise experience.",
    tags: [],
    color: "text-[#ff8d8d]",
  },
  {
    icon: "cashStack",
    title: "Status Management",
    desc: "Multi-state invoice tracking across Paid, Unpaid, and Partially Paid stages with dynamic route handling.",
    tags: [],
    color: "text-slate-300",
  },
];

export default function InvoicesPage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <PageHeading
            title="Invoice ERP System"
            eyebrow="ERP Module"
            tag="ERP MODULE"
            accent="secondary"
            intro="A comprehensive Enterprise Resource Planning module automating the billing lifecycle from creation to archiving with multi-status tracking."
            actions={
              <a
                href="https://github.com/AmmarElhenawy/invoices2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#feca5d] text-[#2a1a00] px-6 py-3 font-label font-bold text-xs tracking-widest uppercase flex items-center gap-2 rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(254,202,93,0.2)]"
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
                  "linear-gradient(rgba(254,202,93,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(254,202,93,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex flex-wrap gap-6 sm:gap-12">
              {[
                { label: "Framework", value: "Laravel 11", color: "text-[#feca5d]" },
                { label: "Pattern", value: "MVC", color: "text-[#ff8d8d]" },
                { label: "Status States", value: "Paid · Unpaid · Partial", color: "text-[#a9ffdf]" },
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
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#feca5d]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#feca5d]/5 rounded-full blur-3xl" />
            <h3 className="text-xs font-label text-[#feca5d] uppercase tracking-[0.3em] mb-6">
              01 // Problem
            </h3>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              Managing corporate invoices, tracking payment statuses, and
              handling physical attachments manually is error-prone and
              time-consuming.
            </p>
            <div className="p-4 bg-surface-container-high border-l-2 border-[#feca5d]/40">
              <p className="text-xs font-label text-slate-400 uppercase mb-2">
                Solution
              </p>
              <p className="text-sm font-body italic text-on-surface-variant">
                A comprehensive ERP module that automates the billing
                lifecycle — from creation and section classification to
                archiving and multi-status tracking — while providing secure
                document attachment storage.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#00edba]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#a9ffdf]/5 rounded-full blur-3xl" />
            <h3 className="text-xs font-label text-[#a9ffdf] uppercase tracking-[0.3em] mb-6">
              02 // Features
            </h3>
            <ul className="text-slate-300 font-body leading-relaxed mb-6 list-disc list-inside space-y-1">
              <li>Status management (Paid / Unpaid / Partially Paid)</li>
              <li>Document management with file attachments</li>
              <li>Dynamic routing via Route::resource</li>
              <li>Ajax-ready custom routes</li>
              <li>Queue-based mailer notifications</li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              {["Multi-Status Tracking", "Secure Attachments"].map((feat) => (
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
          <h3 className="text-xs font-label text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">
            Engineering Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-surface-container-high p-6 group hover:bg-[#1d2023] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon name={f.icon} size={20} className={f.color} />
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
            <h3 className="text-xs font-label text-[#feca5d] uppercase tracking-[0.3em] mb-4">
              Architecture Design
            </h3>
            <h4 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tighter">
              Laravel MVC · Blade
            </h4>
            <p className="text-slate-400 font-body leading-relaxed mb-8">
              Built using the MVC pattern with Blade templating engine for
              server-rendered views and AJAX-ready endpoints for dynamic
              interactions.
            </p>
            <ul className="space-y-4">
              {[
                { n: "01", c: "text-[#feca5d]", title: "InvoiceController", desc: "Full CRUD with status management logic." },
                { n: "02", c: "text-[#a9ffdf]", title: "AttachmentController", desc: "Dedicated file handling and secure document views." },
                { n: "03", c: "text-[#7dc8ff]", title: "ArchiveController", desc: "Automated archiving lifecycle management." },
                { n: "04", c: "text-[#ff8d8d]", title: "ProductFilter (Ajax)", desc: "Dynamic product filtering based on sections." },
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
              <div className="flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#feca5d]">
                <span className="text-[#feca5d]">InvoiceController</span>
                <span className="text-slate-400">-&gt; Route::resource</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#a9ffdf]">
                <span className="text-[#a9ffdf]">Status</span>
                <span className="text-slate-400">-&gt; Paid / Unpaid / Partial</span>
              </div>
              <div className="ml-16 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#7dc8ff]">
                <span className="text-[#7dc8ff]">Archive</span>
                <span className="text-slate-400">-&gt; Soft-move inactive records</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-[#0c0e10]/40">
                <span className="text-slate-300">Transaction</span>
                <span className="text-slate-400">-&gt; DB::transaction wrapper</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-surface-container-high/30">
                <span className="text-[#ff8d8d]">Attachments</span>
                <span className="text-slate-400">-&gt; Storage::disk(&apos;local&apos;)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom links */}
        <section className="bg-surface-container-low p-12 text-center border border-outline-variant/5 mb-12">
          <h3 className="text-2xl font-headline font-bold mb-8 tracking-tighter">
            Explore Source Code
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/AmmarElhenawy/invoices2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-surface-container-high hover:bg-surface-bright transition-all w-48 rounded-lg group"
            >
              <Icon name="codeSquare" size={28} className="text-[#feca5d] mb-3 group-hover:scale-110 transition-transform" />
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

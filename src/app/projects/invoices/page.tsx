import AppShell from "@/components/layout/AppShell";
import inv from "../../../components/invoices.jpg";

const codeSquare = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" />
</svg>;
const check = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16">
  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
</svg>
  ;

const cashStack = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
</svg>;


const code = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
</svg>;
const folder = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
</svg>;
const download = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
</svg>;
const verify = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0" />
  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
</svg>;
const paint = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-palette" viewBox="0 0 16 16">
  <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7" />
</svg>;



const features = [
  {
    icon: folder,
    title: "Storage & File Management",
    desc: "Secure system for Invoice Attachments featuring custom logic for viewing, downloading, and safely deleting sensitive documents.",
    tags: ["Storage::disk", "Local"],
    span: "md:col-span-2",
    filled: true,
    color: "text-[#feca5d]",
  },
  {
    icon: download,
    title: "Automated Life-Cycle",
    desc: "Archiving system to move inactive invoices to a separate archive without data loss, optimizing DB performance.",
    tags: [],
    span: "",
    filled: false,
    color: "text-[#7dc8ff]",
    border: "border-l-2 border-[#7dc8ff]",
  },
  {
    icon: verify,
    title: "Data Integrity",
    desc: "Database Transactions and complex Relational Schemas (Sections, Products, Invoices) ensuring financial records remain consistent.",
    tags: [],
    span: "",
    filled: false,
    color: "text-[#a9ffdf]",
    border: "border-r-2 border-[#a9ffdf]",
  },
  {
    icon: paint,
    title: "UI/UX Consistency",
    desc: "Custom Blade Templates with centralized layouts and error-handling views (404/500) for a professional enterprise experience.",
    tags: [],
    span: "md:col-span-2",
    filled: false,
    color: "text-[#ff8d8d]",
  },
  {
    icon: cashStack,
    title: "Status Management",
    desc: "Multi-state invoice tracking across Paid, Unpaid, and Partially Paid stages with dynamic route handling.",
    tags: [],
    span: "",
    filled: false,
    color: "text-slate-300",
  },
];

export default function InvoicesPage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#feca5d]/20 text-[#feca5d] text-[10px] font-bold tracking-widest uppercase border border-[#feca5d]/20">
                  ERP Module
                </span>
                <span className="text-slate-600 font-label text-xs tracking-tighter">
                  PROJECT_ID: INV-0003
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black tracking-tighter text-on-surface mb-4">
                Invoice{" "}
                <span className="text-[#feca5d]">ERP System</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-body">
                A comprehensive Enterprise Resource Planning module automating
                the billing lifecycle from creation to archiving with
                multi-status tracking.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="http://github.com/AmmarElhenawy/invoices2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#feca5d] text-[#2a1a00] px-6 py-3 font-label font-bold text-xs tracking-widest uppercase flex items-center gap-2 rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(254,202,93,0.2)]"
              >
                <span className="material-symbols-outlined text-sm">{code}</span>
                GitHub
              </a>
            </div>
          </div>

          {/* Hero banner */}
          <div className="relative h-64 w-full overflow-hidden bg-surface-container-low flex items-end">
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

        {/* Problem / Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#feca5d]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#feca5d]/5 rounded-full blur-3xl" />
            <h3 className="text-xs font-label text-[#feca5d] uppercase tracking-[0.3em] mb-6">
              01 // PROBLEM
            </h3>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              Managing corporate invoices, tracking payment statuses, and
              handling physical attachments manually is error-prone and
              time-consuming.
            </p>
            <div className="p-4 bg-surface-container-high border-l-2 border-[#feca5d]/40">
              <p className="text-xs font-label text-slate-500 uppercase mb-2">
                Solution
              </p>
              <p className="text-sm font-body italic text-on-surface-variant">
                &quot;A comprehensive ERP module that automates the billing
                lifecycle — from creation and section classification to
                archiving and multi-status tracking — while providing secure
                document attachment environments.&quot;
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#00edba]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#a9ffdf]/5 rounded-full blur-3xl" />
            <h3 className="text-xs font-label text-[#a9ffdf] uppercase tracking-[0.3em] mb-6">
              02 // FEATURES
            </h3>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              Authentication · MVC Pattern · Status Management
              (Paid/Unpaid/Partially Paid) · Document Management with file
              attachments · Dynamic Routing via Route::resource · Ajax-ready
              custom routes · Validation · Error handling · File upload ·
              MailerModule
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Multi-Status Tracking", "Secure Attachments"].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a9ffdf] text-sm">
                    {check}
                  </span>
                  <span className="text-[10px] font-label text-slate-400 uppercase">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="mb-24">
          <h3 className="text-xs font-label text-slate-500 uppercase tracking-[0.3em] mb-8 text-center">
            Engineering Highlights
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
                    <p className="text-xs text-slate-500">{desc}</p>
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
              <span className="text-[10px] font-label text-slate-600 uppercase tracking-widest">
                routes/web.php // billing_flow
              </span>
            </div>
            <div className="space-y-4 font-mono text-[11px]">
              <div className="flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#feca5d]">
                <span className="text-[#feca5d]">InvoiceController</span>
                <span className="text-slate-600">-&gt; Route::resource</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#a9ffdf]">
                <span className="text-[#a9ffdf]">Status</span>
                <span className="text-slate-600">-&gt; Paid / Unpaid / Partial</span>
              </div>
              <div className="ml-16 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#7dc8ff]">
                <span className="text-[#7dc8ff]">Archive</span>
                <span className="text-slate-600">-&gt; Soft-move inactive records</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-[#0c0e10]/40">
                <span className="text-slate-400">Transaction</span>
                <span className="text-slate-600">-&gt; DB::transaction wrapper</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-surface-container-high/30">
                <span className="text-[#ff8d8d]">Attachments</span>
                <span className="text-slate-600">-&gt; Storage::disk(&apos;local&apos;)</span>
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
            {[
              { icon: codeSquare, label: "Source Code", value: "GitHub", color: "text-[#feca5d]", href: "http://github.com/AmmarElhenawy/invoices2" },
            ].map(({ icon, label, value, color, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
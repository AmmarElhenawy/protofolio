import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import { Icon, type IconName } from "@/components/ui/icon";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "E-Commerce API",
  description:
    "A RESTful commerce backend built with Node.js and Express — JWT authentication, cart management, and order tracking on MongoDB.",
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
    title: "JWT Authentication",
    desc: "Secure token-based auth with Role-Based Access Control middleware protecting all sensitive commerce endpoints.",
    tags: ["JWT", "RBAC", "Middleware"],
    color: "text-[#a9ffdf]",
  },
  {
    icon: "archive",
    title: "Product Catalog",
    desc: "Full CRUD operations with category filtering and search across the entire product inventory.",
    tags: [],
    color: "text-[#feca5d]",
  },
  {
    icon: "cart",
    title: "Cart Management",
    desc: "Session-persistent cart management logic handling item additions, removals, and quantity updates.",
    tags: [],
    color: "text-[#a9ffdf]",
  },
  {
    icon: "receipt",
    title: "Order Lifecycle",
    desc: "End-to-end order tracking from checkout initiation through fulfillment and status updates.",
    tags: [],
    color: "text-[#ff8d8d]",
  },
  {
    icon: "asterisk",
    title: "Mongoose ODM",
    desc: "Schema-based data modeling via Mongoose for structured and validated MongoDB document management.",
    tags: [],
    color: "text-[#feca5d]",
  },
  {
    icon: "codeSquare",
    title: "Error Handling",
    desc: "Centralized error middleware providing consistent JSON error responses across all API routes.",
    tags: [],
    color: "text-slate-300",
  },
];

export default function EcommercePage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <PageHeading
            title="E-Commerce API Platform"
            eyebrow="RESTful API"
            tag="RESTFUL API"
            accent="tertiary"
            intro="A RESTful API platform providing a seamless flow from product discovery and cart management to secure checkout and order tracking."
            actions={
              <a
                href="https://github.com/AmmarElhenawy/Ecommerce/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#a9ffdf] text-[#002a1a] px-6 py-3 font-label font-bold text-xs tracking-widest uppercase flex items-center gap-2 rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(169,255,223,0.2)]"
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
                  "linear-gradient(rgba(169,255,223,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(169,255,223,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex flex-wrap gap-6 sm:gap-12">
              {[
                { label: "Runtime", value: "Node.js / Express", color: "text-[#a9ffdf]" },
                { label: "Database", value: "MongoDB", color: "text-[#feca5d]" },
                { label: "Auth", value: "JWT", color: "text-[#ff8d8d]" },
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
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#a9ffdf]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#a9ffdf]/5 rounded-full blur-3xl" />
            <h3 className="text-xs font-label text-[#a9ffdf] uppercase tracking-[0.3em] mb-6">
              01 // Problem
            </h3>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              Building a scalable, secure, and fast backend for digital commerce
              requires careful architecture to handle concurrent sessions,
              inventory, and payments reliably.
            </p>
            <div className="p-4 bg-surface-container-high border-l-2 border-[#a9ffdf]/40">
              <p className="text-xs font-label text-slate-400 uppercase mb-2">
                Solution
              </p>
              <p className="text-sm font-body italic text-on-surface-variant">
                A RESTful API platform providing a seamless flow from product
                discovery and cart management to secure checkout and order
                tracking.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#feca5d]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#feca5d]/5 rounded-full blur-3xl" />
            <h3 className="text-xs font-label text-[#feca5d] uppercase tracking-[0.3em] mb-6">
              02 // Features
            </h3>
            <ul className="text-slate-300 font-body leading-relaxed mb-6 list-disc list-inside space-y-1">
              <li>JWT authentication with role-based access</li>
              <li>Mongoose ODM data modeling</li>
              <li>Product catalog with category filtering</li>
              <li>Session-persistent cart management</li>
              <li>Order lifecycle and secure checkout flow</li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              {["Secure Checkout", "Order Tracking"].map((feat) => (
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
            Platform Core Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <h3 className="text-xs font-label text-[#a9ffdf] uppercase tracking-[0.3em] mb-4">
              Architecture Design
            </h3>
            <h4 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tighter">
              Express Modular Design
            </h4>
            <p className="text-slate-400 font-body leading-relaxed mb-8">
              Modular architecture in Express.js with clean separation of
              concerns via dedicated routers for each domain.
            </p>
            <ul className="space-y-4">
              {[
                { n: "01", c: "text-[#a9ffdf]", title: "Auth Router", desc: "JWT token issuance, refresh, and RBAC middleware." },
                { n: "02", c: "text-[#feca5d]", title: "Products Router", desc: "Full CRUD with category filtering and search." },
                { n: "03", c: "text-[#7dc8ff]", title: "Cart Router", desc: "Session-persistent cart management logic." },
                { n: "04", c: "text-[#ff8d8d]", title: "Orders Router", desc: "Checkout flow and order status tracking." },
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
                app.js
              </span>
            </div>
            <div className="space-y-4 font-mono text-[11px]">
              <div className="flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#a9ffdf]">
                <span className="text-[#a9ffdf]">authRouter</span>
                <span className="text-slate-400">-&gt; /api/auth/*</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#feca5d]">
                <span className="text-[#feca5d]">productRouter</span>
                <span className="text-slate-400">-&gt; /api/products/*</span>
              </div>
              <div className="ml-16 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#7dc8ff]">
                <span className="text-[#7dc8ff]">cartRouter</span>
                <span className="text-slate-400">-&gt; /api/cart/*</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-[#0c0e10]/40">
                <span className="text-slate-300">orderRouter</span>
                <span className="text-slate-400">-&gt; /api/orders/*</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-surface-container-high/30">
                <span className="text-[#ff8d8d]">errorMiddleware</span>
                <span className="text-slate-400">-&gt; Centralized handler</span>
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
              href="https://github.com/AmmarElhenawy/Ecommerce/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-surface-container-high hover:bg-surface-bright transition-all w-48 rounded-lg group"
            >
              <Icon name="codeSquare" size={28} className="text-[#a9ffdf] mb-3 group-hover:scale-110 transition-transform" />
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

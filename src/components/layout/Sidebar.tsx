"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

let home = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
  </svg>
);
let account_tree = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z" />
    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
  </svg>
);
let history = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
  </svg>
);
let code = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
  </svg>
);

const navLinks = [
  { href: "/",           icon: home,         label: "Home"       },
  { href: "/projects",   icon: account_tree, label: "Projects"   },
  { href: "/experience", icon: history,      label: "Experience" },
  { href: "/code",       icon: code,         label: "Code"       },
];

type SidebarProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 h-full w-64 bg-[#0c0e10]/90 backdrop-blur-xl",
        "flex flex-col py-8 z-50",
        // translateX transition — more reliable than left on mobile
        "transition-transform duration-300 ease-in-out",
        // pointer-events-none when hidden so it NEVER blocks touches on mobile
        open
          ? "translate-x-0 pointer-events-auto"
          : "-translate-x-full pointer-events-none",
        // Always visible on desktop regardless of state
        "lg:translate-x-0 lg:pointer-events-auto"
      )}
    >
      {/* Brand */}
      <div className="px-8 mb-12">
        <Link href="/" onClick={() => setOpen(false)}>
          <h1 className="font-headline font-bold text-[#ff8d8d] tracking-tighter text-2xl uppercase">
            Ammar Elhenawy
          </h1>
          <p className="font-headline tracking-widest uppercase text-[10px] text-slate-500 mt-1">
            v2.4.0-stable
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navLinks.map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className={cn(
              "flex items-center px-8 py-4 transition-all duration-300",
              isActive(href)
                ? "border-l-4 border-[#ff8d8d] bg-white/5 text-[#ff8d8d] font-bold"
                : "text-slate-400 hover:text-slate-100 hover:bg-[#1d2023]"
            )}
          >
            <span
              className="material-symbols-outlined mr-4"
              style={isActive(href) ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {icon}
            </span>
            <span className="font-headline tracking-widest uppercase text-xs">
              {label}
            </span>
          </Link>
        ))}
      </nav>

      {/* System Status */}
      <div className="px-8 mt-auto pt-8">
        <div className="p-4 bg-surface-container rounded-lg border border-outline-variant/10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span className="font-headline text-[10px] tracking-widest uppercase text-tertiary">
              System Online
            </span>
          </div>
          <div className="mt-2 h-1 bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-tertiary w-3/4" />
          </div>
        </div>
      </div>
    </aside>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import type { Route } from "@/lib/routes";

const NAV_ITEMS: { href: Route; icon: Parameters<typeof Icon>[0]["name"]; label: string }[] = [
  { href: "/", icon: "houseDoorFill", label: "Home" },
  { href: "/projects", icon: "columnsGap", label: "Projects" },
  { href: "/experience", icon: "clockHistory", label: "Experience" },
  { href: "/code", icon: "code", label: "Code" },
];

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <aside
      id="site-nav"
      aria-label="Main navigation"
      inert={!open && !isDesktop ? true : undefined}
      className={cn(
        "fixed top-0 left-0 h-full w-64 bg-[#0c0e10]/90 backdrop-blur-xl",
        "flex flex-col pt-20 pb-8 lg:pt-8 z-50",
        "transition-transform duration-300 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full",
        "lg:translate-x-0"
      )}
    >
      {/* Close button — mobile only */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="lg:hidden absolute top-20 right-4 flex items-center justify-center w-10 h-10 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors active:scale-95"
      >
        <Icon name="x" size={18} />
      </button>

      {/* Brand */}
      <div className="px-8 mb-12">
        <Link href="/" onClick={onClose}>
          <p className="font-headline font-bold text-[#ff8d8d] tracking-tighter text-2xl uppercase">
            Ammar Elhenawy
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className={cn(
              "flex items-center px-8 py-4 transition-all duration-300",
              isActive(href)
                ? "border-l-4 border-[#ff8d8d] bg-white/5 text-[#ff8d8d] font-bold"
                : "text-slate-400 hover:text-slate-100 hover:bg-[#1d2023]"
            )}
          >
            <Icon name={icon} size={18} className="mr-4" />
            <span className="font-headline tracking-widest uppercase text-xs">
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

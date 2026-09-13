"use client";

import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/icon";
import { ROUTE_META, type Route } from "@/lib/routes";

type TopNavProps = {
  open: boolean;
  onToggle: () => void;
};

export default function TopNav({ open, onToggle }: TopNavProps) {
  const pathname = usePathname();

  const getLabel = () => {
    if (pathname.startsWith("/projects/")) return "Project";
    const meta = ROUTE_META[pathname as Route];
    return meta?.navLabel ?? "Ammar Elhenawy";
  };

  return (
    <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-16rem)] h-16 bg-[#0c0e10]/80 backdrop-blur-md flex justify-between items-center px-4 lg:px-8 z-50">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav"
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors active:scale-95"
        >
          <Icon name="menuButtonWide" size={20} />
        </button>

        <span className="font-headline text-base sm:text-xl font-black text-[#ff8d8d] tracking-tighter uppercase truncate max-w-[180px] sm:max-w-none">
          {getLabel()}
        </span>
      </div>
    </header>
  );
}

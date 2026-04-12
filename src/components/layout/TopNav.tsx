"use client";

import { usePathname } from "next/navigation";

let sensors = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
  </svg>
);

const pageTitles: Record<string, string> = {
  "/": "HOME_DASHBOARD",
  "/projects": "PROJECT_REGISTRY",
  "/experience": "DEPLOYMENT_HISTORY",
  "/about": "ABOUT_OPERATOR",
  "/code": "CODE_MODULES",
};

export default function TopNav({ setOpen }: { setOpen: (v: any) => void }) {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname.startsWith("/projects/")) return "PROJECT_DETAIL";
    return pageTitles[pathname] ?? "SYSTEM";
  };

  return (
    // z-50: stays above the overlay (z-40) so hamburger is always tappable
    <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-16rem)] h-16 bg-[#0c0e10]/80 backdrop-blur-md flex justify-between items-center px-4 lg:px-8 z-50">
      <div className="flex items-center gap-3">
        {/* Hamburger — large tap target, SVG icon for reliable rendering */}
        <button
          onClick={() => setOpen((prev: boolean) => !prev)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors active:scale-95"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>

        <span className="font-headline text-base sm:text-xl font-black text-[#ff8d8d] tracking-tighter uppercase truncate max-w-[180px] sm:max-w-none">
          {getTitle()}
        </span>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 px-2 sm:px-3 py-1 bg-surface-container-low rounded-lg border border-outline-variant/10">
          <span
            className="material-symbols-outlined text-[14px] text-tertiary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {sensors}
          </span>
          <span className="font-headline text-[10px] text-slate-400 uppercase tracking-widest">
            <span className="text-tertiary">Active</span>
          </span>
        </div>
      </div>
    </header>
  );
}
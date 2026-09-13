// Shared page heading. See specs/001-portfolio-audit-fixes/contracts/ui-components.md § PageHeading.
//
// Resolves ISS-026 (no page had a content <h1> — the only one was the
// sidebar brand) and ISS-041 (Clarification Q2 = C: plain-English heading,
// stylised "terminal" string kept as a small sub-label rather than dropped).
import type { ReactNode } from "react";

type Accent = "primary" | "secondary" | "tertiary" | "info";

const ACCENT_TEXT: Record<Accent, string> = {
  primary: "text-[#ff8d8d]",
  secondary: "text-[#feca5d]",
  tertiary: "text-[#a9ffdf]",
  info: "text-[#7dc8ff]",
};

const ACCENT_BORDER: Record<Accent, string> = {
  primary: "border-[#ff8d8d]/20",
  secondary: "border-[#feca5d]/20",
  tertiary: "border-[#a9ffdf]/20",
  info: "border-[#7dc8ff]/20",
};

const ACCENT_BG: Record<Accent, string> = {
  primary: "bg-[#ff8d8d]/20",
  secondary: "bg-[#feca5d]/20",
  tertiary: "bg-[#a9ffdf]/20",
  info: "bg-[#7dc8ff]/20",
};

export type PageHeadingProps = {
  /** Plain-English title — rendered as the page's ONLY <h1>. */
  title: string;
  /** Stylised "terminal" string, kept as a small decorative sub-label. */
  tag?: string;
  /** Short badge shown above the title (e.g. "Career", "Laravel API"). */
  eyebrow?: string;
  accent?: Accent;
  /** Lead paragraph rendered under the heading. */
  intro?: string;
  /** Right-aligned buttons/links (repo, docs, demo). */
  actions?: ReactNode;
  className?: string;
};

export function PageHeading({
  title,
  tag,
  eyebrow,
  accent = "primary",
  intro,
  actions,
  className,
}: PageHeadingProps) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${className ?? ""}`}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          {eyebrow ? (
            <span
              className={`px-2 py-0.5 text-[11px] font-bold tracking-widest uppercase border ${ACCENT_BG[accent]} ${ACCENT_TEXT[accent]} ${ACCENT_BORDER[accent]}`}
            >
              {eyebrow}
            </span>
          ) : null}
          {tag ? (
            <span
              aria-hidden="true"
              className="text-slate-400 font-label text-xs tracking-tighter font-mono"
            >
              {tag}
            </span>
          ) : null}
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black tracking-tighter text-on-surface mb-4">
          {title}
        </h1>
        {intro ? (
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed font-body">
            {intro}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-4">{actions}</div> : null}
    </div>
  );
}

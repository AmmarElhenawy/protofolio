// Shared work-experience data — single source of truth for the Experience
// page and the home page's About block, so "N positions" / "years of
// experience" can never disagree across pages (FR-013).
import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/ui/icon";
import type { Tech } from "@/lib/tech";

import megadev1 from "@/assets/images/megadev-1.jpg";
import megadev2 from "@/assets/images/megadev-2.jpg";
import marakez1 from "@/assets/images/marakez-1.jpg";
import marakez2 from "@/assets/images/marakez-2.jpg";

export type ExperienceEntry = {
  type: "work" | "internship";
  role: string;
  company: string;
  companyType: string;
  location: string;
  periodLabel: string;
  /** ISO month the role started, e.g. "2025-06" — used to compute "since". */
  startMonth: string;
  color: string;
  borderColor: string;
  glowColor: string;
  badgeColor: string;
  icon: IconName;
  highlights: string[];
  tags: (Tech | string)[];
  dotColor: string;
  images: StaticImageData[];
};

export const EXPERIENCES: ExperienceEntry[] = [
  {
    type: "work",
    role: "Backend Developer",
    company: "MegaDev",
    companyType: "Tech Company",
    location: "Tanta",
    periodLabel: "June 2025 – November 2025",
    startMonth: "2025-06",
    color: "text-[#ff8d8d]",
    borderColor: "border-[#ff8d8d]",
    glowColor: "bg-[#ff8d8d]/5",
    badgeColor: "bg-[#ff8d8d]/20 text-[#ff8d8d] border-[#ff8d8d]/20",
    icon: "terminal",
    highlights: [
      "Developed and optimized backend services using Express.js and NestJS",
      "Built production-grade REST APIs consumed by frontend clients",
      "Integrated Prisma ORM for type-safe database interactions",
      "Debugged application logic and improved system performance",
      "Collaborated closely with cross-functional development team",
    ],
    tags: ["NestJS", "Express.js", "Prisma", "Node.js"],
    dotColor: "bg-[#ff8d8d] shadow-[0_0_12px_rgba(255,141,141,0.5)]",
    images: [megadev1, megadev2],
  },
  {
    type: "internship",
    role: "Intern",
    company: "Marakez",
    companyType: "Real Estate Company",
    location: "Cairo",
    periodLabel: "July 2024 – August 2024",
    startMonth: "2024-07",
    color: "text-[#feca5d]",
    borderColor: "border-[#feca5d]",
    glowColor: "bg-[#feca5d]/5",
    badgeColor: "bg-[#feca5d]/20 text-[#feca5d] border-[#feca5d]/20",
    icon: "building",
    highlights: [
      "Developed web solutions using Laravel and PHP",
      "Performed data analysis with Excel and SQL Server",
      "Built Power BI dashboards and delivered actionable business insights",
      "Worked with real enterprise data in a production real estate environment",
    ],
    tags: ["Laravel", "PHP", "SQL Server", "Power BI", "Excel"],
    dotColor: "bg-[#feca5d] shadow-[0_0_12px_rgba(254,202,93,0.5)]",
    images: [marakez1, marakez2],
  },
];

/** Earliest experience start, formatted "Since <Month Year>" for honest display (replaces the unverifiable "2+ Years"). */
export function experienceSinceLabel(): string {
  const earliest = EXPERIENCES.reduce((a, b) => (a.startMonth < b.startMonth ? a : b));
  const [year, month] = earliest.startMonth.split("-").map(Number);
  const date = new Date(year, month - 1, 1);
  return `Since ${date.toLocaleString("en-US", { month: "long", year: "numeric" })}`;
}

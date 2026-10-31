import Link from "next/link";
import type { Route } from "@/lib/routes";
import type { Tech } from "@/lib/tech";

// Skills grouped by evidence (Clarification Q1 = A): no percentages, and
// every skill links to the page that actually demonstrates it. Terraform
// and Kubernetes were removed — nothing on the site evidences them.
type SkillGroupName = "Used at work" | "Used in projects" | "Learning";

type SkillGroup = {
  group: SkillGroupName;
  accent: string;
  skills: { name: Tech | string; href: Route }[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    group: "Used at work",
    accent: "text-[#ff8d8d] border-[#ff8d8d]/20",
    skills: [
      { name: "NestJS", href: "/experience" },
      { name: "Express.js", href: "/experience" },
      { name: "Prisma", href: "/experience" },
      { name: "Node.js", href: "/experience" },
      { name: "Laravel", href: "/experience" },
      { name: "PHP", href: "/experience" },
      { name: "SQL Server", href: "/experience" },
      { name: "Power BI", href: "/experience" },
    ],
  },
  {
    group: "Used in projects",
    accent: "text-[#feca5d] border-[#feca5d]/20",
    skills: [
      { name: "Docker", href: "/projects/devops" },
      { name: "Docker Compose", href: "/projects/devops" },
      { name: "Jenkins", href: "/projects/devops" },
      { name: "Linux", href: "/projects/devops" },
      { name: "Kafka", href: "/projects/kafka" },
      { name: "Redis", href: "/projects/dana" },
      { name: "Socket.io", href: "/projects/dana" },
      { name: "TypeScript", href: "/projects/dana" },
      { name: "MongoDB", href: "/projects/e-commerce" },
      { name: "MySQL", href: "/projects/abg" },
      { name: "Pusher", href: "/projects/abg" },
    ],
  },
  {
    group: "Learning",
    accent: "text-[#a9ffdf] border-[#a9ffdf]/20",
    skills: [{ name: "CI/CD & DevOps (DEPI)", href: "/experience" }],
  },
];

export default function TechStackSection() {
  return (
    <section data-section="skills" className="p-4 sm:p-8 lg:p-12 bg-surface-container-low">
      <h2 className="font-headline font-black text-2xl sm:text-3xl tracking-tighter text-on-surface mb-8">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_GROUPS.map(({ group, accent, skills }) => (
          <div key={group} className="bg-surface-container-high p-5 sm:p-6">
            <h3 className={`font-headline font-bold text-xs uppercase tracking-[0.2em] mb-4 ${accent.split(" ")[0]}`}>
              {group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className={`px-3 py-1.5 text-[11px] font-label uppercase tracking-wider border rounded-full bg-surface-container-low text-slate-300 hover:bg-surface-bright transition-colors ${accent}`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

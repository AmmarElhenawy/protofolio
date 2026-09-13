import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { PageHeading } from "@/components/ui/page-heading";
import { EXPERIENCES } from "@/lib/content/experience";
import { TRAININGS } from "@/lib/content/training";

export const metadata: Metadata = {
  title: "Experience & Training",
  description:
    "Professional experience, internships, and technical training behind Ammar Elhenawy's backend and DevOps projects.",
};

export default function ExperiencePage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <PageHeading
            title="Experience & Training"
            eyebrow="Career"
            tag="DOMAIN: EXP-RECORD"
            accent="tertiary"
            intro="Professional experience, internships, and technical training that shaped the engineering skill set behind every project in this portfolio."
          />

          {/* Stats banner */}
          <div className="relative h-40 w-full overflow-hidden bg-surface-container-low flex items-end mt-8">
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
                { label: "Work Experience", value: `${EXPERIENCES.length} Positions`, color: "text-[#a9ffdf]" },
                { label: "Courses & Training", value: `${TRAININGS.length} Programs`, color: "text-[#feca5d]" },
                { label: "Stack", value: "Laravel · NestJS · Docker", color: "text-[#7dc8ff]" },
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

        {/* Work Experience */}
        <section className="mb-24">
          <h2 className="text-xs font-label text-slate-400 uppercase tracking-[0.3em] mb-10">
            Work Experience
          </h2>

          <div className="relative ml-6">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff8d8d]/40 via-[#feca5d]/40 to-outline-variant/10" />
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.company} className="relative pl-12 pb-16 last:pb-0 group">
                  {/* Dot */}
                  <div
                    className={`absolute left-[-5px] top-1 w-3 h-3 rounded-full ${exp.dotColor} z-10`}
                  />

                  <div className={`bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 ${exp.borderColor}`}>
                    <div className={`absolute -top-16 -right-16 w-48 h-48 ${exp.glowColor} rounded-full blur-3xl`} />

                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center flex-shrink-0 border border-outline-variant/10">
                          <Icon name={exp.icon} size={20} className={exp.color} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-2xl font-headline font-black tracking-tighter text-on-surface">
                              {exp.role}
                            </h3>
                            <span className={`px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase border ${exp.badgeColor}`}>
                              {exp.type === "work" ? "Full-time" : "Internship"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-headline font-bold ${exp.color}`}>
                              {exp.company}
                            </span>
                            <span className="text-slate-400 text-xs">·</span>
                            <span className="text-xs text-slate-400">{exp.companyType}</span>
                            <span className="text-slate-400 text-xs">·</span>
                            <span className="text-xs text-slate-400">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`px-4 py-2 bg-surface-container-high border border-outline-variant/10 text-[11px] font-mono ${exp.color} whitespace-nowrap`}>
                        {exp.periodLabel}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div>
                          <p className="text-[10px] font-label text-slate-400 uppercase tracking-[0.2em] mb-4">
                            Key Contributions
                          </p>
                          <ul className="space-y-3">
                            {exp.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Icon name="arrowRight" size={14} className={`mt-0.5 flex-shrink-0 ${exp.color}`} />
                                <span className="text-sm text-slate-300 font-body leading-relaxed">
                                  {h}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6">
                          <p className="text-[10px] font-label text-slate-400 uppercase tracking-[0.2em] mb-4">
                            Technologies Used
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-surface-container-high px-3 py-1.5 text-[10px] font-label text-slate-300 border border-outline-variant/10 uppercase tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 h-48 lg:h-full">
                        {exp.images.map((img, index) => (
                          <div
                            key={index}
                            className="relative overflow-hidden border border-outline-variant/10 group"
                          >
                            <Image
                              src={img}
                              alt={`${exp.company} team or workspace`}
                              fill
                              sizes="(max-width: 1024px) 50vw, 15vw"
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses & Training */}
        <section className="mb-12">
          <h2 className="text-xs font-label text-slate-400 uppercase tracking-[0.3em] mb-10">
            Courses &amp; Training
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TRAININGS.map((course) => {
              const borderColor =
                course.status === "Current" ? "border-[#a9ffdf]" : "border-[#feca5d]";
              const statusColor =
                course.status === "Current"
                  ? "text-[#a9ffdf] bg-[#a9ffdf]/10 border-[#a9ffdf]/20"
                  : "text-slate-400 bg-slate-400/10 border-slate-400/20";
              const iconColor = course.status === "Current" ? "text-[#a9ffdf]" : "text-[#7dc8ff]";

              return (
                <div
                  key={course.title}
                  className={`bg-surface-container-high p-4 sm:p-6 hover:bg-[#1d2023] transition-all border-t-2 ${borderColor}`}
                >
                  <div className="relative w-full aspect-[3/1] sm:aspect-[5/2] mb-5 rounded-md overflow-hidden bg-surface-container-low border border-outline-variant/10">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <Icon name={course.icon} size={20} className={iconColor} />
                    <span
                      className={`px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase border ${statusColor}`}
                    >
                      {course.status}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-base tracking-tight text-on-surface mb-1">
                    {course.title}
                  </h3>

                  <p className={`text-[10px] font-label uppercase tracking-widest mb-4 ${iconColor}`}>
                    {course.subtitle}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {course.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-container-low px-2 py-0.5 text-[10px] font-label text-slate-400 border border-outline-variant/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </AppShell>
  );
}

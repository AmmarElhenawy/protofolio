import AppShell from "@/components/layout/AppShell";
import Image from "next/image";
import mega_IMG from "../../components/mega.jpg";
import mega_IMG2 from "../../components/mega4.jpg";
import marakez_IMG from "../../components/marakez2.jpg";
import marakez_IMG2 from "../../components/marakez.jpg";
import gimini_IMG from "../../components/Gemini_Generated_Image_zd0lv3zd0lv3zd0l (1)_11zon.jpg";
import auc_IMG from "../../components/auc.jpg";
import devopsDepi_IMG from "../../components/devopsDepi.jpg";

let terminal = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-terminal" viewBox="0 0 16 16">
  <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z" />
  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
</svg>;
let code = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
</svg>;
let arrow_right = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
</svg>;
let language = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
</svg>;

let apartment = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
</svg>;
let deployed_code = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-code" viewBox="0 0 16 16">
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
  <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708" />
</svg>



const experiences = [
  {
    type: "work",
    role: "Backend Developer",
    company: "MegaDev",
    companyType: "Tech Company",
    location: "Tanta",
    period: "June 2025 – November 2025",
    color: "text-[#ff8d8d]",
    borderColor: "border-[#ff8d8d]",
    glowColor: "bg-[#ff8d8d]/5",
    badgeColor: "bg-[#ff8d8d]/20 text-[#ff8d8d] border-[#ff8d8d]/20",
    icon: terminal,
    highlights: [
      "Developed and optimized backend services using Express.js and NestJS",
      "Built production-grade REST APIs consumed by frontend clients",
      "Integrated Prisma ORM for type-safe database interactions",
      "Debugged application logic and improved system performance",
      "Collaborated closely with cross-functional development team",
    ],
    tags: ["NestJS", "Express.js", "Prisma", "Node.js", "REST API"],
    branch: "",
    dotColor: "bg-[#ff8d8d] shadow-[0_0_12px_rgba(255,141,141,0.5)]",
    images: [mega_IMG, mega_IMG2],
  },
  {
    type: "intern",
    role: "Intern",
    company: "Marakez",
    companyType: "Real Estate Company",
    location: "Cairo",
    period: "July 2024 – August 2024",
    color: "text-[#feca5d]",
    borderColor: "border-[#feca5d]",
    glowColor: "bg-[#feca5d]/5",
    badgeColor: "bg-[#feca5d]/20 text-[#feca5d] border-[#feca5d]/20",
    icon: apartment,
    highlights: [
      "Developed web solutions using Laravel and PHP",
      "Performed data analysis with Excel and SQL Server",
      "Built Power BI dashboards and delivered actionable business insights",
      "Worked with real enterprise data in a production real estate environment",
    ],
    tags: ["Laravel", "PHP", "SQL Server", "Power BI", "Excel"],
    branch: "",
    dotColor: "bg-[#feca5d] shadow-[0_0_12px_rgba(254,202,93,0.5)]",
    images: [marakez_IMG, marakez_IMG2],
  },
];

const courses = [
  {
    title: "DevOps – DEPI",
    subtitle: "Digital Egypt Pioneers Initiative",
    desc: "In-depth knowledge of DevOps practices and tools — Docker, CI/CD pipelines, containerization, deployment, and operational awareness.",
    color: "text-[#a9ffdf]",
    borderColor: "border-[#a9ffdf]",
    icon: deployed_code,
    tags: ["Docker", "CI/CD", "Jenkins", "DevOps"],
    status: "Current",
    statusColor: "text-[#a9ffdf] bg-[#a9ffdf]/10 border-[#a9ffdf]/20",
    image: devopsDepi_IMG,

  },
  {
    title: "Backend Development",
    subtitle: "Laravel & Node.js — Self-Learning",
    desc: "Practical training in Laravel and Node.js using PHP, JavaScript, and TypeScript. Focused on building RESTful APIs and backend systems via YouTube and Mahara-Tech.",
    color: "text-[#7dc8ff]",
    borderColor: "border-[#7dc8ff]",
    icon: code,
    tags: ["Laravel", "Node.js", "PHP", "TypeScript", "REST API"],
    status: "Completed",
    statusColor: "text-slate-400 bg-slate-400/10 border-slate-400/20",
    image: gimini_IMG,
  },
  {
    title: "English Language Training",
    subtitle: "AUC · SYE · CAMP",
    desc: "Completed English language courses at the American University in Cairo (AUC), SYE, and CAMP — focus on professional communication and technical English.",
    color: "text-[#ff8d8d]",
    borderColor: "border-[#ff8d8d]",
    icon: language,
    tags: ["AUC", "Professional English", "Technical Communication"],
    status: "Completed",
    statusColor: "text-slate-400 bg-slate-400/10 border-slate-400/20",
    image: auc_IMG,
  },
];

export default function ExperiencePage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-[#a9ffdf]/20 text-[#a9ffdf] text-[10px] font-bold tracking-widest uppercase border border-[#a9ffdf]/20">
                Career
              </span>
              <span className="text-slate-600 font-label text-xs tracking-tighter">
                DOMAIN: EXP-RECORD
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black tracking-tighter text-on-surface mb-4">
              Experience &{" "}
              <span className="text-[#a9ffdf]">Training</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-body">
              Professional experience, internships, and technical training that
              shaped the engineering skill set behind every project in this
              portfolio.
            </p>
          </div>

          {/* Stats banner */}
          <div className="relative h-40 w-full overflow-hidden bg-surface-container-low flex items-end">
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
                { label: "Work Experience", value: "2 Positions", color: "text-[#a9ffdf]" },
                { label: "Courses & Training", value: "3 Programs", color: "text-[#feca5d]" },
                { label: "Stack", value: "Laravel · NestJS · DevOps", color: "text-[#7dc8ff]" },
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

        {/* Work Experience */}
        <section className="mb-24">
          <h3 className="text-xs font-label text-slate-500 uppercase tracking-[0.3em] mb-10">
            Work Experience
          </h3>

          {/* <div className="space-y-0">
            {timeline.map((entry) => (

            ))} */}
          {/* </div> */}
          <div className="relative ml-6">

            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff8d8d]/40 via-[#feca5d]/40 to-outline-variant/10" />
            <div className="space-y-6">

              {experiences.map((exp) => (

                <div key={exp.company} className="relative pl-12 pb-16 group">
                  {/* Dot */}
                  <div
                    className={`absolute left-[-5px] top-1 w-3 h-3 rounded-full ${exp.dotColor} z-10`}
                  />

                  {/* Mini branch label */}
                  <div className="absolute left-3 top-0 flex items-center gap-1">
                    <div className="w-6 h-[1px] bg-outline-variant/20" />
                    <span className="font-mono text-[9px] text-slate-600 uppercase">
                      {exp.branch}
                    </span>
                  </div>

                  <div
                    key={exp.company}
                    className={`bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 ${exp.borderColor}`}
                  >
                    <div className={`absolute -top-16 -right-16 w-48 h-48 ${exp.glowColor} rounded-full blur-3xl`} />

                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center flex-shrink-0 border border-outline-variant/10">
                          <span className={`material-symbols-outlined ${exp.color}`}>
                            {exp.icon}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="text-2xl font-headline font-black tracking-tighter text-on-surface">
                              {exp.role}
                            </h4>
                            <span className={`px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase border ${exp.badgeColor}`}>
                              {exp.type === "work" ? "Full-time" : "Internship"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-headline font-bold ${exp.color}`}>
                              {exp.company}
                            </span>
                            <span className="text-slate-600 text-xs">·</span>
                            <span className="text-xs text-slate-500">{exp.companyType}</span>
                            <span className="text-slate-600 text-xs">·</span>
                            <span className="text-xs text-slate-500">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`px-4 py-2 bg-surface-container-high border border-outline-variant/10 text-[11px] font-mono ${exp.color} whitespace-nowrap`}>
                        {exp.period}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                      <div className="lg:col-span-2">
                        <div>
                          <p className="text-[10px] font-label text-slate-500 uppercase tracking-[0.2em] mb-4">
                            Key Contributions
                          </p>
                          <ul className="space-y-3">
                            {exp.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className={`material-symbols-outlined text-sm mt-0.5 flex-shrink-0 ${exp.color}`}>
                                  {arrow_right}
                                </span>
                                <span className="text-sm text-slate-300 font-body leading-relaxed">
                                  {h}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[10px] font-label text-slate-500 uppercase tracking-[0.2em] mb-4">
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
                              alt={exp.company}
                              fill
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                // content

              ))}
            </div>
          </div>

        </section>

        {/* Courses & Training */}
        <section className="mb-24">
          <h3 className="text-xs font-label text-slate-500 uppercase tracking-[0.3em] mb-10">
            Courses & Training
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div
                key={course.title}
                className={`bg-surface-container-high p-4 sm:p-6 hover:bg-[#1d2023] transition-all border-t-2 ${course.borderColor}`}
              >

                {/* IMAGE PLACEHOLDER */}
                <div className="w-full h-32 mb-5 rounded-md overflow-hidden bg-surface-container-low border border-outline-variant/10 flex items-center justify-center">
                  {course.image ? (
                    <Image
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                      No Image
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between mb-4">
                  <span className={`material-symbols-outlined ${course.color}`}>
                    {course.icon}
                  </span>

                  <span
                    className={`px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase border ${course.statusColor}`}
                  >
                    {course.status}
                  </span>
                </div>

                <h4 className="font-headline font-bold text-base tracking-tight text-on-surface mb-1">
                  {course.title}
                </h4>

                <p
                  className={`text-[10px] font-label uppercase tracking-widest mb-4 ${course.color}`}
                >
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
            ))}
          </div>
        </section>

        {/* Career Timeline */}
        <section className="bg-surface-container-low p-6 sm:p-12 border border-outline-variant/5 mb-12">
          <h3 className="text-2xl font-headline font-bold mb-10 tracking-tighter text-center">
            Career Timeline
          </h3>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-[140px] top-2 bottom-2 w-px bg-outline-variant/20 hidden lg:block" />
            <div className="space-y-8">
              {[
                { year: "2025 – Now", label: "DEPI DevOps Program", sub: "Docker · CI/CD · Jenkins", color: "text-[#feca5d]", dot: "bg-[#feca5d]" },
                { year: "Jun – Nov 2025", label: "Backend Developer @ MegaDev", sub: "NestJS · Express.js · Prisma", color: "text-[#a9ffdf]", dot: "bg-[#a9ffdf]" },
                { year: "Jul – Aug 2024", label: "Intern @ Marakez", sub: "Laravel · Power BI · SQL Server", color: "text-[#feca5d]", dot: "bg-[#feca5d]" },
                { year: "Ongoing", label: "Self-Learning Backend", sub: "Laravel · Node.js · TypeScript", color: "text-[#7dc8ff]", dot: "bg-[#7dc8ff]" },
              ].map(({ year, label, sub, color, dot }) => (
                <div key={year} className="flex items-center gap-4">
                  <div className={`text-[10px] font-mono ${color} w-36 flex-shrink-0 text-right hidden lg:block leading-relaxed`}>
                    {year}
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-10 flex-shrink-0">
                    <div className={`w-2.5 h-2.5 rounded-full ${dot} ring-4 ring-surface`} />
                  </div>
                  <div className="flex items-start gap-3 lg:gap-0">
                    <div className={`w-2 h-2 rounded-full mt-1 ${dot} lg:hidden flex-shrink-0`} />
                    <div>
                      <p className="text-sm font-headline font-bold text-on-surface">{label}</p>
                      <p className={`text-[10px] font-label ${color} uppercase tracking-widest mt-0.5`}>{sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}


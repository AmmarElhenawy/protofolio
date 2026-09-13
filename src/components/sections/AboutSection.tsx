import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { TRAININGS } from "@/lib/content/training";
import { experienceSinceLabel } from "@/lib/content/experience";
import portrait from "@/assets/images/portrait-about.jpg";

const profileData = {
  name: "Ammar Elhenawy",
  role: "Backend Developer",
  bio: "Backend Developer passionate about building scalable, secure, and high-performance applications. I specialize in designing clean APIs and structured backend systems, with hands-on experience in modern JavaScript and PHP ecosystems. Currently expanding my DevOps expertise to deliver production-ready solutions that bridge development and deployment seamlessly.",
  location: "Cairo, Egypt",
  specialization: "Backend Systems & APIs",
  status: "Open to opportunities",
};

const interests: { icon: Parameters<typeof Icon>[0]["name"]; label: string; desc: string }[] = [
  { icon: "terminal", label: "REST APIs", desc: "NestJS · Express · Laravel" },
  { icon: "fileEarmarkCode", label: "DevOps", desc: "Docker · CI/CD · Jenkins" },
  { icon: "lightningCharge", label: "Real-time", desc: "WebSockets · Socket.io · Redis" },
  { icon: "database", label: "Databases", desc: "MySQL · MongoDB · Prisma" },
];

export default function AboutSection() {
  return (
    <section className="p-1">
      <div className="px-4 sm:px-8 lg:px-12 py-6 sm:py-8 max-w-7xl w-full mx-auto flex-1">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Portrait + Quick Facts */}
          <div className="lg:col-span-4 space-y-4">
            {/* Portrait Card */}
            <div className="bg-surface-container-high overflow-hidden relative group">
              <div className="relative aspect-square">
                <Image
                  src={portrait}
                  alt="Ammar Elhenawy - Backend Developer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent" />
              </div>
              <div className="p-4 sm:p-6 -mt-16 relative z-10">
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface tracking-tighter mb-1">
                  {profileData.name}
                </h3>
                <p className="font-label text-sm text-[#ff8d8d] uppercase tracking-widest">
                  {profileData.role}
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="bg-surface-container-high p-4 sm:p-6 space-y-4">
              {[
                { label: "Location", value: profileData.location, icon: "houseDoorFill" as const },
                { label: "Experience", value: experienceSinceLabel(), icon: "clockHistory" as const },
                { label: "Focus", value: profileData.specialization, icon: "xDiamondFill" as const },
                { label: "Status", value: profileData.status, icon: "briefcase" as const },
              ].map(({ label, value, icon }) => (
                <div key={label} className="flex items-center gap-4">
                  <Icon name={icon} size={18} className="text-[#ff8d8d] flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] font-label text-slate-400 uppercase tracking-widest block">
                      {label}
                    </span>
                    <span className="text-sm font-headline text-on-surface break-words block">
                      {value}
                    </span>
                  </div>
                </div>
              ))}

              {/* Contact */}
              <div className="bg-surface-container-low p-5 sm:p-8 border border-outline-variant/10 mt-4">
                <h3 className="font-headline text-xs text-[#a9ffdf] uppercase tracking-[0.3em] mb-4">
                  Contact
                </h3>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="mailto:ammarwabs@gmail.com"
                    className="bg-[#ff8d8d] text-[#640012] px-4 sm:px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2"
                  >
                    <Icon name="envelope" size={14} />
                    Email
                  </a>
                  <a
                    href="https://github.com/AmmarElhenawy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-outline-variant text-on-surface px-4 sm:px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2"
                  >
                    <Icon name="code" size={14} />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ammar-elhenawy-393b60252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-outline-variant text-on-surface px-4 sm:px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2"
                  >
                    <Icon name="personFill" size={14} />
                    LinkedIn
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1NErT5E7y4kvAWGIRXbuhHAT4EV1kS63-/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-outline-variant text-on-surface px-4 sm:px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2"
                  >
                    <Icon name="asterisk" size={14} />
                    CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bio + Training + Interests */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Bio */}
            <div className="bg-surface-container-low p-5 sm:p-8 border-l-2 border-[#ff8d8d]">
              <h3 className="font-headline text-xs text-[#ff8d8d] uppercase tracking-[0.3em] mb-4 sm:mb-6">
                About Me
              </h3>
              <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {profileData.bio}
              </p>
            </div>

            {/* Training & Courses */}
            <div className="bg-surface-container-high p-5 sm:p-8">
              <h3 className="font-headline text-xs text-[#feca5d] uppercase tracking-[0.3em] mb-4 sm:mb-6">
                Training &amp; Courses
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {TRAININGS.map((t) => (
                  <div
                    key={t.title}
                    className={`flex items-center justify-between p-3 sm:p-4 border gap-3 ${
                      t.status === "Current"
                        ? "text-[#a9ffdf] bg-[#a9ffdf]/10 border-[#a9ffdf]/20"
                        : "text-[#feca5d] bg-[#feca5d]/10 border-[#feca5d]/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <Icon name={t.icon} size={18} className="flex-shrink-0" />
                      <span className="font-headline font-bold text-xs sm:text-sm tracking-tight text-on-surface">
                        {t.title}
                      </span>
                    </div>
                    <span className="font-label text-[10px] uppercase tracking-widest flex-shrink-0">
                      {t.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests / Stack — 2 cols always */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {interests.map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-surface-container-high p-4 sm:p-6 hover:bg-[#1d2023] transition-all group"
                >
                  <Icon
                    name={icon}
                    size={24}
                    className="text-[#ff8d8d] mb-3 sm:mb-4 block group-hover:scale-110 transition-transform"
                  />
                  <h4 className="font-headline font-bold text-xs sm:text-sm mb-1">
                    {label}
                  </h4>
                  <p className="font-label text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

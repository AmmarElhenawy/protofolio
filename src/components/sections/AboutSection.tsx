import AppShell from "@/components/layout/AppShell";
import Image from "next/image";
import photo from "../../components/ME.jpg";

let database = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-database-fill" viewBox="0 0 16 16"><path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223"/><path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/><path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/><path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/></svg>;
let dimond = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-diamond-fill" viewBox="0 0 16 16"><path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098z"/></svg>;
const menu = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-menu-button-wide" viewBox="0 0 16 16"><path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/><path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/></svg>;
const bolt = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-charge" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/></svg>;
const mail = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>;
const person = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>;
let deployed_code = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-code" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/><path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708"/></svg>;
const code = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code" viewBox="0 0 16 16"><path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/></svg>;
let hub = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-asterisk" viewBox="0 0 16 16"><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/></svg>;
let terminal = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-terminal" viewBox="0 0 16 16"><path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/><path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/></svg>;
let home = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/></svg>;
let history = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16"><path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/><path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/><path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/></svg>;
let bag = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/></svg>;

const profileData = {
  name: "Ammar Elhenawy",
  role: "Backend Developer",
  bio: "Backend Developer passionate about building scalable, secure, and high-performance applications. I specialize in designing clean APIs and structured backend systems, with hands-on experience in modern JavaScript and PHP ecosystems. Currently expanding my DevOps expertise to deliver production-ready solutions that bridge development and deployment seamlessly.",
  location: "Cairo, Egypt",
  experience: "2+ Years",
  specialization: "Backend Systems & APIs",
  status: "Open to Opportunities",
};

const trainings = [
  { name: "DevOps – DEPI",                              level: "Current",   color: "text-[#a9ffdf] bg-[#a9ffdf]/10 border-[#a9ffdf]/20" },
  { name: "FCI - senior student -  b+ average",         level: "Current",   color: "text-[#a9ffdf] bg-[#a9ffdf]/10 border-[#a9ffdf]/20" },
  { name: "Backend Development – Laravel & Node.js",    level: "Completed", color: "text-[#feca5d] bg-[#feca5d]/10 border-[#feca5d]/20" },
  { name: "English Language Training – AUC · SYE · CAMP", level: "Completed", color: "text-[#ff8d8d] bg-[#ff8d8d]/10 border-[#ff8d8d]/20" },
];

const interests = [
  { icon: terminal,       label: "REST APIs",  desc: "NestJS · Express · Laravel" },
  { icon: deployed_code,  label: "DevOps",     desc: "Docker · CI/CD · Jenkins" },
  { icon: bolt,           label: "Real-time",  desc: "WebSockets · Socket.io · Redis" },
  { icon: database,       label: "Databases",  desc: "PostgreSQL · MongoDB · Prisma" },
];

export default function AboutPage() {
  return (
    <section className="p-1">
      <div className="px-4 sm:px-8 lg:px-12 py-6 sm:py-8 max-w-7xl w-full mx-auto flex-1">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16">

          {/* Portrait + Quick Facts */}
          <div className="lg:col-span-4 space-y-4">
            {/* Portrait Card */}
            <div className="bg-surface-container-high overflow-hidden relative group">
              <div className="aspect-square relative">
                <Image
                  src={photo}
                  alt="Ammar Elhenawy - Backend Developer"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  unoptimized
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
                { label: "Location",   value: profileData.location,       icon: home    },
                { label: "Experience", value: profileData.experience,     icon: history },
                { label: "Focus",      value: profileData.specialization, icon: dimond  },
                { label: "Status",     value: profileData.status,         icon: bag     },
              ].map(({ label, value, icon }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#ff8d8d] text-lg flex-shrink-0">
                    {icon}
                  </span>
                  <div className="min-w-0">
                    <span className="text-[10px] font-label text-slate-500 uppercase tracking-widest block">
                      {label}
                    </span>
                    <span className="text-sm font-headline text-on-surface truncate block">
                      {value}
                    </span>
                  </div>
                </div>
              ))}

              {/* Contact */}
              <div className="bg-surface-container-low p-5 sm:p-8 border border-outline-variant/10 mt-4">
                <h3 className="font-headline text-xs text-[#a9ffdf] uppercase tracking-[0.3em] mb-4">
                  Initiate_Contact
                </h3>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="mailto:ammarwabs@gmail.com"
                    className="bg-[#ff8d8d] text-[#640012] px-4 sm:px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">{mail}</span>
                    Send_Signal
                  </a>
                  <a
                    href="https://github.com/AmmarElhenawy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-outline-variant text-on-surface px-4 sm:px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">{code}</span>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ammar-elhenawy-393b60252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-outline-variant text-on-surface px-4 sm:px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">{person}</span>
                    LinkedIn
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1NErT5E7y4kvAWGIRXbuhHAT4EV1kS63-/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-outline-variant text-on-surface px-4 sm:px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">{hub}</span>
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
                System_Description
              </h3>
              <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {profileData.bio}
              </p>
            </div>

            {/* Training & Courses */}
            <div className="bg-surface-container-high p-5 sm:p-8">
              <h3 className="font-headline text-xs text-[#feca5d] uppercase tracking-[0.3em] mb-4 sm:mb-6">
                Training_&amp;_Courses
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {trainings.map((t) => (
                  <div
                    key={t.name}
                    className={`flex items-center justify-between p-3 sm:p-4 border ${t.color} gap-3`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <span
                        className="material-symbols-outlined text-lg flex-shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {menu}
                      </span>
                      <span className="font-headline font-bold text-xs sm:text-sm tracking-tight text-on-surface truncate">
                        {t.name}
                      </span>
                    </div>
                    <span className="font-label text-[10px] uppercase tracking-widest flex-shrink-0">
                      {t.level}
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
                  <span className="material-symbols-outlined text-[#ff8d8d] text-xl sm:text-2xl mb-3 sm:mb-4 block group-hover:scale-110 transition-transform">
                    {icon}
                  </span>
                  <h4 className="font-headline font-bold text-xs sm:text-sm mb-1">
                    {label}
                  </h4>
                  <p className="font-label text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest">
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
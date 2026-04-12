import AppShell from "@/components/layout/AppShell";
import Image from "next/image";
import Link from "next/link";
import APG_IMG from "../../components/ABG.jpg";
import APG_IMG_REG from "../../components/ABG_REGISTER.jpg";
import kafka_IMG from "../../components/kafka.jpg";
import devops_IMG from "../../components/devops2.jpg";
import CLINC_IMG from "../../components/darElsokar.jpg";
import invoice_IMG from "../../components/invoices.jpg";
import eCommerce_IMG from "../../components/eCommerce.jpg";
import DANA_IMG from "../../components/dana2.jpeg";

const book=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg> ;

const projects = [
  {
    name: "ABG Social App",
    desc: "Full-cycle social networking engine with real-time interactions, friend requests, and media sharing.",
    tags: ["Laravel", "MySQL", "Pusher"],
    status: "BE_002 · Laravel",
    statusColor: "text-[#a9ffdf] border-[#a9ffdf]/20",
    borderColor: "border-[#ff8d8d]",
    image: APG_IMG,
    href: "/projects/abg",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
    </svg>,
    tag: "mvc-restApi",
  },
  {
    name: "Clinic & Patient System",
    desc: "Digitalized patient journey from front-desk registration to prescription generation and archiving.",
    tags: ["Laravel", "MySQL", "Blade"],
    status: "BE_005 · Laravel MVC",
    statusColor: "text-[#feca5d] border-[#feca5d]/20",
    borderColor: "border-outline-variant/30",
    image: CLINC_IMG,
    href: "/projects/clinc",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
    </svg>,
    tag: "mvc",
  },
  {
    name: "Invoice ERP Module",
    desc: "Enterprise invoice management with multi-status billing lifecycle and secure document attachments.",
    tags: ["Laravel", "MySQL", "Blade"],
    status: "Legacy_Support",
    statusColor: "text-[#feca5d] border-[#feca5d]/20",
    borderColor: "border-outline-variant/30",
    image: invoice_IMG,
    href: "/projects/invoices",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-receipt" viewBox="0 0 16 16">
      <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z" />
      <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
    </svg>,
    tag: "mvc",
  },
  {
    name: "Kafka Microservices",
    desc: "Event-driven 3-broker Kafka cluster with KRaft mode, Docker orchestration, and real-time analytics.",
    tags: ["Kafka", "Docker", "Node.js"],
    status: "BE_006 · Microservices",
    statusColor: "text-[#feca5d] border-[#feca5d]/20",
    borderColor: "border-outline-variant/30",
    image: kafka_IMG,
    href: "/projects/kafka",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-columns-gap" viewBox="0 0 16 16">
      <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
    </svg>,
    tag: "microservices",
  },
  {
    name: "E-Commerce API",
    desc: "Scalable RESTful commerce backend with JWT auth, cart management, and order tracking.",
    tags: ["nodeJs", "mongoDB", "JWT"],
    status: "BE_004 · Express",
    statusColor: "text-[#feca5d] border-[#feca5d]/20",
    borderColor: "border-outline-variant/30",
    image: eCommerce_IMG,
    href: "/projects/e-commerce",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </svg>,
    tag: "restApi",
  },
  {
    name: "devops",
    desc: "A collection of Docker, Docker Compose, Portainer, and Jenkins pipeline tasks demonstrating containerization, orchestration, and CI/CD expertise.",
    tags: ["Docker", "Docker Compose", "kubarnetes", "Jenkins"],
    status: "Legacy_Support",
    statusColor: "text-[#feca5d] border-[#feca5d]/20",
    borderColor: "border-outline-variant/30",
    image: devops_IMG,
    href: "/projects/devops",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-terminal-fill" viewBox="0 0 16 16">
      <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5z" />
    </svg>,
    tag: "mvc-restApi",
  },
];

export default function ProjectsPage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl w-full mx-auto flex-1">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 bg-[#ff8d8d] animate-pulse" />
            <span className="font-headline text-xs text-[#ff8d8d] uppercase tracking-[0.3em]">
              Project_Vault_02
            </span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-on-surface tracking-tighter uppercase mb-2">
            System_Prototypes
          </h2>
          <p className="font-body text-on-surface-variant max-w-2xl leading-relaxed">
            System architecture documentation and source code repository for
            mission-critical backend services and infrastructure-as-code
            modules.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className={`bg-surface-container-high border-t-2 ${p.borderColor} group relative overflow-hidden transition-all duration-300`}
            >
              <div className="aspect-video relative overflow-hidden bg-surface-container-highest">
                <Image
                  src={p.image}
                  alt={`${p.name} Graphic`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-40 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 "
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-2 py-1 bg-surface-container-highest/80 backdrop-blur-md font-headline text-[10px] tracking-widest uppercase border ${p.statusColor}`}
                  >
                    {p.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight mb-2">
                  {p.name}
                </h3>
                <p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-2">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-surface-container-low text-slate-400 font-headline text-[10px] tracking-wider uppercase border border-outline-variant/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {/* <button className="bg-[#ff8d8d] text-[#640012] font-headline font-bold text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff7578] transition-colors active:scale-95">
                    <span className="material-symbols-outlined text-sm">
                      code
                    </span>
                    SOURCE
                  </button> */}
                  <Link
                    href={p.href}
                    className="flex-1 bg-[#ff8d8d] text-[#640012] font-headline font-bold text-sm py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff7578] transition-colors active:scale-95"
                  >
                    <span >{p.icon}
                    </span>
                    VIEW_SPECS
                  </Link>
                  {/* <button className="bg-outline-variant/10 border border-outline-variant text-[#ff8d8d] font-headline font-bold text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff8d8d]/10 transition-colors active:scale-95">
                    <span className="material-symbols-outlined text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-code" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708" />
                      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                    </svg>
                    </span>
                    DOCS
                  </button> */}
                </div>
              </div>
            </div>
          ))}

          {/* Featured Large: DANA */}
          <div className="md:col-span-3 lg:col-span-3 bg-surface-container-high border-t-3 border-[#ff8d8d] group relative overflow-hidden transition-all duration-300">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 relative bg-surface-container-highest overflow-hidden min-h-[250px]">
                <Image
                  src={DANA_IMG}
                  alt="DANA Graphic"
                  fill
                  className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700 "
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-high" />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-[#ff8d8d]/20 backdrop-blur-md text-[#ff8d8d] font-headline text-[10px] tracking-widest uppercase border border-[#ff8d8d]/20 font-bold">
                    Priority_A1
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="font-headline text-2xl sm:text-3xl font-black text-on-surface tracking-tighter mb-4 uppercase">
                  PROJECT_DANA
                </h3>
                <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                  Comprehensive medical infrastructure for pediatric growth
                  tracking, health monitoring, and AI-driven diagnostic
                  assistance.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["NestJS", "MongoDB", "Redis", "Socket.io"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-[#ff8d8d]/10 text-[#ff8d8d] font-headline text-[10px] tracking-wider uppercase border border-[#ff8d8d]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href="/projects/dana"
                    className="flex-1 bg-[#ff8d8d] text-[#640012] font-headline font-bold text-sm py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff7578] transition-colors active:scale-95"
                  >
                    <span className="material-symbols-outlined">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                      </svg>
                    </span>
                    VIEW_SPECS
                  </Link>
                  {/* <button className="flex-1 bg-outline-variant/10 border border-outline-variant text-[#ff8d8d] font-headline font-bold text-sm py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff8d8d]/10 transition-colors active:scale-95">
                    <span className="material-symbols-outlined">{book}</span>
                    TECH_DOCS
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          {/* DB Synchronizer small card */}
          {/* <div className="bg-surface-container-high border-t-2 border-outline-variant/30 group relative overflow-hidden transition-all duration-300">
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="w-10 h-10 flex items-center justify-center bg-[#a9ffdf]/10 text-[#a9ffdf] rounded-lg border border-[#a9ffdf]/20">
                  <span className="material-symbols-outlined">database</span>
                </span>
                <span className="font-headline text-[10px] text-slate-500 uppercase tracking-widest">
                  Type: Infra_Module
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight mb-2 uppercase">
                Task_Manager
              </h3>
              <p className="font-body text-sm text-on-surface-variant mb-auto line-clamp-3">
                Serverless utility for differential synchronization between
                distributed NoSQL clusters with automatic conflict resolution.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <button className="bg-[#ff8d8d] text-[#640012] font-headline font-bold text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff7578] transition-colors active:scale-95">
                  <span className="material-symbols-outlined text-sm">
                    code
                  </span>
                  SOURCE
                </button>
                <button className="bg-outline-variant/10 border border-outline-variant text-[#ff8d8d] font-headline font-bold text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff8d8d]/10 transition-colors active:scale-95">
                  <span className="material-symbols-outlined text-sm">
                    description
                  </span>
                  DOCS
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </AppShell>
  );
}

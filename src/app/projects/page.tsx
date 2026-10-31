import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icon";
import { PageHeading } from "@/components/ui/page-heading";
import type { Tech } from "@/lib/tech";
import type { ProjectSlug } from "@/lib/routes";

import abgCard from "@/assets/images/abg-card.jpg";
import clinicCard from "@/assets/images/clinic-card.jpg";
import invoicesCard from "@/assets/images/invoices-card.jpg";
import kafkaCard from "@/assets/images/kafka-card.jpg";
import ecommerceCard from "@/assets/images/ecommerce-card.jpg";
import devopsCard from "@/assets/images/devops-card.jpg";
import danaCard from "@/assets/images/dana-card.jpg";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Backend and DevOps projects by Ammar Elhenawy — Laravel, NestJS, Node.js APIs, and containerized infrastructure.",
};

type Category = "Laravel MVC" | "REST API" | "Microservices" | "DevOps" | "NestJS API";

type Project = {
  slug: ProjectSlug;
  name: string;
  summary: string;
  stack: Tech[];
  category: Category;
  categoryColor: string;
  borderColor: string;
  image: typeof abgCard;
  icon: IconName;
  featured?: boolean;
  repo: string | null;
  privateNote?: string;
};

const projects: Project[] = [
  {
    slug: "abg",
    name: "ABG Social App",
    summary: "Full-cycle social networking engine with real-time interactions, friend requests, and media sharing.",
    stack: ["Laravel", "MySQL", "Pusher"],
    category: "Laravel MVC",
    categoryColor: "text-[#7dc8ff] border-[#7dc8ff]/20",
    borderColor: "border-[#7dc8ff]",
    image: abgCard,
    icon: "peopleFill",
    repo: "https://github.com/AmmarElhenawy/abg-social-app/tree/main",
  },
  {
    slug: "clinic",
    name: "Clinic & Patient System",
    summary: "Digitalized patient journey from front-desk registration to prescription generation and archiving.",
    stack: ["Laravel", "MySQL", "Blade"],
    category: "Laravel MVC",
    categoryColor: "text-[#ff8d8d] border-[#ff8d8d]/20",
    borderColor: "border-[#ff8d8d]",
    image: clinicCard,
    icon: "plusSquare",
    repo: "https://github.com/AmmarElhenawy/Clinc",
  },
  {
    slug: "invoices",
    name: "Invoice ERP Module",
    summary: "Enterprise invoice management with multi-status billing lifecycle and secure document attachments.",
    stack: ["Laravel", "MySQL", "Blade"],
    category: "Laravel MVC",
    categoryColor: "text-[#feca5d] border-[#feca5d]/20",
    borderColor: "border-[#feca5d]",
    image: invoicesCard,
    icon: "receipt",
    repo: "https://github.com/AmmarElhenawy/invoices2",
  },
  {
    slug: "kafka",
    name: "Kafka Microservices",
    summary: "Event-driven 3-broker Kafka cluster with KRaft mode, Docker orchestration, and real-time analytics.",
    stack: ["Kafka", "Docker", "Node.js"],
    category: "Microservices",
    categoryColor: "text-[#feca5d] border-[#feca5d]/20",
    borderColor: "border-[#feca5d]",
    image: kafkaCard,
    icon: "columnsGap",
    repo: "https://github.com/AmmarElhenawy/kafka-microservice",
  },
  {
    slug: "e-commerce",
    name: "E-Commerce API",
    summary: "Scalable RESTful commerce backend with JWT auth, cart management, and order tracking.",
    stack: ["Node.js", "MongoDB", "JWT"],
    category: "REST API",
    categoryColor: "text-[#a9ffdf] border-[#a9ffdf]/20",
    borderColor: "border-[#a9ffdf]",
    image: ecommerceCard,
    icon: "cart",
    repo: "https://github.com/AmmarElhenawy/Ecommerce/tree/main",
  },
  {
    slug: "devops",
    name: "DevOps Task Suite",
    summary: "A collection of Docker, Docker Compose, Portainer, and Jenkins tasks demonstrating containerization, orchestration, and CI/CD.",
    stack: ["Docker", "Docker Compose", "Jenkins"],
    category: "DevOps",
    categoryColor: "text-[#feca5d] border-[#feca5d]/20",
    borderColor: "border-[#feca5d]",
    image: devopsCard,
    icon: "terminalFill",
    repo: null,
    privateNote: "Training tasks — no public repository",
  },
];

const dana: Project = {
  slug: "dana",
  name: "PROJECT_DANA",
  summary: "Comprehensive medical infrastructure for pediatric growth tracking, health monitoring, and AI-driven diagnostic assistance.",
  stack: ["NestJS", "MongoDB", "Redis", "Socket.io"],
  category: "NestJS API",
  categoryColor: "text-[#ff8d8d] border-[#ff8d8d]/20",
  borderColor: "border-[#ff8d8d]",
  image: danaCard,
  icon: "activity",
  featured: true,
  repo: null,
  privateNote: "Client project — API documentation only",
};

export default function ProjectsPage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl w-full mx-auto flex-1">
        <div className="mb-12">
          <PageHeading
            title="Projects"
            eyebrow="Backend Portfolio"
            tag="PROJECT_VAULT_02"
            intro="Backend services and infrastructure projects — Laravel, NestJS, Node.js, and containerized deployments."
          />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className={`bg-surface-container-high border-t-2 ${p.borderColor} group relative overflow-hidden transition-all duration-300 flex flex-col`}
            >
              <div className="relative aspect-video overflow-hidden bg-surface-container-highest">
                <Image
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  {...(i === 0 ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
                  className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-2 py-1 bg-surface-container-highest/80 backdrop-blur-md font-headline text-[11px] tracking-widest uppercase border ${p.categoryColor}`}
                  >
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="font-headline text-xl font-bold text-on-surface tracking-tight mb-2">
                  {p.name}
                </h2>
                <p className="font-body text-sm text-on-surface-variant mb-6">
                  {p.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-surface-container-low text-slate-400 font-headline text-[11px] tracking-wider uppercase border border-outline-variant/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="w-full bg-[#ff8d8d] text-[#640012] font-headline font-bold text-sm py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff7578] transition-colors active:scale-95"
                  >
                    <Icon name={p.icon} size={16} />
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Featured Large: DANA */}
          <div className="md:col-span-2 lg:col-span-3 bg-surface-container-high border-t-2 border-[#ff8d8d] group relative overflow-hidden transition-all duration-300">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 relative bg-surface-container-highest overflow-hidden min-h-[250px]">
                <Image
                  src={dana.image}
                  alt="DANA project card graphic"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-high" />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-[#ff8d8d]/20 backdrop-blur-md text-[#ff8d8d] font-headline text-[11px] tracking-widest uppercase border border-[#ff8d8d]/20 font-bold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                <h2 className="font-headline text-2xl sm:text-3xl font-black text-on-surface tracking-tighter mb-4 uppercase">
                  {dana.name}
                </h2>
                <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                  {dana.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {dana.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-[#ff8d8d]/10 text-[#ff8d8d] font-headline text-[11px] tracking-wider uppercase border border-[#ff8d8d]/20"
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
                    <Icon name={dana.icon} size={16} />
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

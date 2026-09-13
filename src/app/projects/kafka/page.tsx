import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/icon";
import { PageHeading } from "@/components/ui/page-heading";
import banner from "@/assets/images/kafka-banner.jpg";

export const metadata: Metadata = {
  title: "Kafka Microservices",
  description:
    "An event-driven, 3-broker Kafka cluster in KRaft mode with Docker orchestration and real-time analytics across Node.js microservices.",
};

type Feature = {
  icon: IconName;
  title: string;
  desc: string;
  tags: string[];
  color: string;
};

const features: Feature[] = [
  {
    icon: "asterisk",
    title: "High Availability Cluster",
    desc: "Orchestrated a 3-Broker Kafka Cluster using Docker Compose — if one broker fails, the cluster continues via replication.",
    tags: ["Docker Compose", "RF:3"],
    color: "text-[#feca5d]",
  },
  {
    icon: "speedometer2",
    title: "KRaft Mode",
    desc: "ZooKeeper-less Kafka mode for faster controller elections and simplified metadata management.",
    tags: [],
    color: "text-[#7dc8ff]",
  },
  {
    icon: "fileBarGraph",
    title: "Advanced Data Processing",
    desc: "Data transformation using .reduce() to aggregate real-time analytics from stream buffers.",
    tags: [],
    color: "text-[#a9ffdf]",
  },
  {
    icon: "reception4",
    title: "Inter-Container Networking",
    desc: "Custom bridge network in Docker for secure, low-latency communication between Node.js services and Kafka.",
    tags: [],
    color: "text-[#ff8d8d]",
  },
  {
    icon: "activity",
    title: "Observability",
    desc: "Integrated Kafka UI for real-time monitoring of topics, partitions, and message offsets across all event streams.",
    tags: [],
    color: "text-[#feca5d]",
  },
  {
    icon: "terminalSplit",
    title: "Event Chaining",
    desc: "Services act as both consumer and producer, creating fully decoupled multi-step event pipelines.",
    tags: [],
    color: "text-slate-300",
  },
];

export default function KafkaPage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <PageHeading
            title="Kafka Microservices"
            eyebrow="Microservices"
            tag="MICROSERVICES"
            accent="secondary"
            intro="A high-performance, asynchronous microservices ecosystem built with Node.js and Kafka using event-driven architecture and Docker orchestration."
            actions={
              <a
                href="https://github.com/AmmarElhenawy/kafka-microservice"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#feca5d] text-[#2a1a00] px-6 py-3 font-label font-bold text-xs tracking-widest uppercase flex items-center gap-2 rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(254,202,93,0.2)]"
              >
                <Icon name="code" size={16} />
                GitHub
              </a>
            }
          />

          {/* Hero banner */}
          <div className="relative h-64 w-full overflow-hidden bg-surface-container-low mt-8">
            <Image
              src={banner}
              alt="Kafka UI dashboard showing cluster topics and partitions"
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/30" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex flex-wrap gap-6 sm:gap-12">
              {[
                { label: "Brokers", value: "3-Node Cluster", color: "text-[#feca5d]" },
                { label: "Mode", value: "KRaft (No ZK)", color: "text-[#ff8d8d]" },
                { label: "Partitions", value: "3 x RF:3", color: "text-[#a9ffdf]" },
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

        {/* Problem / Event Flow */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#feca5d]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#feca5d]/5 rounded-full blur-3xl" />
            <h2 className="text-xs font-label text-[#feca5d] uppercase tracking-[0.3em] mb-6">
              01 // Problem
            </h2>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              In monolithic architectures, services like Payments, Orders, and
              Emails are tightly coupled — leading to system failure if one
              component goes down and making independent scaling impossible.
            </p>
            <div className="p-4 bg-surface-container-high border-l-2 border-[#feca5d]/40">
              <p className="text-xs font-label text-slate-400 uppercase mb-2">
                Solution
              </p>
              <p className="text-sm font-body italic text-on-surface-variant">
                Services communicate through a distributed message broker.
                When a payment is processed, it triggers a chain of events
                across multiple services without them waiting for each other —
                ensuring high system resilience.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#a9ffdf]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#a9ffdf]/5 rounded-full blur-3xl" />
            <h2 className="text-xs font-label text-[#a9ffdf] uppercase tracking-[0.3em] mb-6">
              02 // Event Flow
            </h2>
            <ul className="text-slate-300 font-body leading-relaxed mb-6 list-disc list-inside space-y-1">
              <li>Payment Service (Producer) → emits payment-successful</li>
              <li>Order Service (Consumer + Producer) → creates orders, emits order-successful</li>
              <li>Email Service (Consumer) → triggers notifications</li>
              <li>Analytics Service → aggregates real-time data from all topics</li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              {["Zero Data Loss", "Real-time Analytics"].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <Icon name="checkAll" size={16} className="text-[#a9ffdf]" />
                  <span className="text-[11px] font-label text-slate-400 uppercase">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="mb-24">
          <h2 className="text-xs font-label text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">
            Engineering &amp; DevOps Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-surface-container-high p-6 group hover:bg-[#1d2023] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon name={f.icon} size={20} className={f.color} />
                  <h2 className="font-headline font-bold text-lg tracking-tight">
                    {f.title}
                  </h2>
                </div>
                <p className="text-sm text-slate-400 mb-4">{f.desc}</p>
                {f.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-surface-container-low px-3 py-1 rounded text-[11px] font-label text-slate-400 border border-outline-variant/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-label text-[#feca5d] uppercase tracking-[0.3em] mb-4">
              Service Topology
            </h2>
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tighter">
              Event-Driven Pipeline
            </h2>
            <p className="text-slate-400 font-body leading-relaxed mb-8">
              Each service is a standalone Node.js process communicating
              exclusively through Kafka topics.
            </p>
            <ul className="space-y-4">
              {[
                { n: "01", c: "text-[#feca5d]", title: "Payment Service", desc: "Producer — emits payment-successful events." },
                { n: "02", c: "text-[#7dc8ff]", title: "Order Service", desc: "Consumer + Producer — creates orders, emits order-successful." },
                { n: "03", c: "text-[#a9ffdf]", title: "Email Service", desc: "Consumer — triggers automated customer notifications." },
                { n: "04", c: "text-[#ff8d8d]", title: "Analytics Service", desc: "Aggregates live data from all topics for business insights." },
              ].map(({ n, c, title, desc }) => (
                <li key={n} className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 ${c} text-xs font-bold font-headline`}>
                    {n}
                  </div>
                  <div>
                    <p className="text-sm font-headline font-bold text-on-surface uppercase tracking-tight">
                      {title}
                    </p>
                    <p className="text-xs text-slate-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Code schematic */}
          <div className="lg:col-span-7 bg-surface-container-low p-6 sm:p-8 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[11px] font-label text-slate-400 uppercase tracking-widest">
                docker-compose.yml
              </span>
            </div>
            <div className="space-y-4 font-mono text-[11px]">
              <div className="flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#feca5d]">
                <span className="text-[#feca5d]">kafka-broker-1</span>
                <span className="text-slate-400">-&gt; :9092 KRaft Mode</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#feca5d]">
                <span className="text-[#feca5d]">kafka-broker-2</span>
                <span className="text-slate-400">-&gt; :9093 Replica</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#feca5d]">
                <span className="text-[#feca5d]">kafka-broker-3</span>
                <span className="text-slate-400">-&gt; :9094 Replica</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#a9ffdf]">
                <span className="text-[#a9ffdf]">payment-svc</span>
                <span className="text-slate-400">-&gt; Producer</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#7dc8ff]">
                <span className="text-[#7dc8ff]">order-svc</span>
                <span className="text-slate-400">-&gt; Consumer + Producer</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#ff8d8d]">
                <span className="text-[#ff8d8d]">email-svc</span>
                <span className="text-slate-400">-&gt; Consumer</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-[#0c0e10]/40">
                <span className="text-slate-300">kafka-ui</span>
                <span className="text-slate-400">-&gt; Observability :8080</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom links */}
        <section className="bg-surface-container-low p-12 text-center border border-outline-variant/5 mb-12">
          <h2 className="text-2xl font-headline font-bold mb-8 tracking-tighter">
            Explore Source Code
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/AmmarElhenawy/kafka-microservice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-surface-container-high hover:bg-surface-bright transition-all w-48 rounded-lg group"
            >
              <Icon name="codeSquare" size={28} className="text-[#feca5d] mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-label text-slate-400 uppercase tracking-widest mb-1">
                Source Code
              </span>
              <span className="text-sm font-headline font-bold text-on-surface">
                GitHub
              </span>
            </a>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

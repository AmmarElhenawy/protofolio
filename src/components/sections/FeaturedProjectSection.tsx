import Image from "next/image";
import Link from "next/link";
import photo from "../../components/dana1.jpeg";

export default function FeaturedProjectSection() {
  return (
    <section className="p-4 sm:p-8 lg:p-12">
      <div className="grid grid-cols-12 gap-6 lg:gap-10">
        {/* Text */}
        <div className="col-span-12 lg:col-span-7">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff8d8d]/30 to-[#feca5d]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
            <div className="relative bg-surface-container-low p-5 sm:p-8 h-full overflow-hidden">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <span className="font-label text-[10px] text-[#ff8d8d] bg-[#ff8d8d]/10 px-2 py-0.5 uppercase tracking-widest">
                  Featured_System
                </span>
                <span className="font-label text-[10px] text-outline uppercase">
                  Released: 2026
                </span>
              </div>
              <h3 className="font-headline text-3xl sm:text-4xl font-bold text-on-surface mb-4 tracking-tighter">
                PROJECT: DANA
              </h3>
              <p className="font-body text-on-surface-variant max-w-lg mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                A comprehensive medical infrastructure for pediatric growth
                tracking, health monitoring, and AI-driven diagnostic assistance.
                Engineered for high-reliability healthcare environments with
                sub-100ms latency.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <Link
                  href="/projects/dana"
                  className="bg-[#ff8d8d] hover:bg-[#ff7578] text-[#640012] font-label text-xs font-bold px-4 sm:px-6 py-3 tracking-widest uppercase transition-all duration-200"
                >
                  View Architecture
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="col-span-12 lg:col-span-5 relative">
          <div className="h-full min-h-[220px] sm:min-h-[300px] bg-surface-container-highest overflow-hidden relative border border-outline-variant/10">
            <Image
              src={photo}
              alt="Architecture Diagram"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 mix-blend-screen"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e10] via-transparent to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex gap-2 flex-wrap">
              {["K8S", "NestJS", "MongoDB"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-surface/80 backdrop-blur font-label text-[8px] text-on-surface uppercase border border-outline-variant/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
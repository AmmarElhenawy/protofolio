import AppShell from "@/components/layout/AppShell";
import HeroSection from "@/components/sections/HeroSection";
import TechStackSection from "@/components/sections/TechStackSection";
import FeaturedProjectSection from "@/components/sections/FeaturedProjectSection";
import AboutSection from "@/components/sections/AboutSection";

export default function HomePage() {
  return (
    <AppShell>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <FeaturedProjectSection />
    </AppShell>
  );
}

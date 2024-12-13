import Contact from "@/components/Contact";
import Experiance from "@/components/Experiance";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/Projects";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SkillsSection />
      <Experiance />
      <Contact />
    </main>
  );
}

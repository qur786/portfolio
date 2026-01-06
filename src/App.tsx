import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { HackathonsSection } from "./components/HackathonsSection";
import { SkillsSection } from "./components/ExpertiseSection";
import { EducationHobbiesSection } from "./components/EducationHobbiesSection";
import { Footer } from "./components/Footer";
import { ThreeJSBackground } from "./components/ThreeJSBackground";
import { useRef, useEffect } from "react";

export function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // --- Scroll Reveal Observer ---
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px" },
    );

    const elements = document.querySelectorAll(".slide-up");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200 bg-[#050505] text-white min-h-screen font-sans overflow-x-hidden">
      <ThreeJSBackground />
      <div className="fixed inset-0 z-0 bg-tech-grid pointer-events-none"></div>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <HackathonsSection />
      <EducationHobbiesSection />
      <Footer />
    </div>
  );
}

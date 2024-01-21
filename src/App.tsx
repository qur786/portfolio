import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import { Introduction } from "./components/Introduction";
import { SocialSidebar } from "./components/SocialSidebar";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import "./Icons/devicon.min.css";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

export function App(): JSX.Element {
  const [isParticlesEngineLoaded, setIsParticlesEngineLoaded] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsParticlesEngineLoaded(true);
    });
  }, []);

  return (
    <main className="select-none">
      <Introduction isParticlesEngineLoaded={isParticlesEngineLoaded} />
      <SocialSidebar />
      <div className="px-16">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}

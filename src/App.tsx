import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useRef, useState } from "react";
import { Introduction } from "./components/Introduction";
import { SocialSidebar } from "./components/SocialSidebar";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { useMobile } from "./hooks";

export function App(): JSX.Element {
  const [isParticlesEngineLoaded, setIsParticlesEngineLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile(mainRef);
  console.log(isMobile); // Provide it in the react context

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsParticlesEngineLoaded(true);
    });
  }, []);

  return (
    <main className="select-none" ref={mainRef}>
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

import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import { Introduction } from "./components/Introduction";
import { SocialSidebar } from "./components/SocialSidebar";

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
    <main>
      <Introduction isParticlesEngineLoaded={isParticlesEngineLoaded} />
      <SocialSidebar />
    </main>
  );
}

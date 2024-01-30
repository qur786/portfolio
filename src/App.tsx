import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useContext, useEffect, useRef, useState } from "react";
import { Introduction, IntroductionProps } from "./components/Introduction";
import { SocialSidebar } from "./components/SocialSidebar";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { useMobile } from "./hooks";
import { MobileContext } from "./context";
import { Fade, Slide } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import { Footer } from "./components/Footer";

export function App(): JSX.Element {
  const [isParticlesEngineLoaded, setIsParticlesEngineLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile(mainRef);
  const { setIsMobile } = useContext(MobileContext);

  const handleViewButtonClick: IntroductionProps["onViewWorkClick"] = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsParticlesEngineLoaded(true);
    });
  }, []);

  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile, setIsMobile]);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      pageTitle: "Home",
      page: "/",
    });
  }, []);

  return (
    <main className="select-none" ref={mainRef}>
      <SocialSidebar />
      <Fade triggerOnce duration={5000}>
        <Introduction
          onViewWorkClick={handleViewButtonClick}
          isParticlesEngineLoaded={isParticlesEngineLoaded}
        />
      </Fade>
      <div className="px-16" ref={aboutRef}>
        <Slide triggerOnce>
          <About />
        </Slide>
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

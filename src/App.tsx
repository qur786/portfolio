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
import { Footer, FooterProps } from "./components/Footer";
import { Modal, ModalProps } from "./components/Modal";

export function App(): JSX.Element {
  const [isParticlesEngineLoaded, setIsParticlesEngineLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const messageDialogRef = useRef<HTMLDialogElement>(null);
  const isMobile = useMobile(mainRef);
  const { setIsMobile } = useContext(MobileContext);

  const handleViewButtonClick: IntroductionProps["onViewWorkClick"] = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleModalOpen: FooterProps["onMessageButtonClick"] = () => {
    messageDialogRef.current?.showModal();
  };

  const handleModalClose: ModalProps["onClose"] = () => {
    messageDialogRef.current?.close();
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
        <Modal ref={messageDialogRef} onClose={handleModalClose}>
          <div className="pb-8 pt-6 px-12 flex flex-col gap-4 justify-center items-center">
            <h6 className="font-bold text-xl">Message</h6>
            <form className="flex flex-col w-full gap-2">
              <label htmlFor="name" className="font-bold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className="bg-[#616C6F] text-sm font-[500] opacity-75 focus:outline-none rounded-md px-2"
              />
              <label htmlFor="email" className="font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="bg-[#616C6F] text-sm font-[500] opacity-75 focus:outline-none rounded-md px-2"
              />
              <label htmlFor="message" className="font-bold">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={500}
                className="bg-[#616C6F] text-sm font-[500] opacity-75 focus:outline-none rounded-md px-2 resize-none"
              />
            </form>
          </div>
        </Modal>
      </div>
      <Footer onMessageButtonClick={handleModalOpen} />
    </main>
  );
}

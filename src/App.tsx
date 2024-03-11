import { useContext, useEffect, useRef } from "react";
import { Introduction, IntroductionProps } from "./components/Introduction";
import { SocialSidebar } from "./components/SocialSidebar";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Fade, Slide } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import { Footer, FooterProps } from "./components/Footer";
import { Modal, ModalProps } from "./components/Modal";
import { MessageForm, MessageFormProps } from "./components/MessageForm";
import { ThemeContext } from "./context/theme-context";
import { send } from "@emailjs/browser";
import { useSnackbar } from "notistack";
import { Stars } from "./components/Stars";

export function App(): JSX.Element {
  const { theme, toggleTheme } = useContext<ThemeContext>(ThemeContext);
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const messageDialogRef = useRef<HTMLDialogElement>(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleViewButtonClick: IntroductionProps["onViewWorkClick"] = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleModalOpen: FooterProps["onMessageButtonClick"] = () => {
    messageDialogRef.current?.showModal();
  };

  const handleModalClose: ModalProps["onClose"] = () => {
    messageDialogRef.current?.close();
  };

  const handleMessageFormSubmit: MessageFormProps["onSubmit"] = (
    messageData
  ) => {
    send(
      "default_service",
      "template_3r9yy7s",
      {
        to_name: "Qurban",
        from_name: messageData.name,
        message: messageData.message,
        from_email: messageData.email,
      },
      "7gN_gfh4gzeFqVDUK"
    )
      .then(() => {
        enqueueSnackbar("Successfully sent the message.", {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar("Some error occured while sending the message.", {
          variant: "error",
        });
      })
      .finally(() => {
        handleModalClose();
      });
  };

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      pageTitle: "Home",
      page: "/",
    });
  }, []);

  return (
    <main className="select-none" ref={mainRef}>
      <div className="h-screen w-full fixed top-0 left-0">
        <Stars />
      </div>
      <SocialSidebar theme={theme} toggleTheme={toggleTheme} />
      <Fade triggerOnce duration={5000}>
        <Introduction onViewWorkClick={handleViewButtonClick} />
      </Fade>
      <div className="px-16" ref={aboutRef}>
        <Slide triggerOnce>
          <About />
        </Slide>
        <Skills />
        <Experience theme={theme} />
        <Projects />
        <Modal ref={messageDialogRef} onClose={handleModalClose}>
          <MessageForm onSubmit={handleMessageFormSubmit} />
        </Modal>
      </div>
      <Footer onMessageButtonClick={handleModalOpen} />
    </main>
  );
}

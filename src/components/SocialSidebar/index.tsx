import { Fade, Slide } from "react-awesome-reveal";
import { GithubIcon } from "../../Icons/github";
import { GmailIcon } from "../../Icons/gmail";
import { LinkedInIcon } from "../../Icons/linked-in";
import { TwitterIcon } from "../../Icons/twitter";
import { WhatsappIcon } from "../../Icons/whatsapp";
import ReactGA from "react-ga4";
import { MouseEventHandler } from "react";

export function SocialSidebar(): JSX.Element {
  const handleResumeClick: MouseEventHandler<HTMLAnchorElement> = () => {
    ReactGA.event({
      category: "Resume",
      action: "open_resume",
    });
  };
  return (
    <>
      <div className="fixed bottom-0 left-0 p-4 flex flex-col gap-4">
        <Fade cascade damping={0.5} triggerOnce>
          <a
            href="https://www.linkedin.com/in/qurban-ahmad-qur786/"
            title="LinkedIn"
          >
            <LinkedInIcon className="h-6 fill-primary hover:fill-[#0077B5]" />
          </a>
          <a href="https://twitter.com/fantasticnerd67" title="Twitter">
            <TwitterIcon className="h-6 fill-primary hover:fill-[#1DA1F2]" />
          </a>
          <a href="https://github.com/qur786" title="Github">
            <GithubIcon className="h-6" />
          </a>
          <a href="https://wa.me/+916204789892" title="Whatsapp">
            <WhatsappIcon className="h-6 fill-primary hover:fill-[#25D366]" />
          </a>
          <a href="mailto:ahmad76qurban@gmail.com" title="Email">
            <GmailIcon className="h-6 fill-primary hover:fill-[#F2A60C]" />
          </a>
        </Fade>
      </div>
      <div className="fixed right-0 top-2">
        <Slide direction="right" triggerOnce delay={5 * 500}>
          <a
            href="mailto:ahmad76qurban@gbouncemail.com"
            className="hover:text-red-600"
            style={{ writingMode: "vertical-rl" }}
          >
            ahmad76qurban@gmail.com
          </a>
        </Slide>
      </div>
      <a
        href="/portfolio/Qurban-Ahmad-Latest.pdf"
        onClick={handleResumeClick}
        target="_blank"
      >
        <button className="absolute z-10 top-2 right-8 shadow-xl shadow-cyan-500/50 bg-[#67E6DC] text-black font-bold rounded-lg px-6 py-2">
          Resume
        </button>
      </a>
    </>
  );
}

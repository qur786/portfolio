import { Fade, Slide } from "react-awesome-reveal";
import { GithubIcon } from "../../Icons/github";
import { GmailIcon } from "../../Icons/gmail";
import { LinkedInIcon } from "../../Icons/linked-in";
import { TwitterIcon } from "../../Icons/twitter";
import { WhatsappIcon } from "../../Icons/whatsapp";

export function SocialSidebar(): JSX.Element {
  return (
    <>
      <div className="fixed bottom-0 left-0 p-4 flex flex-col gap-4">
        <Fade cascade damping={0.5} triggerOnce>
          <a
            href="https://www.linkedin.com/in/qurban-ahmad-qur786/"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/fantasticnerd67" title="Twitter">
            <TwitterIcon />
          </a>
          <a href="https://github.com/qur786" title="Github">
            <GithubIcon />
          </a>
          <a href="https://wa.me/+916204789892" title="Whatsapp">
            <WhatsappIcon />
          </a>
          <a href="mailto:ahmad76qurban@gmail.com" title="Email">
            <GmailIcon />
          </a>
        </Fade>
      </div>
      <Slide triggerOnce delay={5 * 500}>
        <a
          href="mailto:ahmad76qurban@gbouncemail.com"
          className="fixed right-0 top-2 hover:text-red-600"
          style={{ writingMode: "vertical-rl" }}
        >
          ahmad76qurban@gmail.com
        </a>
      </Slide>
    </>
  );
}

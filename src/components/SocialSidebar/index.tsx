import { Fade } from "react-awesome-reveal";
import { GithubIcon } from "../../Icons/github";
import { GmailIcon } from "../../Icons/gmail";
import { LinkedInIcon } from "../../Icons/linked-in";
import { TwitterIcon } from "../../Icons/twitter";
import { WhatsappIcon } from "../../Icons/whatsapp";

export function SocialSidebar(): JSX.Element {
  return (
    <div className="fixed bottom-0 left-0 p-4 flex flex-col gap-4 z-[1]">
      {/* z-index is provided because this component is getting overlaid by Introduction and Footer. */}
      <Fade cascade damping={0.5} triggerOnce>
        <a
          href="https://www.linkedin.com/in/qurban-ahmad-qur786/"
          title="LinkedIn"
        >
          <LinkedInIcon className="h-6 hover:scale-150 transition-transform fill-primary hover:fill-[#0077B5]" />
        </a>
        <a href="https://twitter.com/fantasticnerd67" title="Twitter">
          <TwitterIcon className="h-6 hover:scale-150 transition-transform fill-primary hover:fill-[#1DA1F2]" />
        </a>
        <a href="https://github.com/qur786" title="Github">
          <GithubIcon className="h-6 hover:scale-150 transition-transform fill-primary hover:fill-black dark:hover:fill-white" />
        </a>
        <a href="https://wa.me/+916204789892" title="Whatsapp">
          <WhatsappIcon className="h-6 hover:scale-150 transition-transform fill-primary hover:fill-[#25D366]" />
        </a>
        <a href="mailto:ahmad76qurban@gmail.com" title="Email">
          <GmailIcon className="h-6 hover:scale-150 transition-transform fill-primary hover:fill-[#F2A60C]" />
        </a>
      </Fade>
    </div>
  );
}

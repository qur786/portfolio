import { GithubIcon } from "../../Icons/github";
import { GmailIcon } from "../../Icons/gmail";
import { LinkedInIcon } from "../../Icons/linked-in";
import { TwitterIcon } from "../../Icons/twitter";
import { WhatsappIcon } from "../../Icons/whatsapp";

export function SocialSidebar(): JSX.Element {
  return (
    <div className="fixed top-1/2 left-0 p-4">
      <a href="https://www.linkedin.com/in/qurban-ahmad-qur786/">
        <LinkedInIcon />
      </a>
      <a href="https://twitter.com/fantasticnerd67">
        <TwitterIcon />
      </a>
      <a href="https://github.com/qur786">
        <GithubIcon />
      </a>
      <a href="https://wa.me/+916204789892">
        <WhatsappIcon />
      </a>
      <a href="mailto:ahmad76qurban@gmail.com">
        <GmailIcon />
      </a>
    </div>
  );
}

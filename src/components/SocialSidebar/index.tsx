import { GithubIcon } from "../../Icons/github";
import { GmailIcon } from "../../Icons/gmail";
import { LinkedInIcon } from "../../Icons/linked-in";
import { TwitterIcon } from "../../Icons/twitter";
import { WhatsappIcon } from "../../Icons/whatsapp";

export function SocialSidebar(): JSX.Element {
  return (
    <>
      <div className="sm:fixed sm:top-1/4 sm:left-0 bg-gray-950 sm:bg-transparent sm:mx-0 sm:py-2 sm:px-4 p-4 sm:flex-col flex-row justify-evenly items-center gap-4 sm:border-2 border-[#FF020A] sm:flex flex">
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
      <div>
        <a
          href="mailto:ahmad76qurban@gmail.com"
          className="fixed right-0 top-1/4 hover:text-red-600"
          style={{ writingMode: "vertical-rl" }}
        >
          ahmad76qurban@gmail.com
        </a>
      </div>
    </>
  );
}

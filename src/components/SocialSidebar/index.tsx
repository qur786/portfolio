import { LinkedInIcon } from "../../Icons/linked-in";
import { TwitterIcon } from "../../Icons/twitter";

export function SocialSidebar(): JSX.Element {
  return (
    <div className="fixed top-1/2 left-0 p-4">
      <a href="https://www.linkedin.com/in/qurban-ahmad-qur786/">
        <LinkedInIcon />
      </a>
      <a href="https://twitter.com/fantasticnerd67">
        <TwitterIcon />
      </a>
      <a href=""></a>
      <a href=""></a>
    </div>
  );
}

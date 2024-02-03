import { CallIcon } from "../../Icons/call";
import { MessageIcon } from "../../Icons/message";
import { UpArrowIcon } from "../../Icons/up-arrow";
import { DevIcon } from "../../dev-icon";
import { FooterButton, FooterButtonProps } from "../FooterButton";

export interface FooterProps {
  onMessageButtonClick?: () => void;
}

export function Footer({ onMessageButtonClick }: FooterProps): JSX.Element {
  const handleBackToTopClick: FooterButtonProps["onClick"] = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    // z-index is provided to show footer above social provider
    <div className="min-h-56 py-8 relative z-[2] bg-slate-200 dark:bg-[#211E1E]">
      {/* Code for slope */}
      {/* <div
        id="slope"
        className="h-2/3 w-full bg-gradient-to-bl from-transparent from-50% to-slate-200 dark:to-[#211E1E] to-50%"
      ></div> */}
      <div className="h-full flex flex-col gap-10">
        <div>
          <h5 className="text-primary font-semibold text-xl bottom-0 text-center pt-6 pb-4">
            Thanks for visiting!
          </h5>
          <div className="flex flex-row justify-center gap-8">
            <FooterButton
              title="Back to top"
              icon={UpArrowIcon}
              onClick={handleBackToTopClick}
            />
            <FooterButton
              title="Send message"
              icon={MessageIcon}
              onClick={onMessageButtonClick}
            />
            <FooterButton
              title="Give me a call"
              icon={CallIcon}
              link="tel:+916204789892"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h5 className="text-primary font-semibold text-lg bottom-0 text-center">
            This site has been developed with:
          </h5>
          <div className="flex flex-row justify-center gap-2 flex-wrap">
            <DevIcon name="devicon-react-original-wordmark" />
            <DevIcon name="devicon-html5-plain-wordmark" />
            <DevIcon name="devicon-css3-plain-wordmark" />
            <DevIcon name="devicon-tailwindcss-original-wordmark" />
            <DevIcon name="devicon-javascript-plain" />
            <DevIcon name="devicon-typescript-plain" />
          </div>
        </div>
      </div>
    </div>
  );
}

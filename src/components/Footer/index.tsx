import { CallIcon } from "../../Icons/call";
import { MessageIcon } from "../../Icons/message";
import { UpArrowIcon } from "../../Icons/up-arrow";
import { FooterButton, FooterButtonProps } from "../FooterButton";

export function Footer(): JSX.Element {
  const handleBackToTopClick: FooterButtonProps["onClick"] = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    // z-index is provided to show footer above social provider
    <div className="h-56 relative z-[2]">
      <div
        id="slope"
        className="h-2/3 w-full bg-gradient-to-bl from-transparent from-50% to-slate-200 dark:to-[#211E1E] to-50%"
      ></div>
      <div className="h-full bg-slate-200 dark:bg-[#211E1E]">
        <h5 className="text-primary font-semibold text-2xl bottom-0 text-center pt-6 pb-12">
          Thanks for visiting!
        </h5>
        <div className="flex flex-row justify-center gap-8">
          <FooterButton
            title="Back to top"
            icon={UpArrowIcon}
            onClick={handleBackToTopClick}
          />
          <FooterButton title="Send message" icon={MessageIcon} />
          <FooterButton
            title="Give me a call"
            icon={CallIcon}
            link="tel:+916204789892"
          />
        </div>
      </div>
    </div>
  );
}

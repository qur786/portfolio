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
    <div className="relative h-56">
      <div
        id="slope"
        className="h-2/3 before:absolute before:top-0 before:left-0 before:w-full before:h-2/3 before:bg-gradient-to-bl before:from-transparent before:from-50% before:to-[#211E1E] before:to-50%"
      ></div>
      <div className="h-full bg-[#211E1E]">
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

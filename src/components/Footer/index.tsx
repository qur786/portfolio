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
    <div className="h-72 pt-8">
      <h5 className="text-primary font-semibold text-2xl static bottom-0 text-center py-12">
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
  );
}

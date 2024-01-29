import { MessageIcon } from "../../Icons/message";
import { UpArrowIcon } from "../../Icons/up-arrow";
import { FooterButton } from "../FooterButton";

export function Footer(): JSX.Element {
  return (
    <div className="h-72 pt-8">
      <h5 className="text-primary font-semibold text-2xl static bottom-0 text-center py-12">
        Thanks for visiting!
      </h5>
      <div className="flex flex-row justify-center gap-8">
        <FooterButton title="Back to top" icon={UpArrowIcon} />
        <FooterButton title="Send message" icon={MessageIcon} />
        <FooterButton title="Give me a call" icon={UpArrowIcon} />
      </div>
    </div>
  );
}

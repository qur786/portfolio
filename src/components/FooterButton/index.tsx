import type { ComponentType } from "react";
import { IconProps } from "../../Icons/utils";

interface FooterButtonProps {
  title: string;
  icon: ComponentType<IconProps>;
}

export function FooterButton({
  title,
  icon: Icon,
}: FooterButtonProps): JSX.Element {
  return (
    <button className="hover:text-primary hover:scale-110 transition-[color,transform] font-bold text-gray-500">
      <Icon className="fill-primary h-4 inline" />
      <p>{title}</p>
    </button>
  );
}

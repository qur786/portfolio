import type { ComponentType, MouseEventHandler } from "react";
import { IconProps } from "../../Icons/utils";

export interface FooterButtonProps {
  title: string;
  icon: ComponentType<IconProps>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  link?: string;
}

export function FooterButton({
  title,
  icon: Icon,
  link,
  onClick,
}: FooterButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="hover:text-primary hover:scale-110 transition-[color,transform] font-bold text-gray-500"
    >
      <Icon className="fill-primary h-6 inline" />
      {typeof link === "string" && link.length > 0 ? (
        <a href={link} className="block">
          {title}
        </a>
      ) : (
        <p>{title}</p>
      )}
    </button>
  );
}

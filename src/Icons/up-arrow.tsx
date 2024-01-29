import { IconProps } from "./utils";

export function UpArrow({ className }: IconProps): JSX.Element {
  return (
    <svg
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon
        fillRule="evenodd"
        points="9 5.414 9 14 7 14 7 5.414 3.707 8.707 2.293 7.293 8 1.586 13.707 7.293 12.293 8.707"
      />
    </svg>
  );
}
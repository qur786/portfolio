import type { IconProps } from "./utils";

export function MessageIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g data-name="Layer 2" id="Layer_2">
        <path d="M4,28a.84.84,0,0,1-.38-.08A1,1,0,0,1,3,27V8.78A4.89,4.89,0,0,1,8,4H24a4.89,4.89,0,0,1,5,4.78v9.44A4.89,4.89,0,0,1,24,23H9.41l-4.7,4.71A1,1,0,0,1,4,28ZM8,6A2.9,2.9,0,0,0,5,8.78V24.59l3.29-3.3A1,1,0,0,1,9,21H24a2.9,2.9,0,0,0,3-2.78V8.78A2.9,2.9,0,0,0,24,6Z" />
        <circle cx="16" cy="13.5" r="1.5" />
        <circle cx="21.5" cy="13.5" r="1.5" />
        <circle cx="10.5" cy="13.5" r="1.5" />
      </g>
      <g id="frame">
        <rect fill="none" height="32" width="32" />
      </g>
    </svg>
  );
}

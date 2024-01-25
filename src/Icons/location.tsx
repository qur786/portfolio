export function LocationIcon({
  className,
}: {
  className: string;
}): JSX.Element {
  return (
    <svg
      className={className}
      height="18"
      viewBox="0 0 48 48"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#EA4335"
        d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
      />
    </svg>
  );
}

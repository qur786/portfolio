interface DevIconProps {
  name: string;
  colored?: boolean;
}

export function DevIcon({ name, colored }: DevIconProps): JSX.Element {
  return (
    <i
      className={`${name} ${colored === false ? "" : "colored"} text-8xl flex justify-center rounded-md bg-gray-900 p-2`}
    ></i>
  );
}

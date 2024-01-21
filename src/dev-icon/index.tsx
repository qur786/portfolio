import "./devicon.min.css";

interface DevIconProps {
  name: string;
  colored?: boolean;
}

export function DevIcon({ name, colored = true }: DevIconProps): JSX.Element {
  return (
    <i
      className={`${name} ${colored === false ? "" : "colored"} text-6xl flex justify-center rounded-md bg-gray-900 p-2`}
    ></i>
  );
}

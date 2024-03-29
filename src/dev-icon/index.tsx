import "./devicon.min.css";

interface DevIconProps {
  name: string;
  colored?: boolean;
}

export function DevIcon({ name, colored = true }: DevIconProps): JSX.Element {
  return (
    <i
      className={`${name} ${!colored ? "" : "colored"} hover:scale-150 transition-transform text-6xl flex justify-center rounded-md p-2`}
    ></i>
  );
}

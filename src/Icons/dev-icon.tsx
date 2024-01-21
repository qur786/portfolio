interface DevIconProps {
  name: string;
}

export function DevIcon({ name }: DevIconProps): JSX.Element {
  return (
    <i
      className={`${name} colored text-8xl flex justify-center rounded-md bg-gray-900 p-2`}
    ></i>
  );
}

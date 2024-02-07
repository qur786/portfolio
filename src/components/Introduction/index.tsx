import { Stars } from "../Stars";
import type { MouseEventHandler } from "react";

export interface IntroductionProps {
  onViewWorkClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Introduction({
  onViewWorkClick,
}: IntroductionProps): JSX.Element {
  return (
    <>
      <div className="h-screen w-full absolute top-0 left-0">
        <Stars />
      </div>
      <div className="h-screen relative flex justify-center items-center flex-col gap-6 font-mono">
        <p className="text-5xl text-center">
          Hello, I&apos;m <b className="text-red-600">Qurban</b>
        </p>
        <p className="text-5xl text-center">
          A <b className="text-green-600">MERN</b> stack developer.
        </p>
        <button
          className={`transition-transform text-lg font-roboto hover:scale-110 dark:text-white duration-300 font-bold bg-white shadow-xl md:shadow-2xl dark:bg-black-elevation-1 dark:shadow-black-shadow dark:shadow-inner rounded-md py-4 px-8`}
          onClick={onViewWorkClick}
        >
          View my work &#x2193;
        </button>
      </div>
    </>
  );
}

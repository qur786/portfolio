import type { PropsWithChildren } from "react";

export function Modal({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="h-screen w-full z-20 backdrop-blur-sm fixed flex flex-col items-center justify-center top-0 left-0">
      <div className="bg-[#2C3335] shadow-lg shadow-[#2F363F] rounded-lg">
        {children}
      </div>
    </div>
  );
}

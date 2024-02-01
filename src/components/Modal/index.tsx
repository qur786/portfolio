import { ForwardedRef, forwardRef, PropsWithChildren } from "react";

export const Modal = forwardRef(
  (
    { children }: PropsWithChildren,
    modalRef: ForwardedRef<HTMLDialogElement>
  ): JSX.Element => {
    return (
      <dialog
        ref={modalRef}
        className="bg-[#242124] text-white min-w-[30%] backdrop:backdrop-blur-sm rounded-lg"
      >
        {children}
      </dialog>
    );
  }
);

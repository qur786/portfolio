import { forwardRef } from "react";
import type { ForwardedRef, PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  onClose?: () => void;
}

export const Modal = forwardRef(function ModalComponent(
  { children, onClose }: ModalProps,
  modalRef: ForwardedRef<HTMLDialogElement>,
): JSX.Element {
  return (
    <dialog
      ref={modalRef}
      className="dark:bg-black-elevation dark:text-white dark:shadow-black-shadow shadow-2xl md:min-w-[40%] min-w-[60%] backdrop:backdrop-contrast-[0.25] rounded-lg open:animate-slide-down"
    >
      <button
        className="p-4 absolute top-0 right-0 text-red-600 hover:text-red-800 font-bold"
        onClick={onClose}
      >
        X
      </button>
      {children}
    </dialog>
  );
});

import { ForwardedRef, forwardRef, PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  onClose?: () => void;
}

export const Modal = forwardRef(
  (
    { children, onClose }: ModalProps,
    modalRef: ForwardedRef<HTMLDialogElement>
  ): JSX.Element => {
    return (
      <dialog
        ref={modalRef}
        className="bg-[#242124] text-white min-w-[30%] backdrop:backdrop-blur-sm rounded-lg"
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
  }
);

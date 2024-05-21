import { NavLinks } from "../utils";
import { StyledLink } from "../StyledLink";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

interface SideBarProps {
  onClose?: () => void;
  open?: boolean;
}

export function SideBar({ onClose, open }: SideBarProps): JSX.Element {
  return (
    <>
      <div
        className={twMerge(
          "fixed left-0 top-0 z-20 h-screen w-screen bg-gray-900 opacity-60 md:hidden",
          open ? "" : "hidden",
        )}
        onClick={onClose}
      />
      <div
        className={twMerge(
          "fixed -left-[500px] transition-[left] duration-1000 top-0 z-20 h-screen bg-white dark:bg-[#1E1E1E] px-16 shadow-2xl md:hidden",
          open === true ? "left-0" : "",
        )}
      >
        <nav className="relative top-12 flex h-full flex-col items-center justify-start gap-4">
          <button
            title="Close Menu"
            onClick={onClose}
            className="opacity-75 hover:opacity-100"
          >
            <XMarkIcon className="h-8 text-red-500" />
          </button>
          {Object.entries(NavLinks).map(([title, link]) => (
            <StyledLink href={link} key={title} onClick={onClose}>
              {title}
            </StyledLink>
          ))}
        </nav>
      </div>
    </>
  );
}

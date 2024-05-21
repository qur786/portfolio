import { MoonIcon } from "@heroicons/react/24/outline";
import type { MouseEventHandler } from "react";
import { NavLinks } from "../utils";
import ReactGA from "react-ga4";
import { ResumeIcon } from "../../Icons/resume";
import { SideBar } from "../Sidebar";
import { StyledLink } from "../StyledLink";
import { useState } from "react";
import { useTheme } from "../../hooks/use-theme";
import { Bars3Icon, SunIcon } from "@heroicons/react/24/solid";

export function Header(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleSidebarClose = () => {
    setModalOpen(false);
  };

  const toggleSidebar: MouseEventHandler<HTMLButtonElement> = () => {
    setModalOpen((prev) => !prev);
  };

  const handleResumeClick: MouseEventHandler<HTMLAnchorElement> = () => {
    ReactGA.event({
      category: "Resume",
      action: "open_resume",
    });
  };

  return (
    <>
      <header className="fixed w-full p-4 dark:text-white backdrop-blur-sm shadow-lg flex items-center justify-between z-20">
        <img
          src="/portfolio/profile.ico"
          alt="Logo"
          className="h-12 w-24 object-contain"
          title="Logo"
        />
        <nav className="hidden gap-8 md:flex">
          {Object.entries(NavLinks).map(([title, link]) => (
            <StyledLink href={link} key={title}>
              {title}
            </StyledLink>
          ))}
        </nav>
        <span className="flex flex-row gap-2 items-start">
          <a
            href="/portfolio/Qurban-Ahmad-Latest.pdf"
            onClick={handleResumeClick}
            target="_blank"
          >
            <button title="resume">
              <ResumeIcon className="h-8 fill-[#25CCF7] hover:scale-150 transition-transform" />
            </button>
          </a>
          <button
            onClick={toggleTheme}
            title={
              theme === "dark"
                ? "Toggle to Light Theme"
                : "Toggle to Dark Theme"
            }
          >
            {theme === "dark" ? (
              <SunIcon className="h-8 fill-yellow-400 hover:scale-150 transition-transform" />
            ) : (
              <MoonIcon className="h-8 hover:scale-150 transition-transform" />
            )}
          </button>
          <button
            title="Menu"
            onClick={toggleSidebar}
            className="opacity-50 hover:opacity-100 md:invisible"
          >
            <Bars3Icon className="h-8" />
          </button>
        </span>
      </header>
      <SideBar open={modalOpen} onClose={handleSidebarClose} />
    </>
  );
}

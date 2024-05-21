import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import "./index.css";

export function StyledLink({
  children,
  className,
  href,
  onClick,
  ...props
}: ComponentProps<"a">): JSX.Element {
  // TODO: add logic to update hash of the url
  return (
    <a
      {...props}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        console.log(window.location);
        if (href === "/") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          const id = (href ?? "").split("/#")[1];
          const ele = document.getElementById(id);
          ele?.scrollIntoView({
            behavior: "smooth",
          });
        }
        onClick?.(e);
      }}
      className={`${twMerge(
        typeof className === "string" ? className : "",
        "text-md hover:underline",
      )} ${
        window.location.pathname + window.location.hash === href ? "active" : ""
      }`}
    >
      {children}
    </a>
  );
}

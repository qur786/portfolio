import { GithubIcon } from "../../Icons/github";
import { ServerIcon } from "../../Icons/server";

interface ProjectProps {
  image: string;
  imageAlt?: string;
  title: string;
  deployedLink?: string;
  githubLink: string;
  stacks: string[];
  imageClipPosition?: string;
}

export function Project({
  githubLink,
  title,
  deployedLink,
  image,
  imageAlt,
  stacks,
  imageClipPosition = "0px_25%",
}: ProjectProps): JSX.Element {
  return (
    <div className="max-w-[280px] min-h-[440px] rounded-lg border shadow-xl md:shadow-2xl bg-gray-50 dark:bg-black-elevation-1">
      <img
        className={`w-full h-60 object-cover rounded-tl-lg rounded-tr-lg object-[${imageClipPosition}]`}
        src={image}
        alt={imageAlt}
      />
      <div className="min-h-48 flex flex-col justify-between gap-2">
        <div className="px-2 py-2 font-bold text-xl text-center">{title}</div>
        {stacks.length > 0 ? (
          <div className="flex flex-row justify-start flex-wrap px-2 gap-2">
            {stacks.slice(0, 6).map((stack) => (
              <p
                key={stack}
                className="rounded-xl text-sm bg-sky-500 dark:bg-[#1f1f86] px-2"
              >
                {stack}
              </p>
            ))}
          </div>
        ) : undefined}
        <div className="px-6 flex flex-row justify-between items-center">
          <a
            href={deployedLink}
            title="Live"
            style={{
              cursor:
                typeof deployedLink === "string" ? "pointer" : "not-allowed",
            }}
          >
            <ServerIcon className="h-6 dark:fill-white hover:scale-150 transition-transform fill-black" />
          </a>
          <a href={githubLink} title="Repository">
            <GithubIcon className="h-8 dark:fill-white hover:scale-150 transition-transform fill-black" />
          </a>
        </div>
      </div>
    </div>
  );
}

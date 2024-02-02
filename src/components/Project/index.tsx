import { GithubCircleIcon } from "../../Icons/github-circle";
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
    <div className="max-w-[280px] h-[440px] rounded-lg shadow-2xl bg-gray-50 dark:bg-black-elevation-1">
      <img
        className={`w-full h-60 object-cover rounded-tl-lg rounded-tr-lg object-[${imageClipPosition}]`}
        src={image}
        alt={imageAlt}
      />
      <div className="h-48 flex flex-col justify-between">
        <div className="px-12 py-2 font-bold text-xl text-center">{title}</div>
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
        <div className="px-6 flex flex-row justify-between">
          <a
            href={deployedLink}
            title="Live"
            style={{
              cursor:
                typeof deployedLink === "string" ? "pointer" : "not-allowed",
            }}
          >
            <ServerIcon className="h-6 dark:fill-white fill-black" />
          </a>
          <a href={githubLink} title="Repository">
            <GithubCircleIcon className="h-8 dark:fill-white fill-black" />
          </a>
        </div>
      </div>
    </div>
  );
}

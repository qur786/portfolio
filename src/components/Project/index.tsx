import { GithubCircleIcon } from "../../Icons/github-circle";
import { ServerIcon } from "../../Icons/server";

interface ProjectProps {
  image: string;
  imageAlt?: string;
  title: string;
  deployedLink?: string;
  githubLink: string;
}

export function Project({
  githubLink,
  title,
  deployedLink,
  image,
  imageAlt,
}: ProjectProps): JSX.Element {
  return (
    <div className="max-w-[280px] h-[440px] rounded-lg bg-[#222222] ">
      <img
        className="w-full h-60 object-cover rounded-tl-lg rounded-tr-lg object-[0px_25%] "
        src={image}
        alt={imageAlt}
      />
      <div className="h-10 flex flex-col gap-14">
        <div className="px-6 py-4 font-bold text-xl text-center">{title}</div>
        <div className="px-6 flex flex-row justify-between ">
          <a href={deployedLink} title="Live">
            <ServerIcon />
          </a>
          <a href={githubLink} title="Repository">
            <GithubCircleIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

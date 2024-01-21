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
    <div className="max-w-[280px] h-[440px] rounded overflow-hidden bg-[#222222]">
      <img
        className="w-full h-60 object-cover object-[5px_25%]"
        src={image}
        alt={imageAlt}
      />
      <div className="px-6 py-4 font-bold text-xl">{title}</div>
      <div className="px-6">
        {githubLink}
        {deployedLink}
      </div>
    </div>
  );
}

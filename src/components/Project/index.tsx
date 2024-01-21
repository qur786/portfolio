interface ProjectProps {
  image?: string;
  imageAlt?: string;
  title: string;
  description: string;
  deployedLink?: string;
  githubLink: string;
}

export function Project({
  description,
  githubLink,
  title,
  deployedLink,
  image,
  imageAlt,
}: ProjectProps): JSX.Element {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
      <img className="w-full h-60 object-cover" src={image} alt={imageAlt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {githubLink}
        {deployedLink}
      </div>
    </div>
  );
}

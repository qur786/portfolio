import { Project } from "../Project";

export function Projects(): JSX.Element {
  return (
    <div id="projects" className="h-screen px-4 py-8 ">
      <h2 className="text-3xl text-[#FF020A] font-bold">Projects</h2>
      <div className="grid grid-cols-3 gap-4 py-6">
        <Project title={""} description={""} githubLink={""} />
      </div>
    </div>
  );
}

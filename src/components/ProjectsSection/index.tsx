import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  category: string;
  categoryColor: "cyan" | "violet" | "green";
  tags: string[];
  image: string;
  liveUrl: string;
}

export function ProjectsSection() {
  const projects: ProjectItem[] = [
    {
      title: "Computer Distributor",
      description:
        "A high-conversion digital storefront designed for a hardware wholesaler. The platform features a streamlined product showcase and a professional interface tailored to B2B clients, focusing on intuitive navigation, fast load times, and a mobile-first user experience.",
      category: "LANDING PAGE",
      categoryColor: "cyan",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "/portfolio/images/computer-distributor.png",
      liveUrl: "https://computerdistributor.in/",
    },
    {
      title: "Real Time Multiplayer Pong Game",
      description:
        "A fast-paced, synchronized web application featuring low-latency gameplay between two remote players. The project focuses on solving the challenges of real-time state synchronization and physics consistency, providing a seamless competitive experience directly in the browser with instant room joining and live scoring.",
      category: "INTERACTIVE GAME",
      categoryColor: "violet",
      tags: ["Node.js", "HTML", "CSS", "JavaScript", "Socket.io", "Canvas API"],
      image: "/portfolio/images/pong.png",
      liveUrl: "https://multiroom-pong-game.onrender.com/",
    },
    {
      title: "RhythmiQ - Music Player",
      description:
        "RhythmiQ is a React Native Android app that serves as a music player for locally available songs on a smartphone. It provides a user-friendly interface with features such as a music player and a playlist screen.",
      category: "ANDROID APP",
      categoryColor: "green",
      tags: ["React-Native", "Android", "TypeScript"],
      image: "/portfolio/images/rhythmiq.png",
      liveUrl: "https://github.com/qur786/rhythmiq",
    },
  ];
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 slide-up">
          <div>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <span className="font-mono text-xs text-cyan-400 tracking-widest block mb-2">
              // PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Featured Work
            </h2>
          </div>
          <a
            href="https://github.com/qur786?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-white transition-colors font-mono text-sm mt-4 md:mt-0"
          >
            VIEW GITHUB REPO <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const colors = {
              cyan: {
                bg: "bg-cyan-500/20",
                text: "text-cyan-300",
                border: "border-cyan-500/30",
                hover: "group-hover:text-cyan-400",
                hoverBorder: "hover:border-cyan-400",
              },
              violet: {
                bg: "bg-violet-500/20",
                text: "text-violet-300",
                border: "border-violet-500/30",
                hover: "group-hover:text-violet-400",
                hoverBorder: "hover:border-violet-400",
              },
              green: {
                bg: "bg-green-500/20",
                text: "text-green-300",
                border: "border-green-500/30",
                hover: "group-hover:text-green-400",
                hoverBorder: "hover:border-green-400",
              },
            };
            const color = colors[project.categoryColor];

            return (
              <article
                key={index}
                className="glass-card p-6 rounded-sm group relative overflow-hidden slide-up"
                style={{
                  transitionDelay: `${(index * 100).toString()}ms`,
                }}
              >
                <div className="h-48 bg-zinc-800/50 mb-6 rounded-sm overflow-hidden relative border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span
                      className={`px-2 py-1 ${color.bg} ${color.text} text-[10px] font-mono rounded-sm border ${color.border}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3
                  className={`text-xl font-bold text-white mb-2 ${color.hover} transition-colors`}
                >
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs font-mono rounded-sm0"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-bold text-white border-b border-transparent ${color.hoverBorder} pb-0.5 transition-all`}
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

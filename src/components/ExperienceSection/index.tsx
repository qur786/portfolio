interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      role: "Senior Engineer",
      company: "TechNova Systems",
      period: "2023 — Present",
      description:
        "Leading the migration of legacy monoliths to a microservices architecture using Node.js and Kubernetes. Improved system uptime by 99.9% and reduced server costs by 30%. Mentoring a team of 4 junior developers and establishing code quality standards.",
      tags: ["Node.js", "AWS", "Microservices"],
    },
    {
      role: "Full Stack Dev",
      company: "CreativePulse",
      period: "2021 — 2023",
      description:
        "Developed high-performance e-commerce platforms for enterprise clients. Implemented real-time inventory tracking using WebSockets and optimized frontend load times by 40% through lazy loading and server-side rendering with Next.js.",
      tags: ["React", "Next.js", "PostgreSQL"],
    },
    {
      role: "Junior Developer",
      company: "WebSolutions",
      period: "2020 — 2021",
      description:
        "Collaborated with design teams to translate Figma prototypes into pixel-perfect HTML/CSS. Built responsive landing pages and maintained legacy PHP applications.",
      tags: ["JavaScript", "CSS/SCSS", "PHP"],
    },
  ];
  return (
    <section id="experience" className="py-24 relative z-10 bg-zinc-900/10">
      <div className="container mx-auto px-6">
        <div className="mb-16 slide-up">
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span className="font-mono text-xs text-cyan-400 tracking-widest block mb-2">
            // CAREER_LOG
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Work Experience
          </h2>
        </div>

        <div className="space-y-0 relative border-l border-zinc-800 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-16 md:grid md:grid-cols-12 md:gap-8 md:pl-0 slide-up group"
              style={{
                transitionDelay: `${(index * 100).toString()}ms`,
              }}
            >
              <div className="hidden md:block md:col-span-3 text-right">
                <div className="text-xl font-bold text-white">{exp.role}</div>
                <div className="text-cyan-400 font-mono text-sm mb-2">
                  {exp.company}
                </div>
                <span className="text-zinc-500 font-mono text-xs">
                  {exp.period}
                </span>
              </div>
              <div className="absolute -left-[5px] top-2 md:relative md:left-auto md:top-auto md:col-span-1 md:flex md:justify-center">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${index === 0 ? "bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" : "bg-zinc-600"} group-hover:bg-cyan-500 group-hover:scale-150 transition-all`}
                ></div>
              </div>
              <div className="md:hidden mb-2">
                <div className="text-xl font-bold text-white">{exp.role}</div>
                <div className="text-cyan-400 font-mono text-sm">
                  {exp.company}
                </div>
                <span className="text-zinc-500 font-mono text-xs">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-8">
                <p className="text-zinc-400 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs font-mono rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      role: "Software Development Engineer 2",
      company: "Autodesk India Pvt Ltd",
      period: "Dec 2024 — Present",
      description:
        "Created complete user interfaces for self service cloud orchestration app. Added serverless handlers to orchestrate cloud machines. Added unit test cases and increased test coverage upto 75%.",
      tags: ["Nest.js", "React", "Next.js", "TypeScript", "Azure"],
    },
    {
      role: "Software Engineer - L3",
      company: "Predigle India Pvt Ltd",
      period: "July 2024 — Nov 2024",
      description:
        "Replaced Firebase with Keycloak authentication end to end across projects. Fixed crucial bugs and modularized code enhancing code readability and maintainability of the AI bot rule generation web app.",
      tags: [
        "Django",
        "Angular",
        "Google Cloud",
        "AI",
        "Machine Learning",
        "Python",
      ],
    },
    {
      role: "Software Developer Engineer 1",
      company: "Manufac Analytics Pvt Ltd",
      period: "April 2023 — Sept 2023",
      description:
        "Engineered diverse projects including single and multi-page web applications. Revamped the company’s SaaS product code with AWS and Mantine UI, resulting in a notable 10% boost in the system functionality and a 25% reduction in code management effort. Guided and helped team members enhance coding practices.",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "AWS",
        "Material UI",
        "D3.js",
        "SPA",
      ],
    },
    {
      role: "Front End Developer",
      company: "Manufac Analytics Pvt Ltd",
      period: "July 2021 — March 2023",
      description:
        "Created mobile-responsive components, charts, and forms in React and various libraries such as Formik, D3.js, ECharts, ReactTable, and MUI. Notable innovations include a user activity tracker desktop app, Bluetooth device data reading via Web API, and real-time IoT tracking of devices with AWS IoT, Geofencing, Lambda, and SNS.",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "AWS",
        "Material UI",
        "D3.js",
        "SPA",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Adityapur Auto Cluster",
      period: "Feb 2021 — April 2021",
      description:
        "Analyzed issues and worked on the development of a storage management web app in PHP, delivering an impressive 20% boost in productivity over the previous system.",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "JQuery",
        "PHP",
        "MySQL",
      ],
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
                <span className="text-zinc-300 font-mono text-xs">
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
                <span className="text-zinc-300 font-mono text-xs">
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
                      className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs font-mono rounded-sm"
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

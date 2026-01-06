import { Terminal, Layout, Server } from "lucide-react";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-32 bg-zinc-900/30 relative z-10 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 slide-up">
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <span className="font-mono text-xs text-cyan-400 tracking-widest block mb-2">
              // EXPERTISE
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Technical Ecosystem
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              I specialize in the JavaScript/TypeScript ecosystem, building
              secure, scalable solutions with React.js, Next.js, and Nest.js. I
              architect cloud-native environments using AWS and Azure,
              complemented by a professional background in Angular and Django,
              and a passion for mobile development through Android side
              projects.
            </p>
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-sm">
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="text-zinc-500 w-4 h-4" />
                <span className="text-xs font-mono text-zinc-400">
                  Latest Commit
                </span>
              </div>
              <div className="text-sm font-mono text-green-400">
                &gt; git commit -m &quot;feat: optimize core rendering
                engine&quot;
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Frontend */}
            <div
              className="space-y-6 slide-up"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center text-cyan-400">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Frontend</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "React / Next.js", level: "95%" },
                  { name: "TypeScript", level: "90%" },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500">Advanced</span>
                    </div>
                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-500"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div
              className="space-y-6 slide-up"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center text-violet-400">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Backend & Cloud
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Node.js / Express", level: "92%" },
                  { name: "AWS / Docker", level: "80%" },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500">Advanced</span>
                    </div>
                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-violet-500"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

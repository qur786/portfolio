import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white py-24 relative z-10 border-t border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="slide-up">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Let&apos;s work <br /> together.
            </h2>
            <p className="text-lg text-zinc-500 max-w-md mb-8">
              Available for freelance projects and full-time opportunities.
              Let&apos;s build something scalable.
            </p>
            <a
              href="mailto:ahmad76qurban@gmail.com"
              className="inline-flex items-center gap-3 text-2xl font-bold text-white border-b-2 border-cyan-500 pb-1 hover:text-cyan-400 transition-colors"
            >
              ahmad76qurban@gmail <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          <div
            className="flex flex-col justify-between slide-up"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h5 className="font-mono text-xs tracking-widest text-zinc-600 mb-4 uppercase">
                  Social
                </h5>
                <ul className="space-y-3 text-zinc-400">
                  <li>
                    <a
                      href="https://github.com/qur786"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/qurban-ahmad-qur786/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/fantasticnerd67"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/+916204789892"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Whatsapp
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-mono text-xs tracking-widest text-zinc-600 mb-4 uppercase">
                  Sitemap
                </h5>
                <ul className="space-y-3 text-zinc-400">
                  <li>
                    <a
                      href="#experience"
                      className="hover:text-white transition-colors"
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="hover:text-white transition-colors"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#expertise"
                      className="hover:text-white transition-colors"
                    >
                      Expertise
                    </a>
                  </li>
                  <li>
                    <a
                      href="#hackathons"
                      className="hover:text-white transition-colors"
                    >
                      Hackathons
                    </a>
                  </li>
                  <li>
                    <a
                      href="#academic"
                      className="hover:text-white transition-colors"
                    >
                      Academic
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between items-end text-zinc-600 text-sm">
              <div>© 2026 Qurban Ahmad.</div>
              <div className="flex items-center gap-2">
                <span>Designed in React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

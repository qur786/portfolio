import { Camera, BookOpenText, Clapperboard, Box } from "lucide-react";

export function EducationHobbiesSection() {
  return (
    <section
      id="academic"
      className="py-24 relative z-10 border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="slide-up">
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <span className="font-mono text-xs text-green-400 tracking-widest block mb-4">
              // ACADEMICS
            </span>
            <h3 className="text-3xl font-bold text-white mb-8">Academic</h3>
            <div className="space-y-8">
              <div className="group">
                <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  BS Information Technology
                </h4>
                <p className="text-zinc-400">MRS. KMPM Vocational College</p>
                <span className="text-xs font-mono text-zinc-500">
                  2018 — 2021
                </span>
                <p className="text-sm text-zinc-500 mt-2">
                  Specialization in Software Engineering & Software
                  Architecture. Graduated with Honors.
                </p>
              </div>
            </div>
          </div>

          <div className="slide-up" style={{ transitionDelay: "100ms" }}>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <span className="font-mono text-xs text-orange-400 tracking-widest block mb-4">
              // PERSONAL_INTERESTS
            </span>
            <h3 className="text-3xl font-bold text-white mb-8">Offline Mode</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Camera, title: "Photography", sub: "Nature & People" },
                {
                  icon: BookOpenText,
                  title: "Reading",
                  sub: "Novels, Fiction & Biographies",
                },
                {
                  icon: Clapperboard,
                  title: "Watching",
                  sub: "Movies & Series",
                },
                { icon: Box, title: "3D Modeling", sub: "Cars" },
              ].map((hobby, i) => (
                <div
                  key={i}
                  className="p-4 bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-colors group"
                >
                  <hobby.icon className="text-zinc-500 group-hover:text-orange-400 mb-3" />
                  <h5 className="text-white font-bold">{hobby.title}</h5>
                  <p className="text-xs text-zinc-500">{hobby.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

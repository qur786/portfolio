import { Trophy } from "lucide-react";

interface HackathonItem {
  rank: string;
  rankColor: string;
  title: string;
  description: string;
}

export function HackathonsSection() {
  const hackathons: HackathonItem[] = [
    {
      rank: "1st",
      rankColor: "bg-gradient-to-br from-yellow-400 to-orange-500 text-black",
      title: "Global AI Hackathon 2023",
      description:
        'Developed "MedScan," an AI-powered diagnostic tool using TensorFlow and Python. Awarded Grand Prize out of 500+ teams.',
    },
    {
      rank: "2nd",
      rankColor:
        "bg-gradient-to-br from-blue-400 to-cyan-500 text-black border border-zinc-700",
      title: "FinTech Disrupt 2022",
      description:
        "Built a decentralized lending protocol on Ethereum. Focused on smart contract security and gas optimization.",
    },
  ];
  return (
    <section
      id="hackathons"
      className="py-24 relative z-10 border-t border-white/5 bg-zinc-900/10"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16 slide-up">
          <div>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <span className="font-mono text-xs text-violet-400 tracking-widest block mb-2">
              // COMPETITIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Hackathons
            </h2>
          </div>
          <Trophy className="w-12 h-12 text-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hack, index) => (
            <div
              key={index}
              className="glass-card p-8 flex gap-6 slide-up"
              style={{ transitionDelay: `${(index * 100).toString()}ms` }}
            >
              <div className="flex-shrink-0">
                <div
                  className={`w-16 h-16 ${hack.rankColor} flex items-center justify-center font-bold text-2xl rounded-sm`}
                >
                  {hack.rank}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {hack.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{hack.description}</p>
                <a
                  href="#"
                  className="text-cyan-400 text-xs font-mono uppercase tracking-widest hover:text-white transition-colors"
                >
                  View Submission -&gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

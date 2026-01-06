import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl h-20 transition-all duration-300">
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-xl rounded-sm">
              <span className="font-mono">Q</span>
            </div>
            <div className="leading-tight">
              <div className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                QURBAN AHMAD
              </div>
              <div className="text-[10px] tracking-widest text-zinc-500 font-mono uppercase">
                Full Stack Engineer
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Experience", "Projects", "Skills", "Hackathons"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="/portfolio/resume.pdf" target="_blank">
              <button className="bg-white/10 hover:bg-white text-white hover:text-black px-5 py-2 rounded-sm text-xs font-bold tracking-wide transition-all border border-white/20">
                Resume
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={toggleMenu}
          >
            <Menu />
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-300 flex flex-col justify-center items-center space-y-8 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-6 right-6 text-zinc-400 hover:text-white"
          onClick={toggleMenu}
        >
          <X className="w-8 h-8" />
        </button>
        {["Experience", "Projects", "Skills", "Hackathons", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-3xl font-bold hover:text-cyan-400"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ),
        )}
      </div>
    </>
  );
}

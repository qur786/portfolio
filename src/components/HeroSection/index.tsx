import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import { WhatsappIcon } from "../../Icons/whatsapp";

export function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8 slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-mono text-cyan-300 tracking-wide">
              OPEN FOR COLLABORATION
            </span>
          </div>

          <h1 className="display-font text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
              Digital Backbone.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Senior Software Developer transforming complex requirements into
            scalable, high-performance web applications. Expert in React,
            Node.js, and Cloud Infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black font-bold text-sm overflow-hidden rounded-sm transition-transform hover:scale-105"
            >
              <span className="relative z-10">View Selected Works</span>
              <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ease-out z-0"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-zinc-700 text-white font-bold text-sm hover:bg-zinc-800 transition-all rounded-sm"
            >
              Start a Project
            </a>
          </div>

          {/* Social Media Handles */}
          <div className="flex items-center gap-6 text-zinc-400">
            <a
              href="https://github.com/qur786"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors transform hover:-translate-y-1 duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/qurban-ahmad-qur786/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors transform hover:-translate-y-1 duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/fantasticnerd67"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors transform hover:-translate-y-1 duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/+916204789892"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors transform hover:-translate-y-1 duration-300"
            >
              <WhatsappIcon className="w-6 h-6 fill-[currentColor]" />
            </a>
            <a
              href="mailto:ahmad76qurban@gmail.com"
              className="hover:text-cyan-400 transition-colors transform hover:-translate-y-1 duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-500">
        <ArrowDown className="w-6 h-6" />
      </div>
    </header>
  );
}

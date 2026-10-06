import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const techStack = [
    { name: 'HTML5', color: 'from-orange-500 to-amber-600', label: 'HTML' },
    { name: 'CSS3', color: 'from-blue-500 to-cyan-500', label: 'CSS' },
    { name: 'JavaScript', color: 'from-yellow-400 to-amber-500', label: 'JS' },
    { name: 'GSAP', color: 'from-green-500 to-emerald-600', label: 'GSAP' },
    { name: 'React', color: 'from-cyan-400 to-blue-500', label: 'React' },
    { name: 'Tailwind', color: 'from-sky-400 to-teal-500', label: 'Tailwind' },
  ];

  return (
    <footer id="contact" className="relative w-full bg-[#030508] border-t border-white/10 py-16 px-6 md:px-12 text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Footer Banner: Tech Stack Badges & Deployment Links */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Tech Stack Indicator */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Tech Stack Used (For this assignment)
              </span>
              <span className="text-sky-400 text-sm">→</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0f1d] border border-white/10 text-xs font-medium text-slate-200"
                >
                  <span
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color} shadow-sm`}
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Links as required */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://paraschaturvedi.github.io/car-scroll-animation"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-sky-950/40 hover:bg-sky-900/50 border border-sky-600/30 text-sky-300 hover:text-white transition-all text-xs font-medium"
            >
              <Globe className="w-4 h-4 text-sky-400" />
              <span>Reference Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/saivenkatgumpena/Itzfizz"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all text-xs font-medium"
            >
              <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300 tracking-wider">ITZ FIZZ</span>
            <span>•</span>
            <span>Frontend Scroll-Driven Animation Assignment</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Vanilla Web Interactions + GSAP ScrollTrigger</span>
            <span className="hidden sm:inline">•</span>
            <span>Designed for High Precision & 60 FPS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

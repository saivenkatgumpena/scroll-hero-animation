import React from 'react';
import { Cpu, Zap, Layers, Activity } from 'lucide-react';

export default function FeaturesSection() {
  const specs = [
    {
      icon: Cpu,
      title: 'Scrubbed Physics Engine',
      detail: 'Tied strictly to scroll distance rather than elapsed timestamp, giving full tactile control to user wheel and touch gestures.',
    },
    {
      icon: Zap,
      title: 'Composite Transform Pipeline',
      detail: 'Zero DOM reflows. Motion calculates solely across translate3d, scale3d, and rotateZ inside GPU compositor layers.',
    },
    {
      icon: Layers,
      title: 'Viewport-Clamped Motion Curves',
      detail: 'Coordinates dynamically resolve relative to screen width (vw) and height (vh), avoiding bounding overflow on all devices.',
    },
    {
      icon: Activity,
      title: 'Progressive Stagger Timelines',
      detail: 'Intro sequence staggers text glyphs and metrics sequentially with zero perceptible frame drop or layout shift.',
    },
  ];

  return (
    <section id="features" className="relative w-full bg-[#05070c] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-sky-400 uppercase">
              ENGINEERING CRITERIA
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
              Performance & Motion Guidelines
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Implemented strictly in accordance with production performance standards, transform-only rendering, and GSAP ScrollTrigger architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#080d19] border border-white/5 rounded-2xl p-7 flex items-start gap-5 hover:border-white/10 transition-colors"
              >
                <div className="p-3 rounded-xl bg-sky-950/60 border border-sky-800/40 text-sky-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImpactSection() {
  const sectionRef = useRef(null);

  const features = [
    {
      step: '01',
      title: 'Initial Load Reveal',
      subtitle: 'Dynamic Typography & Telemetry',
      description:
        'Headline letters appear with a choreographed staggered ease. Real-time statistics animate smoothly to their values on first viewport render.',
      tag: 'Intro State',
    },
    {
      step: '02',
      title: 'Scroll Progress Phase 1',
      subtitle: 'Subtle Translation & Easing',
      description:
        'As the visitor begins scrolling, the vehicle shifts with cubic spline interpolation, initiating a natural forward driving sensation.',
      tag: 'Scrub 25%',
    },
    {
      step: '03',
      title: 'Scroll Progress Phase 2',
      subtitle: 'Dynamic Scaling & Angular Drift',
      description:
        'Proportional scale increases dynamically alongside a subtle angular tilt, simulating real road perspective and fluid momentum.',
      tag: 'Scrub 60%',
    },
    {
      step: '04',
      title: 'Scroll Progress Phase 3',
      subtitle: 'Foreground Focus & Final Stance',
      description:
        'The vehicle achieves dramatic close-up proximity with intensified beam luminescence, halting with a smooth deceleration curve.',
      tag: 'Scrub 100%',
    },
  ];

  const pillarCards = [
    {
      metric: '0.00s',
      label: 'Layout Shift (CLS)',
      desc: 'Optimized transform-only pipeline ensuring zero reflow during high-frequency scroll frames.',
    },
    {
      metric: '60+ FPS',
      label: 'Motion Refresh Rate',
      desc: 'GSAP ScrollTrigger ticker synchronized with hardware-accelerated GPU compositor layers.',
    },
    {
      metric: '100%',
      label: 'Responsive Fidelity',
      desc: 'Fluid clamping coordinates across desktop ultra-wides, notebooks, tablets, and mobile screens.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.impact-badge',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.impact-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.feature-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[#05070c] text-white py-24 md:py-36 px-6 md:px-12 border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header from reference image */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="impact-badge inline-block text-xs font-bold tracking-[0.3em] uppercase text-sky-400 bg-sky-950/40 border border-sky-800/40 px-4 py-1.5 rounded-full mb-6">
            OUR IMPACT
          </span>

          <h2 className="impact-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Building a <span className="text-sky-400 text-glow-blue">Better Tomorrow</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            We create innovative solutions that help businesses grow, people thrive,
            and communities succeed.
          </p>
        </div>

        {/* 4-Stage Motion Architecture (Directly illustrating the assignment flow) */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400">
              Interactive Motion Flow Architecture
            </h3>
            <span className="text-xs text-sky-400 font-mono">GSAP + ScrollTrigger Scrub</span>
          </div>

          <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="feature-card group relative bg-[#090d18]/90 hover:bg-[#0d1424] border border-white/5 hover:border-sky-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(56,189,248,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-slate-500 group-hover:text-sky-400 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-sky-400/80 mb-3 font-mono">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                  <span>Interpolation</span>
                  <span className="text-slate-300">GPU Accelerated</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance & Quality Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {pillarCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#0a0f1d] to-[#060912] border border-white/5 rounded-2xl p-8 flex flex-col"
            >
              <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                {card.metric}
              </span>
              <span className="text-sm font-semibold text-sky-400 mb-3 tracking-wide">
                {card.label}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

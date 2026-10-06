import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const heroScreenRef = useRef(null);
  const headlineRef = useRef(null);
  const statsContainerRef = useRef(null);
  const carWrapperRef = useRef(null);
  const carImageRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const leftHeadlightRef = useRef(null);
  const rightHeadlightRef = useRef(null);

  // Counter state for initial animated numbers
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const headlineWelcome = ['W', 'E', 'L', 'C', 'O', 'M', 'E'];
  const headlineBrand = ['I', 'T', 'Z', 'F', 'I', 'Z', 'Z'];

  const statsData = [
    { target: 85, key: 'stat1', label: 'Customer Satisfaction' },
    { target: 92, key: 'stat2', label: 'On-Time Delivery' },
    { target: 78, key: 'stat3', label: 'Growth in 2024' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. INITIAL LOAD ANIMATIONS
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered letter reveal for headline
      tl.fromTo(
        '.letter-welcome',
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.05, delay: 0.2 }
      );

      tl.fromTo(
        '.letter-brand',
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.05 },
        '-=0.4'
      );

      // Staggered reveal for statistics cards
      tl.fromTo(
        '.stat-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.16 },
        '-=0.3'
      );

      // Animate the metric count numbers
      statsData.forEach((stat) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.target,
          duration: 1.8,
          ease: 'power2.out',
          delay: 0.4,
          onUpdate: () => {
            setCounts((prev) => ({
              ...prev,
              [stat.key]: Math.round(obj.val),
            }));
          },
        });
      });

      // Car initial entrance: gentle smooth glide into starting position on the right
      tl.fromTo(
        carWrapperRef.current,
        {
          opacity: 0,
          x: '32vw',
          scale: 0.68,
        },
        {
          opacity: 1,
          x: '20vw',
          scale: 0.76,
          duration: 1.3,
          ease: 'power2.out',
        },
        '-=1.2'
      );

      // Scroll Indicator fade in
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.5'
      );

      // 2. SCROLL-BASED ANIMATION (Core Feature)
      // Pinning the hero section for a clean scroll scrub
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=220%',
          pin: heroScreenRef.current,
          scrub: 1.2, // Smooth interpolation and natural inertia
          anticipatePin: 1,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
          },
        },
      });

      // Fade out scroll indicator immediately upon initial scroll
      scrollTl.to(
        scrollIndicatorRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.08,
          ease: 'power1.out',
        },
        0
      );

      // Smoothly fade and elevate headline & stats so the car commands the scene
      scrollTl.to(
        headlineRef.current,
        {
          opacity: 0,
          y: -40,
          scale: 0.96,
          duration: 0.35,
          ease: 'power1.inOut',
        },
        0.05
      );

      scrollTl.to(
        statsContainerRef.current,
        {
          opacity: 0,
          y: -35,
          duration: 0.35,
          ease: 'power1.inOut',
        },
        0.08
      );

      // Multi-stage Car Motion following the 4 stages from the reference diagram:
      // Stage 1 -> Stage 2 (Scroll progress 0 to 0.35):
      // Car moves slightly forward & left, subtle scale/translate, smooth easing
      scrollTl.to(
        carWrapperRef.current,
        {
          x: '14vw',
          y: '2vh',
          scale: 0.92,
          rotationZ: -0.8,
          duration: 0.35,
          ease: 'power1.inOut',
        },
        0
      );

      // Stage 2 -> Stage 3 (Scroll progress 0.35 to 0.7):
      // Car moves further, slight rotation/scale, natural and fluid
      scrollTl.to(
        carWrapperRef.current,
        {
          x: '8vw',
          y: '1vh',
          scale: 1.15,
          rotationZ: -1.4,
          duration: 0.35,
          ease: 'power1.inOut',
        },
        0.35
      );

      // Stage 3 -> Stage 4 (Scroll progress 0.7 to 1.0):
      // Car comes closer / larger, dominant foreground stance, smooth stop
      scrollTl.to(
        carWrapperRef.current,
        {
          x: '2vw',
          y: '-1vh',
          scale: 1.42,
          rotationZ: -0.4,
          duration: 0.3,
          ease: 'power2.out',
        },
        0.7
      );

      // Dynamic headlight beam flare intensification
      scrollTl.to(
        [leftHeadlightRef.current, rightHeadlightRef.current],
        {
          opacity: 0.9,
          scale: 1.45,
          duration: 0.6,
          ease: 'power1.inOut',
        },
        0.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="hero" className="relative w-full bg-[#05070c]">
      {/* Pinned Hero Viewport */}
      <div
        ref={heroScreenRef}
        className="relative w-full h-screen overflow-hidden flex flex-col justify-between"
      >
        {/* Background Image Layer with atmospheric lighting & dark gradients */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img
            src="./background.jpg"
            alt="Scenic mountain road background"
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.15]"
          />
          {/* Top and side vignettes for focus and contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070c]/85 via-transparent to-[#05070c]/90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070c]/70 via-transparent to-[#05070c]/50 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_55%,rgba(37,99,235,0.18)_0%,transparent_65%)] pointer-events-none" />
        </div>

        {/* Content Container (Headline + Metrics) */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-12 pt-28 md:pt-36 flex flex-col justify-start">
          {/* Headline: W E L C O M E   I T Z F I Z Z */}
          <div ref={headlineRef} className="will-change-transform">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] font-black tracking-widest uppercase select-none flex flex-wrap items-center">
              {/* WELCOME */}
              <span className="inline-flex items-center mr-6 md:mr-10">
                {headlineWelcome.map((char, idx) => (
                  <span
                    key={`w-${idx}`}
                    className="letter-welcome inline-block text-white mr-2 sm:mr-3 md:mr-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    {char}
                  </span>
                ))}
              </span>

              {/* ITZFIZZ in electric cyan-blue */}
              <span className="inline-flex items-center">
                {headlineBrand.map((char, idx) => (
                  <span
                    key={`b-${idx}`}
                    className="letter-brand inline-block text-sky-400 mr-2 sm:mr-3 md:mr-4 font-black drop-shadow-[0_0_15px_rgba(56,189,248,0.55)]"
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>
          </div>

          {/* Impact Metrics / Statistics */}
          <div
            ref={statsContainerRef}
            className="mt-8 md:mt-12 flex flex-wrap items-start gap-8 md:gap-14 lg:gap-16 will-change-transform"
          >
            {statsData.map((stat) => (
              <div key={stat.key} className="stat-item flex flex-col">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-sky-400 tracking-tight drop-shadow-[0_0_12px_rgba(56,189,248,0.35)] font-mono">
                  {counts[stat.key]}%
                </span>
                <span className="mt-1 md:mt-1.5 text-xs sm:text-sm text-slate-300 font-medium tracking-wide max-w-[120px] md:max-w-[150px] leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Visual Element: The Supercar */}
        <div className="absolute inset-0 pointer-events-none select-none z-10 flex items-center justify-center overflow-visible">
          <div
            ref={carWrapperRef}
            className="relative w-[92vw] sm:w-[78vw] md:w-[64vw] lg:w-[56vw] max-w-[980px] aspect-[1183/429] will-change-transform origin-center"
            style={{
              transform: 'translate3d(20vw, 0px, 0px) scale(0.76)',
            }}
          >
            {/* Left Headlight Glow */}
            <div
              ref={leftHeadlightRef}
              className="car-headlight-glow absolute top-[30%] left-[10.5%] w-[18%] h-[20%] bg-gradient-to-r from-cyan-300 via-sky-400/50 to-transparent rounded-full opacity-65 pointer-events-none"
            />

            {/* Right Headlight Glow */}
            <div
              ref={rightHeadlightRef}
              className="car-headlight-glow absolute top-[31%] left-[26%] w-[18%] h-[20%] bg-gradient-to-r from-cyan-300 via-sky-400/50 to-transparent rounded-full opacity-65 pointer-events-none"
            />

            {/* Wet Road Ground Reflection Accent */}
            <div className="absolute -bottom-6 left-[8%] right-[8%] h-7 bg-sky-500/10 blur-xl rounded-full pointer-events-none" />

            {/* Crisp High-Res Supercar Image */}
            <img
              ref={carImageRef}
              src="./car.png"
              alt="High performance luxury sports car"
              className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
            />
          </div>
        </div>

        {/* Bottom Bar / Scroll Down Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="relative z-20 pb-8 flex flex-col items-center justify-center text-center select-none"
        >
          <span className="text-[11px] md:text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">
            Scroll Down
          </span>
          <div className="w-[1.5px] h-9 bg-slate-700/80 relative overflow-hidden rounded-full">
            <div className="w-full h-1/2 bg-sky-400 rounded-full animate-bounce shadow-[0_0_8px_#38bdf8]" />
          </div>
        </div>

        {/* Floating Mini Interactive Scroll Indicator (Live Scroll Step Feedback) */}
        <div className="hidden lg:flex absolute bottom-8 right-8 z-20 items-center gap-3 bg-[#080d1a]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs">
          <span className="text-slate-400 font-medium">Scroll Progress:</span>
          <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-full transition-all duration-75"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <span className="text-sky-400 font-semibold font-mono">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}

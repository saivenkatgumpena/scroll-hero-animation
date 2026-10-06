# ITZ FIZZ — Scroll-Driven Hero Section Animation

A high-performance, smooth, scroll-driven interactive hero section animation recreated with **React**, **Vite**, **Tailwind CSS**, and **GSAP ScrollTrigger**, inspired by luxury automotive digital showcases.

---

## 🚀 Live Demo & Repository
- **Live Webpage:** [https://saivenkatgumpena.github.io/scroll-hero-animation/](https://saivenkatgumpena.github.io/scroll-hero-animation/)
- **GitHub Repository:** [https://github.com/saivenkatgumpena/scroll-hero-animation](https://github.com/saivenkatgumpena/scroll-hero-animation)
- **Reference Demo:** [https://paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation)

---

## 🛠️ Tech Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (custom dark theme palette & typography)
- **Animation & Motion:** GSAP 3 + ScrollTrigger Plugin
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (`gh-pages`)

---

## 🎯 Architecture & Motion Flow

### 1. Initial Load Animation
- **Choreographed Letter Reveal:** The letter-spaced headline `W E L C O M E   I T Z F I Z Z` animates smoothly with a staggered fade and vertical translate (`y: 30 -> 0`, `stagger: 0.05s`, `ease: power3.out`).
- **Telemetry Counter:** Impact metrics (`85% Customer Satisfaction`, `92% On-Time Delivery`, `78% Growth in 2024`) animate with subtle staggered entry delays and smooth counter interpolation from 0 to target values.
- **Atmospheric Entrance:** The vehicle and headlight glow glide into their initial resting stance on the right side of the mountain highway.

### 2. Scroll-Driven 4-Stage Motion Pipeline
The hero section is pinned using GSAP ScrollTrigger with a scrub factor of `1.2`, providing natural inertia and fluid bidirectional scrubbing:

1. **Stage 1 (Initial State):** Vehicle positioned on the right half at medium distance (`scale: 0.76`, `x: 20vw`), headlights glowing on wet asphalt, headline & metrics fully visible on the left.
2. **Stage 2 (Scroll Progress ~30%):** Vehicle shifts forward and begins easing toward the center (`scale: 0.92`, `x: 14vw`, `rotationZ: -0.8deg`), headline & metrics gently fade.
3. **Stage 3 (Scroll Progress ~65%):** Natural angular drift and scale expansion (`scale: 1.15`, `x: 8vw`, `rotationZ: -1.4deg`) simulating fluid road momentum.
4. **Stage 4 (Scroll Progress 100%):** Vehicle achieves dominant foreground perspective (`scale: 1.42`, `x: 2vw`, `rotationZ: -0.4deg`) with intensified headlight beam glow before smoothly unpinning into the **"OUR IMPACT"** section.

---

## ⚡ Performance Optimizations
- **Composite-Only Transforms:** All scroll interpolations operate strictly on `translate3d`, `scale`, and `rotateZ`, eliminating layout reflows and repaints.
- **Hardware Acceleration:** Elements marked with `will-change: transform` promote layers to the GPU compositor.
- **Clamped Viewport Metrics:** Coordinates dynamically resolve with `vw` and `vh` constraints, guaranteeing responsive fidelity across mobile, tablet, laptop, and ultra-wide displays.

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/saivenkatgumpena/Itzfizz.git

# Navigate into project directory
cd Itzfizz

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

---

## 📄 License
MIT License. Created for the ITZ FIZZ Frontend Animation Assessment.

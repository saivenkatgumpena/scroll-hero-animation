import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImpactSection from './components/ImpactSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-sky-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      <main>
        {/* Core Scroll-Driven Hero Section */}
        <HeroSection />

        {/* Our Impact Section */}
        <ImpactSection />

        {/* Performance & Motion Features */}
        <FeaturesSection />
      </main>

      {/* Footer & Submission Badges */}
      <Footer />
    </div>
  );
}

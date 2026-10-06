import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Features', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070c]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-black tracking-widest text-white transition-colors duration-300 group-hover:text-sky-400">
            ITZ FIZZ
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveTab(link)}
              className={`text-sm font-medium tracking-wide transition-all duration-200 relative py-1 ${
                activeTab === link
                  ? 'text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link}
              {activeTab === link && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 rounded-full shadow-[0_0_8px_#38bdf8]"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => {
                setActiveTab(link);
                setMobileMenuOpen(false);
              }}
              className={`text-sm font-medium transition-colors ${
                activeTab === link ? 'text-sky-400 font-semibold' : 'text-slate-300'
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

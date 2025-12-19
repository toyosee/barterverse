import React, { useState, useEffect } from 'react';
import { Orbit, Menu, Rocket, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler for landing sections
  const handleSectionClick = (id: string) => {
    if (location.pathname !== '/') {
      // If not on landing page, go home first
      navigate('/');
      // Delay scroll until after navigation
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setHomeDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-slate-950/60 backdrop-blur-2xl border-b border-white/5 shadow-2xl'
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => navigate('/')}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-11 h-11 bg-slate-950 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all">
                <Orbit className="w-6 h-6 text-cyan-400 animate-spin-slow" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-[0.3em] text-white font-grotesk uppercase leading-none">
                BARTERVERSE
              </span>
              <span className="text-[8px] font-black tracking-[0.5em] text-cyan-500 uppercase mt-1">
                A Universe of Exchange
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {/* Home dropdown */}
            <div className="relative">
              <button
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                className="flex items-center gap-1 text-[10px] font-black text-slate-500 hover:text-white transition-all uppercase tracking-[0.3em]"
              >
                Home <ChevronDown className="w-3 h-3" />
              </button>
              {homeDropdownOpen && (
                <div className="absolute mt-2 bg-slate-900 border border-white/10 rounded-xl shadow-lg p-4 space-y-3">
                  {['vision', 'people', 'sectors', 'barter-engine'].map((id) => (
                    <button
                      key={id}
                      onClick={() => handleSectionClick(id)}
                      className="block text-[10px] font-black text-slate-400 hover:text-cyan-400 uppercase tracking-[0.3em]"
                    >
                      {id.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Other pages */}
            <Link
              to="/about"
              className="text-[10px] font-black text-slate-500 hover:text-white transition-all uppercase tracking-[0.3em]"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-[10px] font-black text-slate-500 hover:text-white transition-all uppercase tracking-[0.3em]"
            >
              Contact
            </Link>

            <Link to="/login" className="text-[10px] font-black text-slate-500 hover:text-white transition-all uppercase tracking-[0.3em]">
              Login
            </Link>
            <Link to="/signup" className="text-[10px] font-black text-slate-500 hover:text-white transition-all uppercase tracking-[0.3em]">
              Sign Up
            </Link>

            {/* Initialize Button Link to signup page */}
            <Link to="/signup" className="flex items-center gap-3 bg-white text-slate-950 px-8 py-3 rounded-xl font-black text-[10px] tracking-[0.2em] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all active:scale-95 uppercase">
              <Rocket className="w-4 h-4" />
              Initialize
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-10 flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
          {/* Home + sections */}
          <div className="space-y-4 w-full">
            <button
              onClick={() => {
                navigate('/');
                setMobileMenuOpen(false);
              }}
              className="w-full text-xs font-black text-slate-400 hover:text-white transition-all uppercase tracking-[0.3em]"
            >
              Home
            </button>
            {['vision', 'people', 'sectors', 'barter-engine'].map((id) => (
              <button
                key={id}
                onClick={() => handleSectionClick(id)}
                className="w-full text-xs font-black text-slate-400 hover:text-cyan-400 uppercase tracking-[0.3em]"
              >
                {id.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Other pages */}
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center text-xs font-black text-slate-400 hover:text-white transition-all uppercase tracking-[0.3em]"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center text-xs font-black text-slate-400 hover:text-white transition-all uppercase tracking-[0.3em]"
          >
            Contact
          </Link>

          {/* Auth links */}
          <Link
            to="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center text-xs font-black text-slate-400 hover:text-white transition-all uppercase tracking-[0.3em]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center text-xs font-black text-slate-400 hover:text-white transition-all uppercase tracking-[0.3em]"
          >
            Sign Up
          </Link>

          {/* Initialize CTA */}
          <Link
            to="/signup"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-black text-[10px] tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all active:scale-95"
          >
            <Rocket className="w-4 h-4" />
            Initialize
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Home',       to: '/'           },
  { label: 'About',      to: '/about'      },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects',   to: '/projects'   },
  { label: 'Contact',    to: '/contact'    },
];

const Navbar = () => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname }            = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/40' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#f72585] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-200">
              AD
            </span>
            <span className="font-bold text-white text-lg tracking-tight">
              Aashlesh<span className="grad-text"> Dhumane</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`nav-link ${pathname === to ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hire me CTA */}
          <a
            href="mailto:ashleshdhumane@gmail.com"
            className="hidden md:block btn-glow text-sm"
          >
            <span>Hire Me</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            className={`text-2xl font-semibold transition-colors duration-200 ${
              pathname === to ? 'text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {label}
          </Link>
        ))}
        <a href="mailto:ashleshdhumane@gmail.com" className="btn-glow mt-4">
          <span>Hire Me</span>
        </a>
      </div>
    </>
  );
};

export default Navbar;

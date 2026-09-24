import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiDownload, FiArrowDown } from 'react-icons/fi';
import { fullName, bio, resumeURL, socialLinks } from '../constants';

const ROLES = [
  'Software Developer',
  'Backend Engineer',
  'Automation Enthusiast',
  'Python Specialist',
  'Problem Solver',
];

const Particles = () => {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: 4 + Math.random() * 12,
    left: Math.random() * 100,
    delay: Math.random() * 18,
    duration: 14 + Math.random() * 16,
    hue: [108, 247, 76][i % 3],
    sat: [99, 37, 201][i % 3],
    light: [255, 133, 240][i % 3],
  }));
  return (
    <div className="particles" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            background: `hsl(${p.hue},${p.sat}%,${p.light > 200 ? 70 : 60}%)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting]   = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (!deleting) {
      if (displayed.length < current.length) {
        timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout.current = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setRoleIndex(i => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="relative min-h-screen bg-mesh flex flex-col overflow-hidden">
      <Particles />

      {/* Glow orbs */}
      <div className="orb w-[600px] h-[600px] -top-48 -left-48 bg-purple-600/20" aria-hidden="true" />
      <div className="orb w-[500px] h-[500px] -bottom-32 -right-32 bg-cyan-500/15" aria-hidden="true" />
      <div className="orb w-[300px] h-[300px] top-1/3 left-1/2 -translate-x-1/2 bg-pink-500/10" aria-hidden="true" />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
        {/* Badge */}
        <div className="fade-in-up mb-6" style={{ animationDelay: '0.1s' }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/30 text-sm font-medium text-purple-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="fade-in-up text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight mb-4"
          style={{ animationDelay: '0.2s' }}
        >
          Hi, I'm{' '}
          <span className="grad-text">{fullName.split(' ')[0]}</span>
          <br />
          <span className="text-white">{fullName.split(' ')[1]}</span>
        </h1>

        {/* Typewriter role */}
        <div
          className="fade-in-up text-xl sm:text-2xl font-semibold mb-5 h-9 flex items-center justify-center gap-1"
          style={{ animationDelay: '0.35s' }}
        >
          <span className="grad-text-blue font-code">{displayed}</span>
          <span className="cursor" />
        </div>

        {/* Tagline */}
        <p
          className="fade-in-up max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed mb-10"
          style={{ animationDelay: '0.5s' }}
        >
          {bio.split('\n')[0]}
        </p>

        {/* CTA buttons */}
        <div
          className="fade-in-up flex flex-wrap items-center justify-center gap-4 mb-14"
          style={{ animationDelay: '0.65s' }}
        >
          <Link to="/projects">
            <button className="btn-glow text-base px-7 py-3">
              <span>View Projects</span>
            </button>
          </Link>
          <a href={resumeURL} target="_blank" rel="noopener noreferrer">
            <button className="btn-outline flex items-center gap-2 px-7 py-3">
              <FiDownload className="text-sm" /> Resume
            </button>
          </a>
        </div>

        {/* Social links */}
        <div
          className="fade-in flex items-center gap-6 mb-16"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-1 text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <div className="w-px h-5 bg-slate-700" />
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-all duration-200 hover:-translate-y-1 text-2xl"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>
        </div>

        {/* Scroll hint */}
        <div className="fade-in flex flex-col items-center gap-2 text-slate-600 text-xs" style={{ animationDelay: '1s' }}>
          <span>Scroll to explore</span>
          <FiArrowDown className="animate-bounce text-lg text-purple-500" />
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-3 gap-6 text-center">
          {[
            { value: '5+', label: 'Projects shipped' },
            { value: '4+', label: 'Years coding'     },
            { value: '3+', label: 'Tech stacks'      },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-black grad-text">{value}</span>
              <span className="text-slate-500 text-xs uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

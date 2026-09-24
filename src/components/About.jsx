import React from 'react';
import { services, skills, resumeURL, socialLinks } from '../constants';
import { FiDownload, FiExternalLink } from 'react-icons/fi';
import Footer from './Footer';

const ServiceCard = ({ title, icon, index }) => (
  <div
    className="glass glass-hover rounded-2xl p-6 flex flex-col items-center text-center gap-4"
    style={{ animationDelay: `${0.1 * index}s` }}
  >
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/30 to-cyan-500/20 border border-purple-500/20 flex items-center justify-center p-2.5">
      <img src={icon} alt={title} className="w-full h-full object-contain" />
    </div>
    <h3 className="text-white font-semibold text-sm leading-snug">{title}</h3>
  </div>
);

const SkillBar = ({ name, level, index }) => (
  <div className="fade-in-up" style={{ animationDelay: `${0.06 * index}s` }}>
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm text-slate-300 font-medium">{name}</span>
      <span className="text-xs text-slate-500 font-code">{level}%</span>
    </div>
    <div className="skill-bar-track">
      <div className="skill-bar-fill" style={{ animationDelay: `${0.15 + 0.06 * index}s` }} />
    </div>
  </div>
);

const About = () => (
  <div className="relative bg-mesh min-h-screen pt-24">
    {/* Glow orb */}
    <div className="orb w-96 h-96 top-0 right-0 bg-purple-600/10 -z-10" aria-hidden="true" />

    <div className="max-w-6xl mx-auto px-6 pb-20">
      {/* Header */}
      <div className="fade-in-up mb-14">
        <p className="section-tag mb-3">Who I am</p>
        <h2 className="section-title mb-6">
          About <span className="grad-text">Me</span>
        </h2>
      </div>

      {/* Bio + resume */}
      <div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
        <div className="fade-in-up">
          <p className="text-slate-300 leading-relaxed text-base mb-4">
            👋 Hi! I'm <span className="text-white font-semibold">Aashlesh Dhumane</span>, a Computer
            Science graduate with a passion for crafting robust, scalable backend systems.
          </p>
          <p className="text-slate-400 leading-relaxed text-base mb-4">
            I specialise in both <span className="text-purple-400 font-medium">software development</span> and{' '}
            <span className="text-cyan-400 font-medium">automation</span>, bringing a smart, pragmatic engineering
            mindset to every challenge. Whether it's designing API systems, automating workflows, or solving complex
            algorithmic problems — I love building things that <em>work</em>.
          </p>
          <p className="text-slate-400 leading-relaxed text-base mb-8">
            Actively looking for opportunities in an exciting tech environment where I can contribute, learn,
            and grow alongside a passionate team.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={resumeURL} target="_blank" rel="noopener noreferrer">
              <button className="btn-glow flex items-center gap-2">
                <span className="flex items-center gap-2"><FiDownload /> View Resume</span>
              </button>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <button className="btn-outline flex items-center gap-2">
                LinkedIn <FiExternalLink className="text-sm" />
              </button>
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="glass rounded-2xl p-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-white font-bold text-lg mb-6">Skills & Proficiency</h3>
          <div className="flex flex-col gap-5">
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div>
        <p className="section-tag mb-3">What I do</p>
        <h3 className="text-2xl font-bold text-white mb-8">Core Competencies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default About;

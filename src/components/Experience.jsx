import React from 'react';
import { experiences } from '../constants';
import Footer from './Footer';

const ExperienceCard = ({ role, company, duration, logo, url, points, index }) => (
  <div
    className="relative pl-10 fade-in-up"
    style={{ animationDelay: `${0.15 * index}s` }}
  >
    {/* Dot */}
    <div className="timeline-dot absolute left-0 top-1.5" />

    <div className="glass glass-hover rounded-2xl p-7 ml-4">
      <div className="flex items-start gap-4 mb-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 hover:border-purple-500/40 transition-colors"
        >
          <img src={logo} alt={company} className="w-full h-full object-contain" />
        </a>
        <div>
          <h3 className="text-white font-bold text-lg leading-tight">{role}</h3>
          <p className="text-purple-400 font-medium text-sm mt-0.5">{company}</p>
          <span className="inline-block mt-1.5 text-xs font-code text-slate-500 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/8">
            {duration}
          </span>
        </div>
      </div>
      <ul className="space-y-2.5">
        {points.map((point, i) => (
          <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => (
  <div className="relative bg-mesh min-h-screen pt-24">
    <div className="orb w-96 h-96 bottom-0 left-0 bg-cyan-500/10 -z-10" aria-hidden="true" />

    <div className="max-w-4xl mx-auto px-6 pb-20">
      {/* Header */}
      <div className="fade-in-up mb-14">
        <p className="section-tag mb-3">My journey</p>
        <h2 className="section-title">
          Work <span className="grad-text">Experience</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="timeline-line absolute left-[6px] top-2 bottom-8" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} {...exp} index={i} />
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div className="mt-16 glass rounded-2xl p-8 text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
        <p className="text-slate-400 mb-4 text-base">
          Want to know more about my professional journey?
        </p>
        <a
          href="https://www.linkedin.com/in/aashleshdhumane/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-glow">
            <span>View LinkedIn Profile</span>
          </button>
        </a>
      </div>
    </div>

    <Footer />
  </div>
);

export default Experience;

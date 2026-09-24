import React, { useState } from 'react';
import { projects } from '../constants';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Footer from './Footer';

const ProjectCard = ({ title, description, image, git, technologies, index }) => (
  <div
    className="glass glass-hover rounded-2xl overflow-hidden flex flex-col fade-in-up"
    style={{ animationDelay: `${0.1 * index}s` }}
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060612] via-transparent to-transparent" />
      {/* GitHub overlay button */}
      <a
        href={git}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 w-9 h-9 glass rounded-full flex items-center justify-center text-white hover:bg-purple-500/40 transition-colors"
        aria-label="GitHub repository"
      >
        <FaGithub className="text-base" />
      </a>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-6 gap-4">
      <h3 className="text-white font-bold text-lg leading-snug">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {technologies.map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="pt-2 border-t border-white/5 flex items-center gap-4">
        <a
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <FaGithub /> Source code
        </a>
        <a
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors ml-auto"
        >
          View <FiExternalLink className="text-xs" />
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.technologies)))];
  const visible  = filter === 'All'
    ? projects
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <div className="relative bg-mesh min-h-screen pt-24">
      <div className="orb w-96 h-96 top-0 left-1/2 -translate-x-1/2 bg-pink-500/10 -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Header */}
        <div className="fade-in-up mb-10">
          <p className="section-tag mb-3">What I've built</p>
          <h2 className="section-title">
            My <span className="grad-text">Projects</span>
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10 fade-in" style={{ animationDelay: '0.2s' }}>
          {allTags.slice(0, 8).map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === tag
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'glass text-slate-400 hover:text-white hover:border-purple-500/40'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((proj, i) => (
            <ProjectCard key={proj.title} {...proj} index={i} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-slate-500 py-16">No projects match this filter.</p>
        )}

        {/* GitHub CTA */}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-slate-400 mb-5">More projects available on GitHub</p>
          <a
            href="https://github.com/aashleshdhumane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-glow">
              <span className="flex items-center gap-2"><FaGithub /> See All on GitHub</span>
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;

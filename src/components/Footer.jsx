import React from 'react';
import { FaGithub, FaTwitter, FaStackOverflow } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { socialLinks } from '../constants';

const icons = [
  { href: `mailto:${socialLinks.email}`,   Icon: FiMail,         label: 'Email'        },
  { href: socialLinks.linkedin,             Icon: AiFillLinkedin, label: 'LinkedIn'     },
  { href: socialLinks.github,               Icon: FaGithub,       label: 'GitHub'       },
  { href: socialLinks.twitter,              Icon: FaTwitter,      label: 'Twitter'      },
  { href: socialLinks.stackoverflow,        Icon: FaStackOverflow,label: 'Stack Overflow'},
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {year} <span className="text-slate-300 font-medium">Aashlesh Dhumane</span>. Crafted with passion.
        </p>
        <div className="flex items-center gap-5">
          {icons.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-white text-lg transition-all duration-200 hover:-translate-y-1 hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

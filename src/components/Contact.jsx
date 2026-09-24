import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY, socialLinks } from '../constants';
import { FiMail, FiSend, FiGithub } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import Footer from './Footer';

const ContactLink = ({ href, icon: Icon, label, sub }) => (
  <a
    href={href}
    target={href.startsWith('mailto') ? undefined : '_blank'}
    rel="noopener noreferrer"
    className="glass glass-hover rounded-xl p-5 flex items-center gap-4"
  >
    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-purple-600/30 to-cyan-500/20 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl flex-shrink-0">
      <Icon />
    </div>
    <div>
      <p className="text-white font-medium text-sm">{label}</p>
      <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
    </div>
  </a>
);

const Contact = () => {
  const formRef   = useRef();
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all fields.', { position: 'bottom-right' });
      return;
    }
    // If EmailJS is not configured, open mailto fallback
    if (!EMAIL_JS_SERVICE_ID) {
      window.location.href = `mailto:${socialLinks.email}?subject=Portfolio Contact from ${name}&body=${message}`;
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        { from_name: name, to_name: 'Aashlesh Dhumane', reply_to: email, to_email: socialLinks.email, message },
        EMAIL_JS_PUBLIC_KEY
      );
      toast.success('Message sent! I\'ll get back to you soon.', { position: 'bottom-right' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try emailing me directly.', { position: 'bottom-right' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-mesh min-h-screen pt-24">
      <div className="orb w-96 h-96 top-0 right-0 bg-purple-500/10 -z-10" aria-hidden="true" />
      <div className="orb w-80 h-80 bottom-0 left-0 bg-cyan-500/10 -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Header */}
        <div className="fade-in-up mb-14">
          <p className="section-tag mb-3">Get in touch</p>
          <h2 className="section-title">
            Let's <span className="grad-text">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl text-base leading-relaxed">
            Have a project in mind, a job opportunity, or just want to chat about tech? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left — contact links */}
          <div className="md:col-span-2 flex flex-col gap-4 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <ContactLink href={`mailto:${socialLinks.email}`}    icon={FiMail}        label="Email"    sub={socialLinks.email} />
            <ContactLink href={socialLinks.linkedin}              icon={AiFillLinkedin} label="LinkedIn" sub="linkedin.com/in/aashleshdhumane" />
            <ContactLink href={socialLinks.github}                icon={FiGithub}      label="GitHub"   sub="github.com/aashleshdhumane" />
            <ContactLink href={socialLinks.twitter}               icon={FaTwitter}     label="Twitter"  sub="@22aashlesh" />

            <div className="mt-6 glass rounded-2xl p-6">
              <p className="text-sm text-slate-400 leading-relaxed">
                🚀 Currently <span className="text-green-400 font-medium">open to full-time roles</span> in backend development, automation, and software engineering.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 flex flex-col gap-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-300">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-300">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-colors"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-300">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  required
                  className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-colors resize-none"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="btn-glow self-start flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2">
                  {loading ? 'Sending…' : (<><FiSend /> Send Message</>)}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer theme="dark" />
      <Footer />
    </div>
  );
};

export default Contact;

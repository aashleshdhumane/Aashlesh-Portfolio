import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0" style={{ cursor: 'default' }}>
      <div className="mx-auto text-center flex w-5/6 justify-between items-center">
        
        {/* Left links (Home, About) */}
        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link to='/' className="hover:text-yellow-400">Home</Link>
          <Link to='/about' className="hover:text-yellow-400">About</Link>
        </div>

        {/* Title with blue hover effect */}
        <div className="text-3xl sm:text-2xl font-extrabold">
          <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Aashlesh Dhumane</Link> {/* Blue hover effect */}
        </div>

        {/* Right links (Projects, Experience, Contact) */}
        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link to='/projects' className="hover:text-yellow-400">Projects</Link>
          <Link to='/experience' className="hover:text-yellow-400">Experience</Link>
          <Link to='/contact' className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center transition-transform duration-300 ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none">
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to='/about' onClick={closeMobileMenu}>About</Link></li>
            <li><Link to='/projects' onClick={closeMobileMenu}>Projects</Link></li>
            <li><Link to='/experience' onClick={closeMobileMenu}>Experience</Link></li>
            <li><Link to='/contact' onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

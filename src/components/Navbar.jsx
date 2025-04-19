import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    // Update active link based on current scroll position
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100; // Adding offset for navbar height

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      setIsOpen(false);
      setActiveLink(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ to, children }) => {
    // Remove the hash from section IDs
    const sectionId = to.startsWith('#') ? to.substring(1) : to;
    const isActive = activeLink === sectionId;

    return (
      <a
        href={`#${sectionId}`} // We still need the href for fallback behavior
        className={`transition-all duration-300 px-2 py-1 text-base font-medium ${
          isActive
            ? 'text-indigo-600 border-b-2 border-indigo-600'
            : 'text-gray-700 hover:text-indigo-500 hover:border-b-2 hover:border-indigo-300'
        }`}
        onClick={(e) => scrollToSection(e, sectionId)}
      >
        {children}
      </a>
    );
  };

  return (
    <header className="bg-white py-4 px-6 md:px-12 lg:px-16 fixed top-0 left-0 w-full shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold ">
            <span className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
             <div className="flex gap-2">
             <span className="text-gray-900">Amit </span>
             <span className="text-indigo-600">Mamgai</span>
             </div>
            </span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-500 hover:text-indigo-600 focus:outline-none focus:text-indigo-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="education">Education</NavLink>
          <NavLink to="work">Work</NavLink>
          <NavLink to="experience">Experience</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white">
          <nav className="flex flex-col space-y-4 px-6">
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="skills">Skills</NavLink>
            <NavLink to="education">Education</NavLink>
            <NavLink to="work">Work</NavLink>
            <NavLink to="experience">Experience</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
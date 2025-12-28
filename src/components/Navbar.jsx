import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      setScrolled(window.scrollY > 20);

      // Update active link based on current scroll position
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const NavLink = ({ to, children }) => {
    const sectionId = to.startsWith('#') ? to.substring(1) : to;
    const isActive = activeLink === sectionId;

    return (
      <a
        href={`#${sectionId}`}
        className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
          isActive
            ? 'text-white'
            : 'text-gray-400 hover:text-white'
        }`}
        onClick={(e) => scrollToSection(e, sectionId)}
      >
        {children}
        {isActive && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full"></span>
        )}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/25 transition-transform duration-300 group-hover:scale-110">
              <span className="text-gray-900 font-bold text-lg">A</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-tight">Amit Mamgai</span>
            <span className="text-gray-500 text-xs">Software Developer</span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300"
          aria-label="toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
          {navItems.map((item) => (
            <NavLink key={item.id} to={item.id}>{item.label}</NavLink>
          ))}
        </nav>

        {/* Hire Me Button - Desktop */}
        <button
          onClick={(e) => scrollToSection(e, 'contact')}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105 cursor-pointer"
        >
          Hire Me
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Mobile navigation menu */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="mx-4 mt-2 p-4 bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-800/50 shadow-xl">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeLink === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  {item.label}
                  <ChevronRight size={16} className={`transition-transform ${isActive ? 'text-yellow-400' : ''}`} />
                </a>
              );
            })}
          </div>

          {/* Hire Me Button - Mobile */}
          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="flex items-center justify-center gap-2 mt-4 px-5 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-semibold text-sm rounded-xl cursor-pointer"
          >
            Hire Me
            <ChevronRight size={16} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
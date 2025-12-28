import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ParticlesComponent from './particles';
import hero1 from '../assets/images/profile.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import instagram from '../assets/images/instagram.png';
import leetcode from '../assets/images/leetcode.png';
import About from './About';
import Navbar from './Navbar';
import Skills from './Skills';
import Education from './Education';
import Work from './Work';
import Experience from './Experience';
import Contact from './Contact';
import Hobbies from './Hobbies';
import ScrollTop from './ScrollTop';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';

const Home = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Full Stack Developer', 'App Developer', 'Problem Solver', 'Tech Enthusiast'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      backDelay: 2000
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { icon: github, href: 'https://github.com/amitmamgai2k', label: 'GitHub' },
    { icon: leetcode, href: 'https://leetcode.com/u/amitmamgai2k/', label: 'LeetCode' },
    { icon: linkedin, href: 'https://www.linkedin.com/in/amit-mamgai-933847227/', label: 'LinkedIn' },
    { icon: instagram, href: 'https://www.instagram.com/amitmamgai2k/', label: 'Instagram' },
  ];

  return (
    <>
      <Navbar />
      <ScrollTop />

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center">
        {/* Particles Background */}
        <ParticlesComponent className="z-0 h-full w-full absolute" />

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Greeting Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
                <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-yellow-400 text-sm font-medium">Available for opportunities</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Hi There, <span className="inline-block animate-[wave_2s_ease-in-out_infinite]">👋</span>
              </h1>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">I'm </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Amit Mamgai
                </span>
              </h2>

              <div className="text-xl md:text-2xl text-gray-400 mb-8 h-10">
                <span className="text-gray-500">I'm a </span>
                <span ref={typedTextRef} className="text-yellow-400 font-semibold"></span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <a
                  href="#about"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/25 hover:scale-105"
                  onClick={(e) => scrollToSection(e, 'about')}
                >
                  About Me
                  <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="https://drive.google.com/file/d/1-0ThZrOc7EiQRXJ4RCKS1we-Y7YTJ2QJ/view?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800/50 border border-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-700/50 hover:border-gray-600"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/30 hover:bg-gray-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                  >
                    <img src={social.icon} alt={social.label} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group">
                {/* Animated rings */}
                <div className="absolute inset-0 -m-4 rounded-full border-2 border-yellow-500/20 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-0 -m-8 rounded-full border border-blue-500/10 animate-[spin_30s_linear_infinite_reverse]"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

                {/* Profile Image */}
                <div className="relative">
                  <img
                    className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    src={hero1}
                    alt="Amit Mamgai"
                    draggable="false"
                  />

                  {/* Status indicator */}
                  <div className="absolute bottom-8 right-8 flex items-center gap-2 px-4 py-2 bg-gray-900/90 backdrop-blur-sm rounded-full border border-gray-700">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-white text-sm font-medium">Open to work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} className="text-yellow-400" />
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <About />
        </div>
      </section>

      {/* Skills section */}
      <section id="skills" className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Skills />
        </div>
      </section>

      {/* Education section */}
      <section id="education" className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Education />
        </div>
      </section>

      {/* Hobbies section */}
      <section id="hobbies" className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Hobbies />
        </div>
      </section>

      {/* Work section */}
      <section id="work" className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Work />
        </div>
      </section>

      {/* Experience section */}
      <section id="experience" className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Experience />
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <Contact />
      </section>
    </>
  );
};

export default Home;
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ParticlesComponent from './particles';
import { Link } from 'react-router-dom';
import hero1 from '../assets/images/hero1.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import instagram from '../assets/images/instagram.png';
import leetcode from '../assets/images/leetcode.png';
import About from './About';
import Navbar from './Navbar';

const Home = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['App Development', 'Web Development', 'Video Editor'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  // Handle smooth scroll for the About Me button
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navbar />

      {/* Home section - add id="home" to the main section */}
      <section id="home" className="pt-24 pb-12  md:py-32 relative overflow-hidden">
        <ParticlesComponent className="z-[-1] h-full w-full absolute" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center pb-12">
          {/* Left content */}
          <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
              Hi There,
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              I'm Amit <span className="text-orange-500">Mamgai</span>
            </h2>
            <p className="text-2xl mb-8 font-semibold font-sans tracking-wider">
              I Am Into <span ref={typedTextRef} className="text-red-700 font-semibold"></span>
            </p>


            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 bg-indigo-500 text-white font-medium rounded-full hover:bg-indigo-700 hover:shadow-lg transition-colors duration-300"
              onClick={(e) => scrollToSection(e, 'about')}
            >
              About Me
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>

            <div className="flex gap-6 mt-8">
              <a href="https://github.com/amitmamgai2k" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://leetcode.com/u/amitmamgai2k/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10">
                <img src={leetcode} alt="LeetCode" />
              </a>
              <a href="https://www.linkedin.com/in/amit-mamgai-933847227/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/amitmamgai2k/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                className="shadow-2xl cursor-pointer rounded-full hover:scale-110 ease-in-out duration-300 w-64 h-64 md:w-80 md:h-80 mx-auto"
                src={hero1}
                alt="Amit Mamgai"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About section  */}
      <section id="about" className=" ">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <About />
        </div>
      </section>

      {/* Add other sections with proper spacing */}
      <section id="skills" className="pt-24 pb-16 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
          {/* Skills content */}
        </div>
      </section>

      <section id="education" className="pt-24 pb-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
          {/* Education content */}
        </div>
      </section>

      <section id="work" className="pt-24 pb-16 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Work</h2>
          {/* Work content */}
        </div>
      </section>

      <section id="experience" className="pt-24 pb-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
          {/* Experience content */}
        </div>
      </section>

      <section id="contact" className="pt-24 pb-16 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
          {/* Contact content */}
        </div>
      </section>
    </>
  );
};

export default Home;
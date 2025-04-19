import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import instagram from '../assets/images/instagram.png';
import leetcode from '../assets/images/leetcode.png';

function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-[#000020] to-[#000010] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Portfolio */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Amit's Portfolio</h3>
            <p className="text-gray-300">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
              <br /><br />
              Keep Rising 🚀. Connect with me over Linkedin
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors flex items-center">
                <span className="text-yellow-400 mr-2">›</span> Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                <span className="text-yellow-400 mr-2">›</span> About
              </a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors flex items-center">
                <span className="text-yellow-400 mr-2">›</span> Skills
              </a>
              <a href="#education" className="text-gray-300 hover:text-white transition-colors flex items-center">
                <span className="text-yellow-400 mr-2">›</span> Education
              </a>
              <a href="#work" className="text-gray-300 hover:text-white transition-colors flex items-center">
                <span className="text-yellow-400 mr-2">›</span> Work
              </a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors flex items-center">
                <span className="text-yellow-400 mr-2">›</span> Experience
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Contact Info</h3>
            <div className="space-y-3 mb-6">
              <p className="text-gray-300 flex items-center">
                <Phone className="mr-3 text-yellow-400 h-5 w-5" />
                +91 7011343807
              </p>
              <p className="text-gray-300 flex items-center">
                <Mail className="mr-3 text-yellow-400 h-5 w-5" />
                amitmamgai2k@gmail.com
              </p>
              <p className="text-gray-300 flex items-center">
                <MapPin className="mr-3 text-yellow-400 h-5 w-5" />
                Delhi, India-110061
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/amit-mamgai-933847227/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-[#000020] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <img src={linkedin} alt="LinkedIn" className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/amitmamgai2k"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-[#000020] transition-colors duration-300"
                aria-label="GitHub"
              >
                <img src={github} alt="GitHub" className="h-5 w-5" />
              </a>
              <a
  href="mailto:amitmamgai2k@gmail.com"
  className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-[#000020] transition-colors duration-300"
  aria-label="Email"
>
  <Mail className="h-5 w-5" />
</a>

              <a
                href="https://www.instagram.com/amitmamgai2k"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-[#000020] transition-colors duration-300"
                aria-label="Instagram"
              >
                <img src={instagram} alt="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="https://leetcode.com/amitmamgai2k/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-[#000020] transition-colors duration-300"
                aria-label="LeetCode"
              >
                <img src={leetcode} alt="LeetCode" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t-2  border-violet-800 text-center">
          <p className="text-gray-400">Copyright © {new Date().getFullYear()} | Amit Mamgai</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
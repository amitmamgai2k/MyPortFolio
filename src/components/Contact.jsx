import React from 'react';
import { Phone, Mail, MapPin, Heart, ArrowUpRight, Sparkles } from 'lucide-react';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import instagram from '../assets/images/instagram.png';
import leetcode from '../assets/images/leetcode.png';

function Contact() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/amit-mamgai-933847227/', icon: linkedin },
    { name: 'GitHub', href: 'https://github.com/amitmamgai2k', icon: github },
    { name: 'Instagram', href: 'https://www.instagram.com/amitmamgai2k', icon: instagram },
    { name: 'LeetCode', href: 'https://leetcode.com/amitmamgai2k/', icon: leetcode },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Top Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* About Portfolio */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Amit's Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Thank you for visiting my personal portfolio. I'm always excited to connect with fellow developers and creators.
            </p>
            <p className="text-gray-500 text-sm">
              Keep Rising 🚀
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 py-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 group-hover:bg-yellow-400 transition-colors"></span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-4">
              <a href="tel:+917011343807" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 group-hover:border-yellow-500/30 group-hover:bg-gray-800 transition-all">
                  <Phone className="h-4 w-4 text-yellow-400" />
                </div>
                <span>+91 7011343807</span>
              </a>
              <a href="mailto:amitmamgai2k@gmail.com" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 group-hover:border-yellow-500/30 group-hover:bg-gray-800 transition-all">
                  <Mail className="h-4 w-4 text-yellow-400" />
                </div>
                <span>amitmamgai2k@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                </div>
                <span>Delhi, India - 110061</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Follow Me
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/30 hover:bg-gray-800 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="h-5 w-5" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
                </a>
              ))}
              <a
                href="mailto:amitmamgai2k@gmail.com"
                className="group relative p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/30 hover:bg-gray-800 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-gray-300" />
              </a>
            </div>

            {/* CTA */}
            <a
              href="mailto:amitmamgai2k@gmail.com"
              className="group inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105"
            >
              <span>Say Hello</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              © {new Date().getFullYear()} Amit Mamgai. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
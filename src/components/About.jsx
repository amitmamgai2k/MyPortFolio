import React from 'react';
import profileImage from '../assets/images/xca.avif';
import { ArrowRight, Mail, MapPin, User, Sparkles, Download, Code, Briefcase } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, label: "Full Stack Developer", color: "from-blue-500 to-cyan-400" },
    { icon: Briefcase, label: "MCA Student", color: "from-purple-500 to-pink-400" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Get to Know Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
            <User size={24} className="text-blue-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Container */}
          <div className="w-full lg:w-2/5">
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

              <div className="relative rounded-2xl overflow-hidden bg-gray-800">
                <img
                  draggable="false"
                  className="w-full h-auto rounded-2xl transition-all duration-500 group-hover:scale-105"
                  src={profileImage}
                  alt="Amit Mamgai"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Amit Mamgai</h3>
                  <p className="text-blue-400 font-medium">Software Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-3/5">
            {/* Highlight badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} bg-opacity-10`}
                  style={{ background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))` }}
                >
                  <item.icon size={16} className="text-blue-400" />
                  <span className="text-white font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Hello, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Amit</span>
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              I am a passionate <span className="text-white font-medium">Software Engineering Student</span> based in Delhi, India.
              I love building modern web and mobile applications using cutting-edge technologies.
              My expertise lies in <span className="text-blue-400">React Native</span> & the <span className="text-blue-400">MERN Stack</span>.
              I'm constantly learning and improving my skills to create impactful digital experiences.
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="group p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-800/70">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-white font-medium">amit.mamgai2k@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="group p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-800/70">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-white font-medium">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1-0ThZrOc7EiQRXJ4RCKS1we-Y7YTJ2QJ/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
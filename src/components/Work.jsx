import React from 'react';
import { ExternalLink, Github, ArrowRight, Code, Sparkles } from 'lucide-react';
import PortFolio from '../assets/Projects/PortFolio.png';
import Drivo from '../assets/Projects/Drivo.png';
import TravelBuddy from '../assets/Projects/TravelBuddy.png';



function Work() {
  const projects = [
    {
      id: 1,
      title: "Drivo Rides",
      subtitle: "The Riding Platform",
      image: Drivo,
      description: "Drivo Rides - The Riding Platform for convenient and affordable transportation with real-time tracking.",
      tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
      viewLink: "https://drivo-rides.vercel.app/",
      codeLink: "https://github.com/amitmamgai2k/Drivo-Rides"
    },
    {
      id: 2,
      title: "Travel Buddy",
      subtitle: "Travel Companion App",
      image: TravelBuddy,
      description: "A full-stack travel app for planning trips, connecting with travelers, and AI-powered recommendations.",
      tags: ["React", "Node.js", "MongoDB", "AI"],
      viewLink: "https://travel-buddy-2-0-frontend.vercel.app/",
      codeLink: "https://github.com/amitmamgai2k/TravelBuddy",
    },
    {
      id: 3,
      title: "Portfolio Website",
      subtitle: "Personal Portfolio",
      image: PortFolio,
      description: "A responsive portfolio website showcasing my projects, skills, and professional journey.",
      tags: ["React", "TailwindCSS", "Vite"],
      viewLink: "https://my-port-folio.vercel.app/",
      codeLink: "https://github.com/amitmamgai2k/MyPortFolio",
    }
  ];

  return (
    <section id="work" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden rounded-2xl">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Featured Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Made</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <Code size={24} className="text-yellow-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Check out some of my recent work and projects I've built using various technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map(project => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-500 hover:border-gray-600 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                {/* Floating tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-black/50 backdrop-blur-sm text-xs font-medium text-white rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-yellow-400 text-sm font-medium mb-1">{project.subtitle}</p>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.viewLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>

                  <a
                    href={project.codeLink}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-700/50 text-white font-medium text-sm border border-gray-600 transition-all duration-300 hover:bg-gray-600/50 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <a
            href="/projects"
            className="group relative inline-flex items-center gap-3 py-4 px-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/25 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">View All Projects</span>
            <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
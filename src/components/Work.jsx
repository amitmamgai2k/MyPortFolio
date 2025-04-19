import React from 'react';
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react';
import PortFolio from '../assets/Projects/Portfolio.png';
import Drivo from '../assets/Projects/Drivo.png';
import Sandesh from '../assets/Projects/Sandesh.png';
import LMS from '../assets/Projects/LMS.png';
import Currency from '../assets/Projects/currency.png';
import Tic from '../assets/Projects/Tic Tac Toe.png';

function Work() {
  const projects = [
    {
      id: 1,
      title: "Drivo Rides ",
      image: Drivo,
      description: "Drivo Rides - The Riding Platform",
      viewLink: "#",
      codeLink: "https://github.com/amitmamgai2k/Currency_Project"
    },
    {
      id: 2,
      title: "Portfolio Website",
      image:PortFolio,
      description: "A responsive portfolio website showcasing my projects and skills.",
      viewLink: "#",
      codeLink: "https://github.com/amitmamgai2k/MyPortFolio",
    },
    {
      id: 3,
      title: "Sandesh Digital Invitation Platform",
      image: Sandesh,
      description: "A full-stack Digital Invitation application ",
      viewLink: "#",
      codeLink: "https://github.com/RudrakshaSingh/Sandesh2",
    }

  ];

  return (
    <section id="work" className="bg-gradient-to-b from-[#000031] to-[#00002c] py-16 px-4 md:px-8 rounded-lg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white inline-flex items-center justify-center">
            <span className="mr-3 bg-yellow-400 p-2 rounded-lg">
              <Code className="h-8 w-8 text-[#000031]" />
            </span>
            Projects <span className="text-yellow-400 ml-2">Made</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Check out some of my recent work and projects I've built using various technologies.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map(project => (
            <div key={project.id} className="bg-[#00001f] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="bg-yellow-400 rounded-full w-3 h-3"></span>
                </div>

                <p className="text-gray-300 mb-6 h-16">{project.description}</p>

                <div className="flex justify-between items-center">
                  <a
                    href={project.viewLink}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-yellow-400 text-[#000031] font-medium hover:bg-yellow-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                     Demo
                  </a>

                  <a
                    href={project.codeLink}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <a
            href="/projects"
            className="group flex items-center gap-2 py-3 px-8 rounded-full bg-yellow-400 text-[#000031] font-bold text-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-yellow-400/20"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
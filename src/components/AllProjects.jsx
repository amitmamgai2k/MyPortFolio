import React, { useState } from 'react';
import { ExternalLink, Github, ArrowLeft, Filter, Code, Search } from 'lucide-react';
import PortFolio from '../assets/Projects/PortFolio.png';
import Drivo from '../assets/Projects/Drivo.png';
import Sandesh from '../assets/Projects/Sandesh.png';
import LMS from '../assets/Projects/LMS.png';
import Currency from '../assets/Projects/currency.png';
import Tic from '../assets/Projects/Tic Tac Toe.png';
import stone from '../assets/Projects/Stone.png';
import Pokedex from '../assets/Projects/Pokedex.png';
import Password from '../assets/Projects/Password.png';
import flex from '../assets/Projects/flex.jpg';
import coinx from '../assets/Projects/coinx.jpg';
import todo from '../assets/Projects/todo.jpg';
import weather from '../assets/Projects/weather.jpg';
import EGuru from '../assets/Projects/EGuru.png';
import Hospital from '../assets/Projects/Hospital.png';
import NFT from '../assets/Projects/NFT.png';
import pixelabs from '../assets/Projects/pixelab.png';
import scotter from '../assets/Projects/Scotter.png';

function AllProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Drivo Rides",
      image: Drivo,
      description: "Drivo Rides - The Riding Platform for convenient and affordable transportation.",
      viewLink: "https://drivo-rides.vercel.app/",
      codeLink: "https://github.com/amitmamgai2k/Drivo-Rides",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Portfolio Website",
      image: PortFolio,
      description: "A responsive portfolio website showcasing my projects and skills.",
      viewLink: "https://my-port-folio.vercel.app/",
      codeLink: "https://github.com/amitmamgai2k/MyPortFolio",
      category: "Web App"
    },
    {
      id: 3,
      title: "Learning Management System",
      image: LMS,
      description: "A full-stack e-learning platform with user authentication and course management.",
      viewLink: "https://www.linkedin.com/feed/update/urn:li:activity:7300829583002451968/",
      codeLink: "https://github.com/amitmamgai2k/Learning-Management-System",
      category: "Full Stack"
    },
    {
      id: 4,
      title: "Sandesh Digital Invitation",
      image: Sandesh,
      description: "A full-stack Digital Invitation application for creating and sharing event invitations.",
      viewLink: "#",
      codeLink: "https://github.com/RudrakshaSingh/Sandesh2",
      category: "Full Stack"
    },
    {
      id: 5,
      title: "Currency Converter",
      image: Currency,
      description: "Currency conversion app with real-time exchange rates and historical data.",
      viewLink: "https://amitmamgai2k.github.io/Currency_Project/",
      codeLink: "https://github.com/amitmamgai2k/Currency_Project",
      category: "Web App"
    },
    {
      id: 6,
      title: "Tic Tac Toe Game",
      image: Tic,
      description: "Interactive Tic Tac Toe game with multiple difficulty levels and score tracking.",
      viewLink: "https://amitmamgai2k.github.io/Tic-tac-Toe/",
      codeLink: "https://github.com/amitmamgai2k/Tic-tac-Toe",
      category: "Web App"
    },
    {
        id: 7,
        title: "Stone Paper Scissors Game",
        image: stone,
        description: "Interactive Stone Paper Scissors game with multiple difficulty levels and score tracking.",
        viewLink: "https://amitmamgai2k.github.io/Rock-Paper-and-Scissors/",
        codeLink: "https://github.com/amitmamgai2k/Rock-Paper-and-Scissors",
        category: "Web App"
      },
    {
      id: 8,
      title: "Pokedex ",
      image: Pokedex,
      description: "Pokedex app with real-time data and search functionality.",
      viewLink: "https://www.linkedin.com/feed/update/urn:li:activity:7294706440877850625/?originTrackingId=mbRiyn%2B5Reyaqf4RrgaKPA%3D%3D",
      codeLink: "https://github.com/amitmamgai2k/Pokedex_Project",
      category: "Web App"
    },
    {
      id: 9,
      title: "Random Password Generator",
      image: Password,
      description: "Password generator app with customizable length and character options.",
      viewLink: "https://amitmamgai2k.github.io/Password_Generator/",
      codeLink: "https://github.com/amitmamgai2k/Password_Generator",
      category: "Web App"
    },
    {
      id: 10,
      title: "To do Application",
      image: todo,
      description: "To do app with real-time data and search functionality.",
      viewLink: "https://www.linkedin.com/feed/update/urn:li:activity:7307042878478766080/",
      codeLink: "https://github.com/amitmamgai2k/Todo-React-Native",
      category: "Mobile App"
    },
    {
        id: 11,
        title: "Weather App",
        image: weather,
        description: "Weather app with real-time data and search functionality.",
        viewLink: "https://www.linkedin.com/feed/update/urn:li:activity:7304942107834621955/",
        codeLink: "https://github.com/amitmamgai2k/Weather-App",
        category: "Mobile App"
      },
      {
        id: 12,
        title: "CoinX App",
        image: coinx,
        description: "CoinX app  with real-time crypto  data and search functionality.",
        viewLink: "https://www.linkedin.com/feed/update/urn:li:activity:7309122088437485568/",
        codeLink: "https://github.com/amitmamgai2k/Crypto-Token-Data-",
        category: "Mobile App"
      },
      {
        id: 13,
        title: "Flex Fit",
        image: flex,
        description: "Flex Fit app  with real-time data for fitness and search functionality.",

        viewLink: "https://www.linkedin.com/feed/update/urn:li:activity:7314651374028238848/",
        codeLink: "https://github.com/amitmamgai2k/Fitness-App",
        category: "Mobile App"
      },
      {
        id: 14,
        title: "E Guru",
        image: EGuru,
        description: "E Guru is a simple Ui Page",
        viewLink: "#",
        codeLink: "https://github.com/amitmamgai2k/master-level-project/tree/main/Project%201_%20E-Guru/E-Guru",
        category: "Ui Page"
      },
      {
        id: 15,
        title: "Hospital Management System",
        image: Hospital,
        description: "Hospital Management System app  with Ui only",

        viewLink: "#",
        codeLink: "https://github.com/amitmamgai2k/master-level-project/tree/main/Project%202_%20hospital%20website%20landing%20page/hospital%20website%20landing%20page",
        category: "Ui Page"
      },
      {
        id: 16,
        title: "Scotter Selling Page",
        image: scotter,
        description: "Scotter Selling Page app  with Ui only",

        viewLink: "#",
        codeLink: "https://github.com/amitmamgai2k/master-level-project/tree/main/project3",
        category: "Ui Page"
      },
      {
        id: 17,
        title: "Pixelab",
        image: pixelabs,
        description: "Pixelab is Photo app with Ui only",

        viewLink: "#",
        codeLink: "https://github.com/amitmamgai2k/master-level-project/tree/main/Project%205",
        category: "Ui Page"
      },
      {
        id: 18,
        title: "NFT Landing Page",
        image: NFT,
        description: "NFT Landing Page app  with Ui only.",

        viewLink: "",
        codeLink: "https://github.com/amitmamgai2k/master-level-project/tree/main/project4",
        category: "Ui Page"
      },

  ];

  const categories = ['All', 'Web App', 'Mobile App', 'Full Stack', 'Ui Page'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-gradient-to-b from-[#000031] to-[#00002c] py-16 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">


        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white inline-flex items-center justify-center">
            <span className="mr-3 bg-yellow-400 p-2 rounded-lg">
              <Code className="h-8 w-8 text-[#000031]" />
            </span>
            All <span className="text-yellow-400 ml-2">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore my complete collection of projects showcasing my skills and passion for development.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 bg-[#00001f] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-yellow-400" />
            <span className="text-gray-300 mr-2">Filter:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-yellow-400 text-[#000031]'
                      : 'bg-[#00001f] text-gray-300 hover:bg-gray-800'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-[#00001f] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60"></div>
                  <span className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-[#000031] text-xs font-bold rounded-full">
                    {project.category}
                  </span>
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
        ) : (
          <div className="text-center py-16">
            <div className="bg-[#00001f] inline-block p-4 rounded-full mb-4">
              <Search className="h-10 w-10 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllProjects;
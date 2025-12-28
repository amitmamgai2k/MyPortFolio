import { Award, Layout, Server, Database, Settings, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      bgGradient: "from-blue-500/10 to-cyan-400/10",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "ReactJS", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
        { name: "React Native", icon: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000" },
        { name: "Redux", icon: "https://img.icons8.com/color/48/000000/redux.png" },
        { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
        { name: "TypeScript", icon: "https://img.icons8.com/color/48/000000/typescript.png" },
        { name: "HTML5", icon: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
        { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
        { name: "TailwindCSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png" },
        { name: "Bootstrap", icon: "https://img.icons8.com/color/48/000000/bootstrap.png" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      gradient: "from-green-600 via-green-500 to-emerald-400",
      bgGradient: "from-green-500/10 to-emerald-400/10",
      borderColor: "border-green-500/30",
      skills: [
        { name: "NodeJS", icon: "https://img.icons8.com/color/48/000000/nodejs.png" },
        { name: "ExpressJS", icon: "https://img.icons8.com/fluency/48/000000/node-js.png" },
        { name: "Socket.IO", icon: "https://socket.io/images/logo.svg" },
        { name: "Python", icon: "https://img.icons8.com/color/48/000000/python--v1.png" },
        { name: "Java", icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
        { name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      gradient: "from-purple-600 via-purple-500 to-pink-400",
      bgGradient: "from-purple-500/10 to-pink-400/10",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "MongoDB", icon: "https://img.icons8.com/color/48/000000/mongodb.png" },
        { name: "MySQL", icon: "https://img.icons8.com/color/48/000000/mysql-logo.png" },
        { name: "Firebase", icon: "https://img.icons8.com/color/48/000000/firebase.png" },
        { name: "Redis", icon: "https://img.icons8.com/color/48/000000/redis.png" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      gradient: "from-orange-600 via-orange-500 to-yellow-400",
      bgGradient: "from-orange-500/10 to-yellow-400/10",
      borderColor: "border-orange-500/30",
      skills: [
        { name: "Docker", icon: "https://img.icons8.com/color/48/000000/docker.png" },
        { name: "Git", icon: "https://img.icons8.com/color/48/000000/git.png" },
        { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
        { name: "Netlify", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" },
        { name: "Postman", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" },
        { name: "VS Code", icon: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <Sparkles size={16} className="text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">Technical Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Technologies</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400"></div>
            <Award size={24} className="text-orange-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Crafting exceptional digital experiences with modern technologies and best practices
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm border ${category.borderColor} transition-all duration-500 hover:border-opacity-50`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg shadow-${category.gradient.split('-')[1]}-500/25`}>
                  <category.icon size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{category.skills.length} technologies</p>
                </div>
                <div className={`flex-1 h-px bg-gradient-to-r ${category.gradient} opacity-20`}></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const uniqueKey = `${categoryIndex}-${skillIndex}`;
                  const isHovered = hoveredSkill === uniqueKey;

                  return (
                    <div
                      key={skillIndex}
                      onMouseEnter={() => setHoveredSkill(uniqueKey)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`
                        group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-5
                        border border-gray-700/50 cursor-pointer
                        transition-all duration-300 ease-out
                        ${isHovered ? 'bg-gray-700/70 border-gray-600 -translate-y-2 shadow-xl shadow-black/20' : 'hover:bg-gray-700/50'}
                      `}
                    >
                      {/* Glow effect on hover */}
                      <div className={`
                        absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} opacity-0
                        transition-opacity duration-300 blur-xl -z-10
                        ${isHovered ? 'opacity-20' : ''}
                      `}></div>

                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-3">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className={`
                              h-12 w-12 object-contain filter
                              transition-all duration-300
                              ${isHovered ? 'scale-110' : ''}
                              ${skill.name === 'Socket.IO' || skill.name === 'Vercel' ? 'invert brightness-200' : ''}
                            `}
                          />
                        </div>
                        <span className={`
                          font-medium text-sm transition-colors duration-300
                          ${isHovered ? 'text-white' : 'text-gray-300'}
                        `}>
                          {skill.name}
                        </span>
                      </div>

                      {/* Bottom accent line */}
                      <div className={`
                        absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r ${category.gradient}
                        transition-all duration-300 rounded-full
                        ${isHovered ? 'w-3/4 opacity-100' : 'w-0 opacity-0'}
                      `}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "20+", label: "Technologies", gradient: "from-blue-500 to-cyan-400" },
            { number: "10+", label: "Projects Built", gradient: "from-green-500 to-emerald-400" },
            { number: "3+", label: "Years Learning", gradient: "from-purple-500 to-pink-400" },
            { number: "∞", label: "Passion for Code", gradient: "from-orange-500 to-yellow-400" }
          ].map((stat, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm text-center transition-all duration-300 hover:bg-gray-800/50 hover:border-gray-600/50"
            >
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
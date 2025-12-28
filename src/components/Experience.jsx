import React from 'react';
import { Code, Lightbulb, Layers, GitBranch, Cpu, Rocket, Sparkles, Briefcase } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      id: 1,
      icon: Code,
      title: "Frontend Development",
      description: "Created responsive user interfaces using React, HTML5, CSS3, and JavaScript. Implemented interactive UI components and animations for enhanced user experience.",
      skills: ["React", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Layers,
      title: "Full Stack Projects",
      description: "Developed end-to-end applications with frontend and backend integration. Connected APIs with frontend interfaces to create seamless user experiences.",
      skills: ["Node.js", "Express", "MongoDB", "API Integration", "Authentication"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Applied creative problem-solving techniques to overcome technical challenges. Debugged complex issues and implemented efficient solutions.",
      skills: ["Debugging", "Optimization", "Algorithm Design", "Technical Research"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      icon: GitBranch,
      title: "Version Control & Collaboration",
      description: "Managed project code using Git and GitHub. Created and merged branches to maintain clean codebases and enable collaboration.",
      skills: ["Git", "GitHub", "Branching", "Pull Requests", "Code Reviews"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      icon: Cpu,
      title: "Technical Learning",
      description: "Continuously expanded knowledge of development tools and technologies. Applied learning to create increasingly sophisticated projects.",
      skills: ["Self-learning", "Documentation", "Technical Adaptability", "New Technologies"],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      icon: Rocket,
      title: "Project Deployment",
      description: "Successfully deployed web applications to production environments. Configured hosting services to ensure optimal performance.",
      skills: ["Netlify", "Vercel", "Domain Configuration", "CI/CD"],
      gradient: "from-rose-500 to-red-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">What I've Learned</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <Briefcase size={24} className="text-yellow-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Through building various projects, I've gained valuable experience and developed a wide range of technical skills.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 transition-all duration-500 hover:border-gray-600 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20"
              >
                {/* Top Section */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${exp.gradient} shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r ${exp.gradient} bg-opacity-20 border-2 border-current`}
                    style={{ borderColor: 'transparent', background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))` }}
                  >
                    <span className="text-white font-bold text-sm">{String(exp.id).padStart(2, '0')}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {exp.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full border border-gray-600/50 transition-all duration-300 hover:border-gray-500 hover:bg-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                  {exp.skills.length > 3 && (
                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/30">
                      +{exp.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${exp.gradient} rounded-full transition-all duration-500 group-hover:w-3/4`}></div>

                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
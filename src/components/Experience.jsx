import React from 'react';
import { Code, Lightbulb, Layers, GitBranch, Cpu, Rocket } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      id: 1,
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Created responsive user interfaces using React, HTML5, CSS3, and JavaScript. Implemented interactive UI components and animations for enhanced user experience.",
      skills: ["React", "JavaScript", "CSS", "HTML", "Tailwind CSS"]
    },
    {
      id: 2,
      icon: <Layers className="w-6 h-6" />,
      title: "Full Stack Projects",
      description: "Developed end-to-end applications with frontend and backend integration. Connected APIs with frontend interfaces to create seamless user experiences.",
      skills: ["Node.js", "Express", "MongoDB", "API Integration", "Authentication"]
    },
    {
      id: 3,
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Applied creative problem-solving techniques to overcome technical challenges. Debugged complex issues and implemented efficient solutions.",
      skills: ["Debugging", "Optimization", "Algorithm Design", "Technical Research"]
    },
    {
      id: 4,
      icon: <GitBranch className="w-6 h-6" />,
      title: "Version Control & Collaboration",
      description: "Managed project code using Git and GitHub. Created and merged branches to maintain clean codebases and enable collaboration.",
      skills: ["Git", "GitHub", "Branching", "Pull Requests", "Code Reviews"]
    },
    {
      id: 5,
      icon: <Cpu className="w-6 h-6" />,
      title: "Technical Learning",
      description: "Continuously expanded knowledge of development tools and technologies. Applied learning to create increasingly sophisticated projects.",
      skills: ["Self-learning", "Documentation", "Technical Adaptability", "New Technologies"]
    },
    {
      id: 6,
      icon: <Rocket className="w-6 h-6" />,
      title: "Project Deployment",
      description: "Successfully deployed web applications to production environments. Configured hosting services to ensure optimal performance.",
      skills: ["Netlify", "Vercel", "Domain Configuration", "HTTPS"]
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 md:px-8 bg-gradient-to-b from-violet-500 to-violet-300 rounded-lg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Project <span className="text-yellow-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Through building various projects, I've gained valuable experience and developed a wide range of technical skills.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map(exp => (
            <div
              key={exp.id}
              className="bg-[#00001a] p-6 rounded-xl border border-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-gray-700 hover:translate-y-[-4px]"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-yellow-400 rounded-lg text-[#000031]">
                  {exp.icon}
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400 text-yellow-400 font-bold">
                  {exp.id}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>

              <p className="text-gray-300 mb-5">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {exp.skills.length > 3 && (
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                    +{exp.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
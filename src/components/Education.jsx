import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, Sparkles } from 'lucide-react';
import Pg from '../assets/images/educat/PG.png';
import Bsc from '../assets/images/educat/UG.jpeg';
import tweleve from '../assets/images/educat/sch.jpg';
import ten from '../assets/images/educat/scho.jpeg';

const Education = () => {
  const educationData = [
    {
      degree: "Master in Computer Application (MCA)",
      institution: "University School of Information, Communication and Technology | GGSIPU",
      duration: "2024 - 2026",
      status: "Pursuing",
      marks: "88%",
      image: Pg,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      degree: "Bachelor of Science in Instrumentation",
      institution: "Bhaskaracharya College Of Applied Sciences | DU",
      duration: "2021 - 2024",
      status: "Completed",
      marks: "85%",
      image: Bsc,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Govt. Sarvodaya Bal Vidyalaya, Bharthal, Bijwasan, New Delhi | CBSE",
      duration: "2020 - 2021",
      status: "Completed",
      marks: "87%",
      image: tweleve,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      degree: "Matriculate (Class X)",
      institution: "Govt. Sarvodaya Bal Vidyalaya, Bharthal, Bijwasan, New Delhi | CBSE",
      duration: "2018 - 2019",
      status: "Completed",
      marks: "89%",
      image: ten,
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl relative overflow-hidden" id="education">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Academic Journey</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Education</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400"></div>
            <GraduationCap size={24} className="text-purple-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>

          <p className="text-gray-400 italic max-w-2xl mx-auto">
            "An investment in knowledge pays the best interest." — Benjamin Franklin
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-500 hover:border-gray-600 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={edu.image}
                  alt={edu.institution}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    edu.status === 'Pursuing'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {edu.status}
                  </span>
                </div>

                {/* Gradient Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient}`}></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {edu.degree}
                </h3>

                <div className="flex items-start gap-2 text-gray-400 text-sm mb-4">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  <p>{edu.institution}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={14} />
                    <span className="text-sm">{edu.duration}</span>
                  </div>

                  {edu.marks && (
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-yellow-400" />
                      <span className="text-yellow-400 font-semibold text-sm">{edu.marks}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
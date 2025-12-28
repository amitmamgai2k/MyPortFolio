import React, { useState } from 'react';
import { Sparkles, Heart, Quote } from 'lucide-react';
import First from '../assets/Hobbies/1.jpg';
import Second from '../assets/Hobbies/2.jpg';
import Third from '../assets/Hobbies/3.jpg';
import Fourth from '../assets/Hobbies/4.jpg';
import Fifth from '../assets/Hobbies/5.jpg';
import Sixth from '../assets/Hobbies/6.jpg';
import Seventh from '../assets/Hobbies/7.jpg';
import Eighth from '../assets/Hobbies/8.jpg';
import Ninth from '../assets/Hobbies/9.jpg';
import Tenth from '../assets/Hobbies/10.jpg';
import Eleventh from '../assets/Hobbies/11.jpg';
import Twelfth from '../assets/Hobbies/12.jpg';
import Thirteenth from '../assets/Hobbies/13.png';
import Fourteenth from '../assets/Hobbies/14.png';
import Fifteenth from '../assets/Hobbies/15.jpg';
import Sixteenth from '../assets/Hobbies/16.png';

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      title: "Workouts",
      icon: "💪",
      description: "Staying fit and healthy through regular strength training and fitness routines. I believe a strong body leads to a strong mind.",
      gradient: "from-purple-500 to-indigo-500",
      images: [Fifth, Sixth, Seventh, Eighth],
      whyLove: "Working out helps me maintain discipline, build physical strength, and clear my mind. It's my way of challenging myself and achieving personal growth."
    },
    {
      id: 2,
      title: "Cricket",
      icon: "🏏",
      description: "Playing cricket with friends and following competitive matches. I enjoy both the technical aspects and team dynamics of the sport.",
      gradient: "from-blue-500 to-cyan-500",
      images: [Ninth, Tenth, Eleventh, Twelfth],
      whyLove: "Cricket teaches me teamwork, strategy, and performing well under pressure. The sport combines individual excellence with collective effort - just like great software development."
    },
    {
      id: 3,
      title: "Coding",
      icon: "💻",
      description: "Exploring new technologies and building personal projects. I find coding both intellectually stimulating and creatively fulfilling.",
      gradient: "from-green-500 to-emerald-500",
      images: [Thirteenth, Fourteenth, Fifteenth, Sixteenth],
      whyLove: "Coding is both my profession and passion. I enjoy solving complex problems, learning new technologies, and creating applications that make a difference."
    },
    {
      id: 4,
      title: "Traveling",
      icon: "🌍",
      description: "Exploring new destinations and immersing myself in diverse cultures. I find traveling both intellectually enriching and creatively inspiring.",
      gradient: "from-orange-500 to-yellow-500",
      images: [First, Second, Third, Fourth],
      whyLove: "Traveling allows me to experience new cultures, meet people from different walks of life, and gain a deeper appreciation of the world."
    }
  ];

  const [activeTab, setActiveTab] = useState(hobbies[0].id);
  const activeHobby = hobbies.find(h => h.id === activeTab);

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
            <Sparkles size={16} className="text-indigo-400" />
            <span className="text-indigo-400 text-sm font-medium">Beyond The Code</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Hobbies</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-400"></div>
            <Heart size={24} className="text-indigo-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-400"></div>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            When I'm not developing awesome applications, here's what keeps me engaged and energized.
          </p>
        </div>

        {/* Hobby Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {hobbies.map((hobby) => (
            <button
              key={hobby.id}
              className={`group px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === hobby.id
                  ? `bg-gradient-to-r ${hobby.gradient} text-white shadow-lg shadow-indigo-500/25`
                  : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-gray-600 hover:text-white'
              }`}
              onClick={() => setActiveTab(hobby.id)}
            >
              <span className="mr-2 text-xl">{hobby.icon}</span>
              {hobby.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
          {activeHobby && (
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Grid */}
              <div className={`relative p-6 bg-gradient-to-br ${activeHobby.gradient} bg-opacity-20`}>
                <div className="grid grid-cols-2 gap-3 h-full">
                  {activeHobby.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-xl group/img"
                      style={{ minHeight: '140px' }}
                    >
                      <img
                        src={image}
                        alt={`${activeHobby.title} ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{activeHobby.icon}</span>
                  <h3 className="text-3xl font-bold text-white">{activeHobby.title}</h3>
                </div>

                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {activeHobby.description}
                </p>

                {/* Why I Love It */}
                <div className="relative p-6 rounded-xl bg-gray-700/30 border-l-4 border-indigo-500">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Heart size={18} className="text-red-400" />
                    Why I Love It
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {activeHobby.whyLove}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quote Section */}
        <div className="mt-16 relative p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
          <Quote size={40} className="absolute top-4 left-4 text-indigo-400/30" />
          <blockquote className="text-xl text-gray-300 text-center max-w-3xl mx-auto italic relative z-10">
            "Balance is not something you find, it's something you create. My hobbies keep me grounded and provide fresh perspectives that enhance my work."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
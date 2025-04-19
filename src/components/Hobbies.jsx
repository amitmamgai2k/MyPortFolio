import React, { useState } from 'react';
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
      color: "bg-violet-300",
      images: [Fifth, Sixth, Seventh, Eighth],
      imageAlts: [
        "Weight training",
        "Cardio workout",
        "Yoga session",
        "Outdoor fitness"
      ]
    },
    {
      id: 2,
      title: "Cricket",
      icon: "🏏",
      description: "Playing cricket with friends and following competitive matches. I enjoy both the technical aspects and team dynamics of the sport.",
      color: "bg-blue-300",
      images: [Ninth, Tenth, Eleventh, Twelfth],
      imageAlts: [
        "Cricket match",
        "Cricket bat and ball",
        "Cricket stadium",
        "Cricket team"
      ]
    },
    {
      id: 3,
      title: "Coding",
      icon: "💻",
      description: "Exploring new technologies and building personal projects. I find coding both intellectually stimulating and creatively fulfilling.",
      color: "bg-green-300",
      images: [Thirteenth, Fourteenth, Fifteenth, Sixteenth],
      imageAlts: [
        "Code editor",
        "Terminal window",
        "Development setup",
        "Project diagram"
      ]
    },
    {
      id: 4,
      title: "Traveling",
      icon: "🌍",
      description: "Exploring new destinations and immersing myself in diverse cultures. I find traveling both intellectually enriching and creatively inspiring.",
      color: "bg-yellow-300",
      images: [First, Second, Third, Fourth],
      imageAlts: [
        "Beach destination",
        "Mountain landscape",
        "City architecture",
        "Cultural landmark"
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(hobbies[0].id);

  return (
    <div className="py-16 mt-4 rounded-lg bg-gradient-to-b from-gray-200 to-bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My <span className="text-indigo-600">Hobbies</span></h2>
        <div className="h-1 w-24 bg-indigo-600 mx-auto mt-2 mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          When I'm not developing awesome applications, here's what keeps me engaged and energized.
        </p>
      </div>

      {/* Tabs for hobbies */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {hobbies.map((hobby) => (
            <button
              key={hobby.id}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === hobby.id
                  ? `${hobby.color} text-white shadow-lg`
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab(hobby.id)}
            >
              <span className="mr-2">{hobby.icon}</span>
              {hobby.title}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className={`transition-all duration-500 ${activeTab === hobby.id ? 'block' : 'hidden'}`}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image Grid Section - with imported images */}
                <div className={`${hobby.color} p-4 flex items-center justify-center`}>
                  <div className="grid grid-cols-4 gap-2 w-full">
                    {hobby.images.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg shadow-md h-64">
                        <img
                          src={image}
                          alt={hobby.imageAlts[index]}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description section */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-4xl mr-3">{hobby.icon}</span>
                    {hobby.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">{hobby.description}</p>

                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <h4 className="font-semibold text-gray-800 mb-2">Why I love it:</h4>
                    {hobby.id === 1 && (
                      <p className="text-gray-600">
                        Working out helps me maintain discipline, build physical strength, and clear my mind.
                        It's my way of challenging myself and achieving personal growth.
                      </p>
                    )}
                    {hobby.id === 2 && (
                      <p className="text-gray-600">
                        Cricket teaches me teamwork, strategy, and performs well under pressure.
                        The sport combines individual excellence with collective effort - just like great software development.
                      </p>
                    )}
                    {hobby.id === 3 && (
                      <p className="text-gray-600">
                        Coding is both my profession and passion. I enjoy solving complex problems, learning
                        new technologies, and creating applications that make a difference.
                      </p>
                    )}
                    {hobby.id === 4 && (
                      <p className="text-gray-600">
                        Traveling allows me to experience new cultures, meet people from different walks of life, and gain a deeper appreciation of the world. It broadens my perspective and fuels my curiosity about how others live.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote section */}
        <div className="mt-16 text-center p-8 bg-indigo-50 rounded-xl">
          <blockquote className="text-xl italic text-gray-800 max-w-3xl mx-auto">
            "Balance is not something you find, it's something you create. My hobbies keep me grounded and provide fresh perspectives that enhance my work."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
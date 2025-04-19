import React from 'react';
import profileImage from '../assets/images/imgg.avif';
import { ArrowRight, Mail, MapPin, User } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-flex items-center justify-center">
            <User size={32} className="text-blue-600 mr-3" />
            About <span className="text-blue-600 ml-2">Me</span>
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Container */}
          <div className="w-full md:w-2/5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all hover:scale-105 duration-300 max-w-md mx-auto">
              <img
                draggable="false"
                className="w-full h-auto rounded-2xl hover:grayscale transition-all duration-300"
                src={profileImage}
                alt="Amit Mamgai"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full md:w-3/5 mt-10 md:mt-0">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">I'm Amit</h3>
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 font-medium rounded-full text-sm mb-6">
              Software Engineer
            </span>

            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              I am a Software Engineering Student  based in Delhi, India.
              I am very passionate about improving my coding skills & developing applications & websites.
              I build Apps and Websites using React Native & MERN Stack.
              Working for myself to improve my skills.
              Love to build Full-Stack Projects.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md mb-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Email: </span>
                  amit.mamgai2k@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Location: </span>
                  Delhi, India - 110061
                </p>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1-0ThZrOc7EiQRXJ4RCKS1we-Y7YTJ2QJ/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg transition-all hover:bg-blue-700 hover:shadow-lg focus:ring-4 focus:ring-blue-300"
            >
              <span className="mr-2">View Resume</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
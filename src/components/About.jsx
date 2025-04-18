import React from 'react';
import profileImage from '../assets/images/imgg.avif';
import { ArrowRight, Mail, MapPin, User, UserIcon } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" >

      <div className="container mx-auto px-4 max-w-6xl">

        <h2 className="text-4xl font-bold text-center justify-center items-center flex mb-12">
        <UserIcon size={36} className="inline-block mr-2 font-bold text-blue-600 " />

          About <span className="text-blue-600 pl-2">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Container */}
          <div className="w-full md:w-2/5">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105 duration-300">
              <img
                draggable="false"
                className="w-full h-auto rounded-lg hover:grayscale transition-all duration-300"
                src={profileImage}
                alt="Amit Mamgai"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full md:w-3/5 mt-8 md:mt-0">
            <h3 className="text-3xl font-bold text-gray-800">I'm Amit</h3>
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 font-medium rounded-full text-sm mt-2 mb-4">
              Software Engineer
            </span>

            <p className="text-gray-700 mb-6 leading-relaxed">
              I am a Software Engineer based in Delhi, India.
              I am very passionate about improving my coding skills & developing applications & websites.
              I build Apps and Websites using React Native & MERN Stack.
              Working for myself to improve my skills.
              Love to build Full-Stack Projects.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
              <div className="flex items-center mb-3">
                <Mail className="w-5 h-5 text-blue-600 mr-2" />
                <p className="text-gray-700">
                  <span className="font-semibold">Email: </span>
                  amit.mamgai2k@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <p className="text-gray-700">
                  <span className="font-semibold">Location: </span>
                  Delhi, India - 110061
                </p>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1YRHSvKVjslx-yeb4gQ9xjyT8sKdejkXl/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-all hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
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
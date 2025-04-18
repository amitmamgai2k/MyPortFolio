import React from 'react';
import { GraduationCap } from 'lucide-react';
import Pg from '../assets/images/educat/PG.png';
import Bsc from '../assets/images/educat/UG.jpeg';
import tweleve from '../assets/images/educat/sch.jpg';
import ten from '../assets/images/educat/scho.jpeg';



const Education = () => {
  return (
    <section className="bg-gray-50 py-16" id="education">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          <GraduationCap size={40} className="inline mr-2" />
          My <span className="text-blue-600">Education</span>
        </h1>

        <p className="text-center text-gray-600 italic mb-12">
          "An investment in knowledge pays the best interest." — Benjamin Franklin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* MCA */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img
                className="w-full h-full object-cover"
                src={Pg}
                alt="University School of Information"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Master in Computer Application (MCA)</h3>
              <p className="text-gray-600 mt-2">University School of Information, Communication and Technology | GGSIPU</p>
              <h4 className="text-gray-500 mt-4">2024-2026 | Appearing</h4>
            </div>
          </div>

          {/* BSc */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img
                className="w-full h-full object-cover"
                src={Bsc}
                alt="Bhaskaracharya College"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Bachelor of Science in Instrumentation</h3>
              <p className="text-gray-600 mt-2">Bhaskaracharya College Of Applied Sciences | DU</p>
              <h4 className="text-gray-500 mt-4">2021-2024 | Completed</h4>
              <h4 className="text-gray-500 mt-1">Marks Obtained - 85%</h4>
            </div>
          </div>

          {/* Intermediate */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img
                className="w-full h-full object-cover"
                src={tweleve}
                alt="Govt. Sarvodaya Bal Vidyalaya"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Intermediate</h3>
              <p className="text-gray-600 mt-2">Govt. Sarvodaya Bal Vidyalaya, Bharthal, Bijwasan, New Delhi | CBSE</p>
              <h4 className="text-gray-500 mt-4">2020-2021 | Completed</h4>
              <h4 className="text-gray-500 mt-1">Marks Obtained - 87%</h4>
            </div>
          </div>

          {/* Matriculate */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img
                className="w-full h-full object-cover"
                src={ten}
                alt="Govt. Sarvodaya Bal Vidyalaya"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Matriculate</h3>
              <p className="text-gray-600 mt-2">Govt. Sarvodaya Bal Vidyalaya, Bharthal, Bijwasan, New Delhi | CBSE</p>
              <h4 className="text-gray-500 mt-4">2018-2019 | Completed</h4>
              <h4 className="text-gray-500 mt-1">Marks Obtained - 89%</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
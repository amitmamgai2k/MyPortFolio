import { Award } from 'lucide-react';
import React from 'react';

function Skills() {
  const skillsData = [
    {
        "name": "ReactJS",
        icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "ExpressJS",
        "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        "name": "Redux",
        "icon": "https://img.icons8.com/color/48/000000/redux.png"
    },
    {
        "name": "Firebase",
        "icon": "https://img.icons8.com/color/48/000000/firebase.png"
    },
    {
        "name": "React Native",
        "icon": "https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
    },
    {
        "name": "TailwindCSS",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
    },
    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "Java",
        "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    },
    {
        "name": "Python",
        "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
        "name": "C++",
        "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "Netlify",
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/?size=100&id=106564&format=png&color=000000"
    },

  ];



  return (
    <section id="skills" className="py-6 rounded-xl bg-opacity-40 px-4 bg-gradient-to-b from-red-200 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-flex items-center justify-center">
            <Award  size={40} className="text-orange-400 mr-3" />
            Skills <span className="text-orange-400 ml-2">& Technologies</span>
          </h2>
          <div className="h-1 w-24 bg-orange-400 mx-auto mt-4"></div>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-gray-900 text-white  rounded-lg shadow-lg  p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex flex-col items-center">

                  <img src={skill.icon} alt={skill.name} className="h-12 w-12 mb-2" />

                <span className="font-medium mt-2">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
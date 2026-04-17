import { useEffect, useState } from "react";

function Skills() {
  const Skills = [
    {
      name: "Html",
      level: "90",
    },
    {
      name: "Css",
      level: "80",
    },
    {
      name: "Javacript",
      level: "80",
    },
    {
      name: "React",
      level: "70",
    },
    {
      name: "Mongo db",
      level: "40",
    },
    {
      name: "Node js",
      level: "40",
    },
  ];

  const education = [
    {
      year: "2018-2021",
      title: "Computer Application",
      institution: "Tagore College Of Arts and Science",
      description:
        "BCA graduate passionate about building efficient and user-friendly web applications.",
    },
    {
      year: "jul 2025-Feb 2026",
      title: "MERN Stack",
      institution: "Guvi",
      description:
        "Trained in the MERN Stack at GUVI with practical experience building full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio) {
          setIsVisible(true);
          Skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }));
            }, index * 200);
          });
        }
      },
      {
        threshold: 0.3,
      },
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section id="skills" className="py-24 bg-slate-900 overflow-hidden flex items-center justify-center relative">
        {/* animation background */}

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-green-600/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-transparent via-green-600/5 to-transparent"></div>
        </div>

        <div className="w-11/12 lg:w-4/5 px-6 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* right side */}
            <div className={` transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <div className="mb-12">
                <p className="text-lg text-green-400 font-semibold capitalize mb-4">
                  Qulification
                </p>
                <h3 className="text-4xl  text-green-400 font-bold capitalize mb-6">
                  Education
                </h3>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => {
                  return (
                    <div key={index} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                      <div className="border-l-2 border-green-400 relative pl-6 group">
                        <span className="absolute bg-green-400 block w-4 h-4 -left-2 rounded-full group-hover:scale-125 transition-all duration-300" />
                        <span className="text-green-500 group-hover:text-green-400 text-sm duration-300 transition-all font-medium capitalize mb-2">
                          {edu.year}
                        </span>
                        <h3 className="text-xl font-bold capitalize text-white group-hover:text-green-300 duration-300 transition-all mb-2">
                          {edu.title}
                        </h3>
                        <p className="text-gray-400 text-lg capitalize font-medium group-hover:text-gray-300 transition-all duration-300 mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-gray-300 capitalize group-hover:text-white transition-all duration-300">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* lift side */}
            <div className={` transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="mb-12">
                <p className="text-lg text-white font-semibold capitalize mb-4">
                  Expert
                </p>
                <h3 className="text-4xl  text-green-400 font-black capitalize mb-6">
                  My Skills
                </h3>
              </div>
              <div className="space-y-6">
                {Skills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className={`transition-all duration-1000 space-y-2`}
                      style={{transitionDelay:`${index*150}ms`}}
                    >
                      <div className="flex items-center justify-between group">
                        <span className="text-white font-medium capitalize group-hover:text-green-400 duration-300 transition-all">
                          {skill.name}
                        </span>
                        <span className="text-green-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`bg-linear-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

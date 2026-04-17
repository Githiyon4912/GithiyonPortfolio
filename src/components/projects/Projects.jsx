import { SquareArrowOutUpRight } from "lucide-react";
import { movieApp, inovoiceApp, taskApp } from "../../assets/images";
import { useState, useEffect } from "react";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      },
    );

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Movie Review App",
      description:
        "A modern movie browsing application built using React, styled with Tailwind CSS for a clean and responsive UI. It leverages React Router DOM for seamless navigation between pages like Home, Movie Details, and Favorites. The app integrates Lucide Icons to enhance visual appeal and user interaction. Users can explore movies, view details, and enjoy a smooth, dynamic experience.",
      image: movieApp,
      technologies: ["React", "Tailwindcss", "React router", "Lucide icon"],
      category: "Frontend",
      feature: true,
    },
    {
      id: 2,
      title: "Invoice Builder",
      description:
        "A feature-rich Invoice Builder application developed using React.js and styled with Tailwind CSS for a clean, responsive UI. It utilizes React Router for seamless navigation and Redux Toolkit for efficient state management. The app allows users to create, edit, and manage invoices with real-time updates. Data is persistently stored using Local Storage, ensuring invoices remain even after page refresh.",
      image: inovoiceApp,
      technologies: [
        "React",
        "Tailwindcss",
        "React router",
        "Lucide icon",
        "Redux",
      ],
      category: "Frontend",
      feature: true,
    },
    {
      id: 3,
      title: "Task Management app",
      description:
        "A full-stack Task Management application built using React.js and styled with Tailwind CSS for a clean and responsive user interface. It uses Node.js and Express.js to handle backend APIs, with MongoDB for efficient data storage. Axios is integrated for seamless communication between frontend and backend. Users can create, update, and track tasks with real-time interaction and smooth performance.",
      image: taskApp,
      technologies: [
        "React",
        "Tailwindcss",
        "Node js",
        "MongoDB",
        "Express js",
      ],
      category: "full-stack",
      feature: true,
    },
  ];
  return (
    <>
      <section
        id="projects"
        className="bg-slate-950 py-24 relative flex items-center justify-center overflow-hidden z-10"
      >
        {/* animation background */}

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-green-600/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-transparent via-green-600/5 to-transparent"></div>
        </div>

        <div className={`w-11/12 lg:w-4/5 px-6 relative overflow-hidden `}>
          <div
            className={`text-center transition-all duration-1000 mb-16 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-green-400 text-lg font-semibold capitalize mb-4">
              Protfolio
            </p>
            <h2 className="text-4xl md:text-5xl text-white capitalize font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-300 tet-lg max-w-md mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>

          <div
            className={`w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {projects?.map((project, index) => {
              return (
                <div
                  key={project.id}
                  className={`group bg-slate-900 border border-slate-700 shadow-md  hover:shadow-lg hover:border-green-500 hover:scale-105 rounded-xl overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                >
                  <div className="w-full h-70 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="w-8 h-8 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-all duration-300 cursor-pointer">
                        <i className="fa-brands fa-github text-gray-700 text-lg"></i>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-all duration-300 cursor-pointer">
                        <SquareArrowOutUpRight className="size-4 text-gray-700 text-xl" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="inline-block text-gray-400 font-medium bg-slate-800 px-2 py-1 rounded-full capitalize text-xs mb-3">
                      {project.category}
                    </span>
                    <h4 className="text-lg text-white capitalize font-bold hover:text-green-400 transition-all duration-300 mb-4">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm font-medium line-clamp-2 mb-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-1 mb-4">
                      {project?.technologies?.map((tech, index) => {
                        return (
                          <span
                            key={index}
                            className="text-white bg-green-600 text-xs font-medium capitalize py-1 px-2 rounded-full"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`text-center transition-all duration-1000 delay-1000 mt-5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button className="py-4 px-8 rounded-xl bg-green-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 hover:bg-green-700 transition-all duration-300 cursor-pointer capitalize">
              view all projects
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;

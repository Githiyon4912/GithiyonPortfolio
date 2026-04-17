import { useEffect, useState } from "react";
import { githiyon } from "../../assets/images";

function About() {
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

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section
        id="about"
        className="relative flex items-center justify-center bg-slate-950 py-24 overflow-hidden"
      >
        {/* animation background */}

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-green-600/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
        </div>

        <div className={`w-11/12 lg:w-4/5 px-6 py-4 relative`}>
          <div className="w-full relative px-6 z-10">
            <div className="w-full grid lg:grid-cols-2 items-center justify-items-center gap-16">
              <div
                className={`relative  transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "}`}
              >
                <div className="w-full group max-w-md rounded-2xl border-4 border-green-500  hover:bg-green-400 transition-all duration-300 relative p-2">
                  <img
                    src={githiyon}
                    alt="githiyon"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 duration-300 transition-all"
                  />
                  <div className="absolute inset-2 rounded-xl bg-linear-to-tr from-gray-600/10 to-transparent opacity-0 group-hover:opacity-100 duration-300 transition-all"></div>
                  <div className="absolute -top-6 -right-6 w-12 h-12 rounded bg-red-600/20"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 rounded-full bg-blue-600/20"></div>
                </div>
              </div>

              {/* right side */}

              <div
                className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "}`}
              >
                <div className="space-y-4">
                  <p className="text-green-400 font-semibold text-lg capitalize">
                    About us
                  </p>
                  <h2 className="text-4xl lg:text-5xl text-white font-bold animate-pulse capitalize leading-tight">
                    Why hire me for your <br /> <span>next project?</span>
                  </h2>
                  <p className="text-lg text-green-400 capitalize font-semibold">
                    Web developer
                  </p>
                </div>

                <div className="space-y-6 leading-relaxed">
                  <p
                    className={`text-gray-300 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "}`}
                  >
                    I am Githiyon, a Full-Stack Web Developer with hands-on
                    experience building modern web applications using the MERN
                    stack MongoDB, Express.js, React.js, and Node.js.
                  </p>
                  <p
                    className={`text-gray-300 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "}`}
                  >
                    Having completed a comprehensive full-stack development
                    program, I have developed a solid foundation in both
                    frontend and backend development, including RESTful API
                    design, secure authentication systems, and responsive user
                    interfaces.
                  </p>
                  
                </div>
                <div
                  className={`grid grid-cols-2 gap-8 py-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "}`}
                >
                  <div className="group">
                    <h6 className="text-lg text-white font-semibold group-hover:text-green-400 duration-300 transition-all capitalize tracking-wider">
                      Name
                    </h6>
                    <p className="text-gray-300 capitalize">Githiyon m</p>
                  </div>
                  <div className="group">
                    <h6 className="text-lg text-white font-semibold group-hover:text-green-400 duration-300 transition-all capitalize tracking-wider">
                      location
                    </h6>
                    <p className="text-gray-300 capitalize">Chennai</p>
                  </div>
                  <div className="group">
                    <h6 className="text-lg text-white font-semibold group-hover:text-green-400 duration-300 transition-all capitalize tracking-wider">
                      Birthday
                    </h6>
                    <p className="text-gray-300 capitalize">
                      04 September 2000
                    </p>
                  </div>
                  <div className="group">
                    <h6 className="text-lg text-white font-semibold group-hover:text-green-400 duration-300 transition-all capitalize tracking-wider">
                      Email
                    </h6>
                    <p className="text-gray-300">githiyonm4912@gmail.com</p>
                  </div>
                </div>

                <div
                  className={`flex flex-wrap gap-8 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "}`}
                >
                  <button className="px-8 py-3 rounded-lg text-white uppercase cursor-pointer bg-green-600 shadow-lg hover:shadow-xl hover:bg-green-700 hover:scale-110 transition-all duration-300">
                    Download cv
                  </button>
                  <button className="px-8 py-3 rounded-lg text-gray-300 uppercase cursor-pointer border-2 border-slate-700 shadow-lg hover:shadow-xl hover:border-green-400 hover:text-green-400 hover:scale-110 transition-all duration-300">
                    learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

import { MoveRight, Play } from "lucide-react";
import { githiyon } from "../../assets/images";
import { useEffect, useState } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-900 pt-20 relative overflow-hidden"
      >
        {/* animation background */}

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-green-600/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-transparent via-green-600/5 to-transparent"></div>
        </div>

        <div className="w-11/12 lg:w-4/5 px-6 py-20 z-10 relative">
          <div className="grid lg:grid-cols-2 items-center justify-center gap-16">
            {/* left side */}
            <div className="space-y-8 max-w-lg">
              <div className="space-y-4">
                <p
                  className={`text-green-400 text-lg font-semibold transition-all duration-1000 capitalize ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  Get Ready to Start Work
                </p>
                <h1
                  className={`text-5xl lg:text-7xl font-black text-white leading-tight transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  I'm
                  <span className="text-green-400"> Developer</span> <br />
                  <span>Githiyon</span>
                </h1>
                <p
                  className={`text-lg text-gray-300 leading-relaxed font-semibold max-w-lg transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  I build full-stack web applications that are fast, secure, and
                  scalable. With expertise across the entire MERN stack, I
                  handle everything from database design to UI.
                </p>
                <div
                  className={`flex items-center gap-4 pt-4 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <button
                    onClick={() =>
                      document
                        .querySelector("#about")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-8 py-4 bg-green-600 text-white text-base rounded-lg flex items-center justify-center gap-2 uppercase cursor-pointer transition-all duration-300 hover:bg-green-700 hover:scale-105 group"
                  >
                    learn more{" "}
                    <MoveRight className="size-5 group-hover:translate-x-1 transition-transform " />
                  </button>
                  <button className="px-8 py-4 text-white border-2 border-gray-700 rounded-lg flex items-center justify-center gap-2 uppercase cursor-pointer transition-all duration-300 hover:border-green-600 hover:text-green-400 hover:scale-105 group">
                    <Play className="size-5 group-hover:translate-x-1 transition-transform " />{" "}
                    play video
                  </button>
                </div>
                <div
                  className={`flex items-center gap-4 pt-6 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <a
                    href="https://linkedin.com/in/githiyon-m"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-green-400 hover:scale-105 hover:rotate-6 transition-all duration-300 group"
                  >
                    <i className="fa-brands fa-linkedin-in group-hover:text-white"></i>
                  </a>
                  <a
                    href="https://github.com/GITHIYON49"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-green-400 hover:scale-105 hover:rotate-6 transition-all duration-300 group"
                  >
                    <i className="fa-brands fa-github group-hover:text-white"></i>
                  </a>
                  <a
                    href="mailto:githiyonm4912@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-green-400 hover:scale-105 hover:rotate-6 transition-all duration-300 group"
                  >
                    <i className="fa-regular fa-envelope group-hover:text-white"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* right side */}

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative">
                <div className="w-full max-w-lg overflow-hidden rounded-2xl hover:scale-105 duration-300 transition-all relative">
                  <img
                    src={githiyon}
                    alt="githiyon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-12 w-20 h-20 rounded-2xl bg-green-600 opacity-20"></div>
                <div className="absolute -bottom-4 -left-12 w-16 h-16 rounded-full bg-blue-600 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

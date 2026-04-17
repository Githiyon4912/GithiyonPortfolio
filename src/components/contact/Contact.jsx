import { useState,useEffect } from "react";
import { Mail, Phone, MapPin,Send } from "lucide-react";

function Contact() {
    const [isVisible,setIsVisible] = useState(false);
    
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
    
        const element = document.getElementById("contact");
        if (element) {
          observer.observe(element);
        }
        return () => observer.disconnect();
      }, []);
    
  return (
    <>
      <section
        id="contact"
        className="py-24 bg-slate-800 relative overflow-hidden flex items-center justify-center"
      >
        {/* animation background */}

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-green-600/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-transparent via-green-600/5 to-transparent"></div>
        </div>

        <div className="w-11/12 lg:w-4/5 px-6 relative overflow-hidden z-10">
          <div className={`text-center mb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-lg text-green-400 font-semibold capitalize mb-4">
              Get in touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold capitalize mb-6 text-white">
              let's work together
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold text-white capitalize mb-6">
                contact information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting
                projects. Wheather you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    info: "githiyonm4912@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "+91 9003255653",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    info: "Chennai",
                  },
                ].map((contact, index) => {
                  return (
                    <div
                      key={index}
                      className="p-4 gap-4 bg-slate-900 rounded-lg border border-slate-700 cursor-pointer hover:bg-slate-700 flex items-center hover:border-green-600 duration-300 transition-all transform group hover:scale-105"
                      style={{ animationDelay: `${index * 200 + 300}ms` }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center group-hover:bg-green-500 group-hover:rotate-6 transition-all dura">
                        <contact.icon className="size-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold group-hover:text-gray-300 transition-all duration-300">
                          {contact.title}
                        </p>
                        <p className="text-gray-400 group-hover:text-gray-200 transition-all duration-300">
                          {contact.info}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={`pt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h4 className="text-lg text-white font-semibold mb-4">
                  Follow Me
                </h4>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-green-400 hover:scale-105 hover:rotate-6 transition-all duration-300 group"
                  >
                    <i className="fa-brands fa-linkedin-in group-hover:text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-green-400 hover:scale-105 hover:rotate-6 transition-all duration-300 group"
                  >
                    <i className="fa-brands fa-github group-hover:text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-green-400 hover:scale-105 hover:rotate-6 transition-all duration-300 group"
                  >
                    <i className="fa-regular fa-envelope group-hover:text-white"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* right side */}

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                <h3 className="text-white text-2xl font-bold mb-6">
                  Send Message
                </h3>
                <form action="">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="text-sm text-white font-semibold mb-2 block group-hover:text-green-400 duration-300 transition-all"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full rounded-lg px-4 py-3 text-white bg-slate-800 border border-slate-700 group-hover:border-green-500 transition-all duration-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="text-sm text-white font-semibold mb-2 block group-hover:text-green-400 duration-300 transition-all"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full rounded-lg px-4 py-3 text-white bg-slate-800 border border-slate-700 group-hover:border-green-500 transition-all duration-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="group mt-6">
                  <label
                    htmlFor="subject"
                    className="text-sm text-white font-semibold mb-2 block group-hover:text-green-400 duration-300 transition-all"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Discussion"
                    className="w-full rounded-lg px-4 py-3 text-white bg-slate-800 border border-slate-700 group-hover:border-green-500 transition-all duration-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
                  />
                </div>
                <div className="group mt-6">
                  <label
                    htmlFor="subject"
                    className="text-sm text-white font-semibold mb-2 block group-hover:text-green-400 duration-300 transition-all"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Tell Me About Your Project"
                    className="w-full rounded-lg px-4 py-3 text-white resize-none min-h-28 bg-slate-800 border border-slate-700 group-hover:border-green-500 transition-all duration-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
                  />
                </div>
                 <button className="w-full px-8 py-4 mt-6 bg-green-600 text-white text-base rounded-lg flex items-center justify-center gap-2 uppercase cursor-pointer transition-all duration-300 hover:bg-green-700 hover:scale-105 group">
                    Send Message
                    <Send className="size-5 group-hover:translate-x-1 transition-transform " />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

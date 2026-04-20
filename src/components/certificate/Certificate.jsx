import { useState, useEffect } from "react";
import { ExternalLink, Award, X } from "lucide-react";
import { guviCertificate } from "../../assets/images";

function Certificate() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const element = document.getElementById("certificate");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const certificate = {
    title: "MERN Stack - Full Stack Development Course",
    issuer: "GUVI",
    date: "Feb 2026",
    link: "https://drive.google.com/file/d/1OorfxI8AEgurCVX2bs4d4krMLC0LEw9D/view?usp=sharing",
    image: guviCertificate,
  };

  return (
    <>
      <section
        id="certificate"
        className="py-24 bg-slate-900 relative overflow-hidden flex items-center justify-center"
      >
        {/* Background animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-green-600/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        </div>

        <div className="w-11/12 lg:w-4/5 px-6 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="text-lg text-green-400 font-semibold capitalize mb-4">
              My Achievement
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold capitalize mb-6 text-white">
              Certification
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A certification I've earned to validate my skills
            </p>
          </div>

          {/* Card */}
          <div
            className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300 group">
              <div className="grid md:grid-cols-2">

                {/* Left - Certificate Image */}
                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <img
                    src={certificate.image}
                    alt="Certificate"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 min-h-52"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold bg-green-600 px-4 py-2 rounded-lg">
                      Click to Preview
                    </span>
                  </div>
                </div>

                {/* Right - Certificate Info */}
                <div className="p-8 flex flex-col justify-center space-y-6">
                  {/* Icon + Badge */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center">
                      <Award className="size-6 text-green-400" />
                    </div>
                    <span className="text-xs bg-green-600/20 text-green-400 px-3 py-1 rounded-full font-medium">
                      {certificate.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-white font-bold text-xl leading-snug mb-2">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Issued by{" "}
                      <span className="text-green-400 font-semibold">
                        {certificate.issuer}
                      </span>
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full px-6 py-3 bg-green-600 text-white text-sm rounded-lg flex items-center justify-center gap-2 uppercase font-medium cursor-pointer transition-all duration-300 hover:bg-green-700 hover:scale-105"
                    >
                      Verify Certificate
                      <ExternalLink className="size-4" />
                    </a>
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full px-6 py-3 border-2 border-slate-600 text-gray-300 text-sm rounded-lg flex items-center justify-center gap-2 uppercase font-medium cursor-pointer transition-all duration-300 hover:border-green-500 hover:text-green-400 hover:scale-105"
                    >
                      Preview Image
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Full Image Preview */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 cursor-pointer z-10"
            >
              <X className="size-5" />
            </button>

            {/* Certificate Image */}
            <img
              src={certificate.image}
              alt="Certificate Preview"
              className="w-full h-auto rounded-2xl border border-slate-700"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Certificate;
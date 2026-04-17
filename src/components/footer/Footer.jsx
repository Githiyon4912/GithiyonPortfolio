import { Heart } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="py-12 bg-slate-900 border-t border-slate-800 relative overflow-hidden flex items-center justify-center">
        {/* animation background */}

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-green-600/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
        </div>

        <div className="w-11/12 lg:w-4/5 px-6 relative">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:text-start text-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-2 group cursor-pointer">
                <span className="text-green-500 group-hover:text-green-400 transition-all duration-300 uppercase">
                  Githiyon
                </span>
                <span className="text-gray-300 group-hover:text-white transition-all duration-300 uppercase">
                  {" "}
                  M
                </span>
                <span className="text-green-500 group-hover:text-green-400 transition-all duration-300 uppercase">
                  .
                </span>
              </div>
              <p className="text-gray-400 hover:text-gray-300 transition-all duration-300">
                Web Developer
              </p>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <span>Made With</span>
              <Heart className="text-green-400 size-4 fill-current" />
              <span>by Githiyon</span>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
              &#169; {new Date().getFullYear()} Githiyon. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "../resumePdf/ResumePDF";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behaviour: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Certificate",
      href: "#certificate",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${isScrolled ? "bg-slate-800 border-slate-800 border" : "bg-transparent"}`}
      >
        <nav className="w-11/12 lg:w-4/5 mx-auto xl:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl lg:text-2xl font-bold uppercase">
              <span className="text-green-400">Githiyon</span>
              <span className="text-white"> M</span>
              <span className="text-green-400">.</span>
            </h1>
            <ul className="hidden md:flex items-center justify-center space-x-5 lg:space-x-8">
              {navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 text-sm lg:text-base font-medium cursor-pointer hover:text-green-400 group relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 group-hover:w-full group-hover:bg-green-400 transition-all duration-300 rounded-lg"></span>
                  </li>
                );
              })}
            </ul>
            <PDFDownloadLink
              document={<ResumePDF />}
              fileName="Githiyon_M_Resume.pdf"
            >
              {({ loading }) => (
                <button className="hidden tracking-wider md:flex gap-2 text-sm lg:text-base font-medium text-white bg-green-600 px-5 lg:px-6 py-2.5 rounded-lg shadow-lg capitalize hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                  {loading ? "Preparing..." : "Download cv now"}
                </button>
              )}
            </PDFDownloadLink>
            <button
              className="md:hidden text-white cursor-pointer transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="size-7" />
              ) : (
                <Menu className="size-7" />
              )}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 px-2 rounded-lg shadow-lg bg-slate-800 border-t border-slate-800">
              <ul>
                {navItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-300 py-3 px-4 text-left hover:bg-slate-700 hover:text-green-400 rounded-lg transition-all duration-300"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              <PDFDownloadLink
                document={<ResumePDF />}
                fileName="Githiyon_M_Resume.pdf"
              >
                {({ loading }) => (
                  <button className="text-sm mt-4 w-full bg-green-600 py-2.5 text-white rounded-lg transition-all duration-300 hover:bg-green-700">
                    {loading ? "Preparing..." : "Download cv now"}
                  </button>
                )}
              </PDFDownloadLink>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;

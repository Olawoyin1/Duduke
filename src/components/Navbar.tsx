import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full py-4 sticky top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/98 shadow" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          {/* Desktop Navbar */}
          <div className="hidden cf font-extrabold md:flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-[#202340] sf">
            Portfolio<span className="pc">.</span>
          </Link>
            <nav className="flex space-x-6 text-sm font-semibold sf uppercase">
              <Link to="/" className="hover:text-[#F8B44F] transition ease-in">Home</Link>
              <Link to="/about" className="hover:text-[#F8B44F] transition ease-in">About</Link>
              <Link to="/services" className="hover:text-[#F8B44F] transition ease-in">Services</Link>
              <Link to="/projects" className="hover:text-[#F8B44F] transition ease-in">Project</Link>
              <Link to="/certificates" className="hover:text-[#F8B44F] transition ease-in">Certification</Link>
              <Link to="/contact" className="hover:text-[#F8B44F] transition ease-in">Contact</Link>
            </nav>
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden flex justify-between items-center py-4 text-black">
            <Link to="/" className="cf font-bold">WENA AFFILIATE</Link>
            <button onClick={toggleMenu}>
              {isOpen ? <FiX size={26} /> : <HiOutlineMenuAlt4 size={26} />}
            </button>
          </div>
        </div>

        {/* Slide-in Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white text-black transform transition-transform duration-300 z-40 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end items-center px-4 py-4">
            <button onClick={toggleMenu}>
              <FiX size={26} />
            </button>
          </div>
          <div className="px-8 flex flex-col pt-8 space-y-6 text-lg sf  font-bold uppercase">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
            <Link to="/projects" onClick={toggleMenu}>Project</Link>
            <Link to="/certificates" onClick={toggleMenu}>Certificates</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </div>
          <div className="absolute bottom-4 left-8">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Azeez Aduke - All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </header>
    </>
  );
};

export default MainNavbar;

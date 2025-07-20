import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollToSectionId, setScrollToSectionId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && scrollToSectionId) {
      const section = document.getElementById(scrollToSectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setScrollToSectionId(null); // Reset the section ID after scrolling
      }
    }
  }, [location, scrollToSectionId]);

  const handleNavClick = (sectionId, path) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      setScrollToSectionId(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-5 md:px-20 flex justify-between items-center z-50">
      <div className="text-2xl font-bold text-gray-900">
        <Link to="/">Jediolio</Link>
      </div>

      <div className="hidden md:flex space-x-6">
        <Link
          to="/"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("services", "/services");
          }}
        >
          Services
        </Link>
        <Link
          to="/"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("testimonial", "/testimonial");
          }}
        >
          Testimonial
        </Link>
        <Link
          to="/"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("review", "/review");
          }}
        >
          Review
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-900 text-2xl"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to="/"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("services", "/services");
            }}
          >
            Services
          </Link>
          <Link
            to="/"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("testimonial", "/testimonial");
            }}
          >
            Testimonial
          </Link>
          <Link
            to="/"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("review", "/review");
            }}
          >
            Review
          </Link>
{/*           <Link
            to="/about"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

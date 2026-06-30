import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function Navbar() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500
      ${scrolled
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6"
        }`}
    >

      <div className="container-custom flex justify-between items-center">

        <a href="/">
          <img
            src={
              scrolled
                ? "/images/logo-dark.png"
                : "/images/logo-white.png"
            }
            alt="Menspool Logo"
            className="h-16 w-auto"
          />
        </a>

        <ul
          className={`hidden md:flex gap-10 font-medium ${scrolled ? "text-gray-800" : "text-white"
            }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li className="relative group">
  <button className="flex items-center gap-1 hover:text-cyan-500">
    Services
    <ChevronDown size={16} />
  </button>

  <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
    <div className="w-64 bg-white rounded-xl shadow-2xl border overflow-hidden">

      <Link
        to="/pool-engineering"
        className="block px-6 py-4 text-gray-700 hover:bg-cyan-500 hover:text-white"
      >
        Pool Engineering
      </Link>

      <Link
        to="/pool-care"
        className="block px-6 py-4 text-gray-700 hover:bg-cyan-500 hover:text-white"
      >
        Pool Care
      </Link>

      <Link
        to="/pool-shop"
        className="block px-6 py-4 text-gray-700 hover:bg-cyan-500 hover:text-white"
      >
        Pool Shop
      </Link>

    </div>
  </div>

</li>
          {/* <li>
            <Link to="/projects">Projects</Link>
          </li> */}

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button className="bg-cyan-500 text-white px-6 py-3 rounded-full">
          <Link
            to="/contact"
            className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition"
          >
            Get Quote
          </Link>

        </button>

      </div>

    </nav>
  )
}

export default Navbar;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {

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
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

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
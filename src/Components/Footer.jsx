import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#081120] text-white">

      {/* Top */}

      <div className="container-custom py-20">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* Company */}

          <div>

            <img
              src="images/logo-white.png"
              alt="Menspool"
              className="h-16 mb-6"
            />

            <p className="text-white/70 leading-8">
              Menspool has been Singapore's trusted
              swimming pool engineering company since
              1984, delivering premium aquatic
              environments with innovation and quality.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fmenspoolpteltd"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/70">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/projects">Projects</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-white/70">

              <li>Pool Engineering</li>

              <li>Pool Care</li>

              <li>Pool Shop</li>

              <li>Pool Renovation</li>

              <li>Water Features</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <FaPhoneAlt className="text-cyan-400 mt-1"/>

                <span className="text-white/70">
                  +65 6266 1211
                </span>
                <br/>
                

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-cyan-400 mt-1"/>

                <span className="text-white/70">
                  info@menspool.com.sg
                </span>

              </div>

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-cyan-400 mt-1"/>

                <span className="text-white/70">
                  Singapore
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="container-custom py-6 flex flex-col lg:flex-row justify-between items-center">

          <p className="text-white/60">
            © 2026 Menspool. All Rights Reserved.
          </p>

          <div className="flex gap-8 mt-4 lg:mt-0">

            <a href="#" className="text-white/60 hover:text-cyan-400">
              Privacy Policy
            </a>

            <a href="#" className="text-white/60 hover:text-cyan-400">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
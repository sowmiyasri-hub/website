import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section
      className="relative h-[70vh] lg:h-[85vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/about-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-cyan-900/60"></div>

      {/* Decorative Blur */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[6px] text-cyan-300 font-semibold"
        >
          Since 1984
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-white text-5xl md:text-7xl font-bold leading-tight"
        >
          Building Singapore's
          <br />

          <span className="text-cyan-400">
            Finest Swimming Pools
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-8 text-white/80 max-w-3xl mx-auto text-lg leading-8"
        >
          For over four decades, Menspool has transformed
          residential, commercial and luxury developments with
          innovative engineering, premium craftsmanship and
          world-class pool maintenance solutions.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .7 }}
          className="flex flex-wrap justify-center gap-5 mt-12"
        >

          <Link
            to="/contact"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-semibold transition duration-300 shadow-xl"
          >
            Get A Consultation
          </Link>

          <Link
            to="/gallery"
            className="px-8 py-4 border border-white/30 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-900 transition duration-300"
          >
            View Projects
          </Link>

        </motion.div>

        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1 }}
          className="mt-20 inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-8 py-3 rounded-full border border-white/20"
        >
          <Link
            to="/"
            className="text-white/80 hover:text-cyan-400"
          >
            Home
          </Link>

          <span className="text-cyan-400">
            /
          </span>

          <span className="text-white">
            About Us
          </span>

        </motion.div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

    </section>
  );
}

export default AboutHero;
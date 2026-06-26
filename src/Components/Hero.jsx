import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Videos/pool.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">

        <div className="container-custom pl-10 md:pl-24 lg:pl-32">

        

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              text-white
              font-bold
              leading-tight
              max-w-5xl
              text-5xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Crafting Extraordinary
            <br />
            Aquatic Experiences
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="
              text-white/90
              text-lg
              md:text-xl
              max-w-2xl
              mt-6
              leading-relaxed
            "
          >
            Singapore's trusted swimming pool engineering company
            since 1984, delivering luxury swimming pools,
            spas, water features and complete aquatic solutions
            for residential, commercial and hospitality projects.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-full text-white font-medium">
              Explore Projects
            </button>

            <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-medium">
              Contact Us
            </button>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
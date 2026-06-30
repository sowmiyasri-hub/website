import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function EngineeringHero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-cyan-900/50"></div>

      {/* Decorative Blur */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[6px] text-cyan-400 font-semibold"
        >
          Pool Engineering
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="text-white text-5xl md:text-7xl font-bold leading-tight mt-6"
        >
          Precision.
          <br />
          Quality.
          <br />
          Innovation.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="text-gray-300 text-lg leading-8 mt-8 max-w-3xl"
        >
          Since 1984, Menspool has been Singapore's trusted swimming pool
          engineering company, delivering luxurious pools, water features,
          spa systems and turnkey aquatic solutions built to last.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="flex flex-wrap gap-5 mt-12"
        >
          <Link
            to="/contact"
            className="px-10 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300"
          >
            Get Consultation
          </Link>

          <Link
            to="/projects"
            className="px-10 py-4 rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition duration-300"
          >
            View Projects
          </Link>
        </motion.div>

      </div>

      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .8 }}
        className="hidden xl:block absolute right-20 bottom-20"
      >
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">

          <div className="text-cyan-400 text-5xl font-bold">40+</div>

          <div className="text-white mt-2 text-lg">
            Years of Engineering Excellence
          </div>

        </div>
      </motion.div>

    </section>
  );
}

export default EngineeringHero;
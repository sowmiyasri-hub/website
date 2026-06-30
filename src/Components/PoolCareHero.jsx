import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaUsers,
  FaTools,
  FaAward,
} from "react-icons/fa";

function PoolCareHero() {
  return (
    <section
      className="relative h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/poolshop-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-cyan-900/50"></div>

      {/* Blur */}

      <div className="absolute -left-32 top-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]"></div>

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[180px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="uppercase tracking-[6px] text-cyan-400 font-semibold">
             <img src="/images/swimspa.png" className="w-35 h-35 inline-block mr-2"/>
            </span>

            <h1 className="text-6xl lg:text-7xl font-black text-white mt-6 leading-tight">
              Professional
              <br />
              Pool Care &
              <span className="text-cyan-400">
                {" "}Maintenance
              </span>
            </h1>

            <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">
              Keep your swimming pool crystal clear, hygienic and operating
              at peak performance with Menspool's premium maintenance,
              cleaning, repair and water treatment services.
            </p>

            <div className="mt-10 flex gap-5 flex-wrap">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
              >
                Get Free Consultation
              </Link>

              <Link
                to="/gallery"
                className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition"
              >
                View Projects
              </Link>
            </div>
          </motion.div>

          {/* Right Cards */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: <FaShieldAlt />,
                value: "40+",
                title: "Years Experience",
              },
              {
                icon: <FaUsers />,
                value: "1000+",
                title: "Satisfied Clients",
              },
              {
                icon: <FaTools />,
                value: "24/7",
                title: "Support",
              },
              {
                icon: <FaAward />,
                value: "Premium",
                title: "Quality Service",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-3xl">
                  {item.icon}
                </div>

                <h2 className="text-4xl font-bold text-white mt-6">
                  {item.value}
                </h2>

                <p className="text-slate-300 mt-3">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default PoolCareHero;
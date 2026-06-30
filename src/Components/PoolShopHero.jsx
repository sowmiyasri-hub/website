import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaAward,
  FaTruck,
  FaBoxes,
} from "react-icons/fa";

function PoolShopHero() {
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

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-cyan-900/50"></div>

      {/* Decorative Blur */}

      <div className="absolute -left-32 top-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[180px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="uppercase tracking-[6px] text-cyan-400 font-semibold">
              Pool Connect
            </span>

            <h1 className="text-6xl lg:text-7xl font-black text-white mt-6 leading-tight">
              Premium
              <br />
              Pool Products &
              <span className="text-cyan-400">
                {" "}Equipment
              </span>
            </h1>

            <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">
              Discover premium swimming pool products, pumps,
              filtration systems, chemicals and accessories from
              internationally trusted brands backed by Menspool's
              expertise.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
              >
                Contact Us
              </Link>

              <Link
                to="/gallery"
                className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-slate-900 transition"
              >
                View Projects
              </Link>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-6"
          >

            {[
              {
                icon: <FaShoppingCart />,
                value: "5000+",
                title: "Products",
              },
              {
                icon: <FaAward />,
                value: "40+",
                title: "Years Experience",
              },
              {
                icon: <FaTruck />,
                value: "Fast",
                title: "Delivery",
              },
              {
                icon: <FaBoxes />,
                value: "Premium",
                title: "Brands",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.05,
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

export default PoolShopHero;
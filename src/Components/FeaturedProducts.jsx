import { motion } from "framer-motion";
import {
  FaWater,
  FaFilter,
  FaFlask,
  FaLightbulb,
  FaSwimmingPool,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
  {
    icon: <FaWater />,
    title: "Pool Pumps",
    description:
      "Energy-efficient circulation pumps from internationally trusted brands for residential and commercial pools.",
   
  },
  {
    icon: <FaFilter />,
    title: "Filtration Systems",
    description:
      "High-performance sand filters, cartridge filters and media filtration systems for crystal-clear water.",
  },
  {
    icon: <FaFlask />,
    title: "Pool Chemicals",
    description:
      "Premium chlorine, pH balancing solutions, algaecides and specialty chemicals for healthy pool water.",
  },
  {
    icon: <FaLightbulb />,
    title: "LED Pool Lighting",
    description:
      "Modern underwater LED lighting systems to enhance aesthetics, safety and night-time ambience.",
  },
  {
    icon: <FaSwimmingPool />,
    title: "Cleaning Equipment",
    description:
      "Automatic cleaners, vacuum systems, skimmers and maintenance tools for effortless pool care.",
  },
  {
    icon: <FaTools />,
    title: "Accessories & Spare Parts",
    description:
      "Complete range of valves, fittings, ladders, drain covers and genuine replacement components.",
  },
];

function FeaturedProducts() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Product Categories
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Explore Our
            <span className="text-cyan-500"> Premium Products</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            We offer a comprehensive range of swimming pool products,
            equipment and accessories from leading global manufacturers
            for every type of aquatic project.
          </p>
        </motion.div>

        {/* Product Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group bg-white rounded-[30px] shadow-xl border border-slate-100 overflow-hidden hover:shadow-cyan-200 transition duration-500"
            >

              {/* Top Gradient */}

              <div className="h-2 bg-gradient-to-r from-cyan-500 to-sky-500"></div>

              <div className="p-10">

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center text-white text-4xl group-hover:rotate-6 transition duration-500">

                  {item.icon}

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">

                  {item.title}

                </h3>

                <p className="mt-5 text-slate-600 leading-8">

                  {item.description}

                </p>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center text-cyan-500 font-semibold hover:text-cyan-600"
                >
                  Enquire Now

                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition" />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;
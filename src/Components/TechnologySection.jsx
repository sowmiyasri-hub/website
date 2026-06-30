import { motion } from "framer-motion";
import {
  FaWater,
  FaBolt,
  FaIndustry,
  FaLeaf,
  FaTools,
  FaCogs,
} from "react-icons/fa";

const technologies = [
  {
    title: "Pentair",
    icon: <FaWater />,
    description:
      "Premium filtration, pumps and water treatment systems trusted worldwide.",
  },
  {
    title: "AstralPool",
    icon: <FaBolt />,
    description:
      "Innovative pool automation, lighting and energy-efficient technologies.",
  },
  {
    title: "Waterco",
    icon: <FaIndustry />,
    description:
      "Commercial filtration systems designed for maximum performance.",
  },
  {
    title: "Emaux",
    icon: <FaLeaf />,
    description:
      "Eco-friendly pool equipment with advanced engineering solutions.",
  },
  {
    title: "Hayward",
    icon: <FaTools />,
    description:
      "Reliable pool equipment and automation for residential and commercial projects.",
  },
  {
    title: "Davey",
    icon: <FaCogs />,
    description:
      "High-performance pumps and pressure systems built for durability.",
  },
];

function TechnologySection() {
  return (
    <section className="py-28 bg-gradient-to-b from-cyan-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Technology
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">

            World-Class
            <span className="text-cyan-500">
              {" "}Engineering Partners
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">

            We collaborate with internationally recognised manufacturers
            to deliver reliable, efficient and innovative swimming pool
            engineering solutions.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {technologies.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-[30px] shadow-xl border border-slate-100 p-10 hover:shadow-cyan-200 transition duration-500"
            >

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center text-white text-4xl">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">

                {item.title}

              </h3>

              <p className="mt-5 text-slate-600 leading-8">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TechnologySection;
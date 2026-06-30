import { motion } from "framer-motion";
import {
  FaDraftingCompass,
  FaSwimmingPool,
  FaWater,
  FaCogs,
  FaSpa,
  FaWrench,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaDraftingCompass />,
    title: "Pool Design & Consultation",
    description:
      "Professional planning, concept development and engineering consultation for residential and commercial pools.",
  },
  {
    icon: <FaSwimmingPool />,
    title: "Swimming Pool Construction",
    description:
      "Complete turnkey swimming pool construction using premium materials and advanced engineering methods.",
  },
  {
    icon: <FaWater />,
    title: "Water Features",
    description:
      "Elegant fountains, waterfalls, infinity edges and custom water attractions for luxury developments.",
  },
  {
    icon: <FaSpa />,
    title: "Spa & Jacuzzi Systems",
    description:
      "Design and installation of premium spa pools, jacuzzis and hydrotherapy systems.",
  },
  {
    icon: <FaCogs />,
    title: "Pool Filtration Systems",
    description:
      "High-performance filtration, circulation and water treatment solutions for crystal-clear water.",
  },
  {
    icon: <FaTools />,
    title: "Mechanical & Electrical",
    description:
      "Complete M&E engineering, automation and control systems for swimming pools.",
  },
  {
    icon: <FaWrench />,
    title: "Testing & Commissioning",
    description:
      "Comprehensive testing, balancing and commissioning before project handover.",
  },
  {
    icon: <FaSwimmingPool />,
    title: "Pool Renovation",
    description:
      "Modernization, upgrading and restoration of existing swimming pools and aquatic facilities.",
  },
];

function EngineeringServices() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Engineering Services
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">

            Complete Swimming Pool
            <span className="text-cyan-500">
              {" "}Engineering Solutions
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">

            From concept to completion, Menspool delivers innovative
            engineering solutions that combine functionality,
            sustainability and premium craftsmanship.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group bg-white rounded-[28px] shadow-xl border border-slate-100 p-8 hover:shadow-cyan-200 transition duration-500"
            >

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center text-white text-4xl group-hover:rotate-6 transition duration-500">

                {service.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">

                {service.title}

              </h3>

              <p className="mt-5 text-slate-600 leading-8">

                {service.description}

              </p>

              <div className="mt-8 flex items-center text-cyan-500 font-semibold">

                Learn More

                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition duration-300" />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default EngineeringServices;
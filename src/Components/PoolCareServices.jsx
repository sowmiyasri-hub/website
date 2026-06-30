import { motion } from "framer-motion";
import {
  FaFlask,
  FaTools,
  FaBolt,
  FaClipboardList,
  FaTint,
  FaWater,
  FaSwimmingPool,
  FaWrench,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaFlask />,
    title: "Water Chemistry",
    description:
      "Professional testing and balancing of chlorine, pH, alkalinity and water quality for a safe swimming environment.",
  },
  {
    icon: <FaTools />,
    title: "Equipment Servicing",
    description:
      "Routine maintenance of pumps, filters, valves, dosing systems and circulation equipment.",
  },
  {
    icon: <FaBolt />,
    title: "Electrical Troubleshooting",
    description:
      "Inspection and repair of lighting, pool control panels, timers and electrical systems.",
  },
  {
    icon: <FaClipboardList />,
    title: "Maintenance Reports",
    description:
      "Digital inspection reports with recommendations and maintenance history after every visit.",
  },
  {
    icon: <FaTint />,
    title: "Chemical Supply",
    description:
      "Premium chemicals supplied and dosed correctly to ensure crystal-clear, hygienic water.",
  },
  {
    icon: <FaWater />,
    title: "Leak Detection",
    description:
      "Professional leak inspection and repair to reduce water loss and prevent structural damage.",
  },
  {
    icon: <FaSwimmingPool />,
    title: "Pool Cleaning",
    description:
      "Vacuuming, brushing, skimming and tile cleaning to keep your swimming pool spotless.",
  },
  {
    icon: <FaWrench />,
    title: "Repairs & Upgrades",
    description:
      "Repair and replacement of worn components with performance upgrades for long-term reliability.",
  },
];

function PoolCareServices() {
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
            Pool Care Services
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">

            Complete Pool
            <span className="text-cyan-500"> Maintenance Solutions</span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">

            From routine maintenance to emergency repairs, Menspool
            provides comprehensive swimming pool care services for
            residential, commercial and hospitality projects.

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
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group bg-white rounded-[30px] shadow-xl border border-slate-100 p-8 hover:shadow-cyan-200 transition duration-500"
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

              <button className="mt-8 flex items-center text-cyan-500 font-semibold group-hover:text-sky-600 transition">

                Learn More

                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition duration-300" />

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PoolCareServices;
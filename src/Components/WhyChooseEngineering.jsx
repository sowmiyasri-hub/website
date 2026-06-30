import { motion } from "framer-motion";
import {
  FaDraftingCompass,
  FaWater,
  FaCogs,
  FaHardHat,
  FaLeaf,
  FaAward,
} from "react-icons/fa";

const services = [
  {
    icon: <FaDraftingCompass />,
    title: "Expert Design",
    desc: "Innovative swimming pool planning and engineering tailored to every project.",
  },
  {
    icon: <FaWater />,
    title: "Premium Water Systems",
    desc: "Advanced filtration and circulation technologies for crystal-clear water.",
  },
  {
    icon: <FaCogs />,
    title: "Modern Equipment",
    desc: "Latest automation and energy-efficient systems from trusted global brands.",
  },
  {
    icon: <FaHardHat />,
    title: "Experienced Team",
    desc: "Highly skilled engineers and technicians delivering exceptional workmanship.",
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly",
    desc: "Sustainable engineering solutions that reduce energy and water consumption.",
  },
  {
    icon: <FaAward />,
    title: "40+ Years Excellence",
    desc: "A trusted name in Singapore's swimming pool industry since 1984.",
  },
];

function WhyChooseEngineering() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-cyan-50 overflow-hidden">

      {/* Background Blur */}

      <div className="absolute -top-20 left-0 w-96 h-96 rounded-full bg-cyan-100 blur-[150px] opacity-70"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-sky-100 blur-[180px] opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.8 }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Why Choose Menspool
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">

            Engineering Excellence
            <span className="text-cyan-500">
              {" "}Beyond Expectations
            </span>

          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-600 leading-8">

            We combine innovation, precision engineering and decades of
            experience to deliver world-class swimming pool solutions for
            residential, commercial and hospitality developments.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:70 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*.1 }}
              whileHover={{
                y:-12,
                scale:1.03,
              }}
              className="group bg-white rounded-[30px] p-10 shadow-xl border border-slate-100 hover:shadow-cyan-200 transition duration-500"
            >

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white flex items-center justify-center text-4xl mb-8 group-hover:rotate-6 transition duration-500">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold text-slate-900">

                {item.title}

              </h3>

              <p className="mt-5 text-slate-600 leading-8">

                {item.desc}

              </p>

              <div className="mt-8 h-1 w-12 rounded-full bg-cyan-500 group-hover:w-full transition-all duration-500"></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseEngineering;
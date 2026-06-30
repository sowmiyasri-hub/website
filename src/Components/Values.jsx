import { motion } from "framer-motion";
import {
  FaAward,
  FaHandshake,
  FaLightbulb,
  FaLeaf,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

const values = [
  {
    icon: <FaAward />,
    title: "Excellence",
    desc: "We strive for the highest standards in every swimming pool project, delivering superior craftsmanship and lasting quality.",
    color: "from-cyan-500 to-sky-500",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "We embrace modern technologies and creative engineering solutions to build exceptional aquatic environments.",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    icon: <FaHandshake />,
    title: "Integrity",
    desc: "Honesty, transparency and professionalism are at the heart of every relationship we build with our clients.",
    color: "from-emerald-500 to-cyan-500",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    desc: "We design environmentally responsible pool systems that maximize efficiency while minimizing environmental impact.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaUsers />,
    title: "Customer First",
    desc: "Every client is unique. We listen carefully and deliver personalized solutions that exceed expectations.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: <FaHeart />,
    title: "Passion",
    desc: "For more than four decades, our passion for swimming pools continues to inspire innovation and excellence.",
    color: "from-cyan-600 to-blue-600",
  },
];

function Values() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Decorative Background */}

      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-cyan-100 blur-[150px] opacity-70"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-sky-100 blur-[180px] opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Our Core Values
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">

            Principles That Drive
            <span className="text-cyan-500"> Everything We Do</span>

          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-600 leading-8">

            At Menspool, our values guide every project, every partnership and
            every customer experience. These principles have shaped our journey
            since 1984 and continue to inspire our future.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((value, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-xl hover:shadow-cyan-200 transition-all duration-500"
            >

              {/* Gradient Top */}

              <div
                className={`h-2 bg-gradient-to-r ${value.color}`}
              ></div>

              <div className="p-10">

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color}
                  flex items-center justify-center text-white text-4xl
                  shadow-lg mb-8 group-hover:rotate-6 transition duration-500`}
                >

                  {value.icon}

                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-5">

                  {value.title}

                </h3>

                <p className="text-slate-600 leading-8">

                  {value.desc}

                </p>

                <div className="mt-8 w-12 h-1 bg-cyan-500 rounded-full group-hover:w-full transition-all duration-500"></div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Values;
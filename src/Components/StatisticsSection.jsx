import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaSwimmingPool, FaUsers, FaAward, FaHeadset } from "react-icons/fa";

const stats = [
  {
    icon: <FaAward />,
    number: 40,
    suffix: "+",
    title: "Years of Experience",
    description:
      "Delivering premium swimming pool engineering solutions since 1984.",
  },
  {
    icon: <FaSwimmingPool />,
    number: 1000,
    suffix: "+",
    title: "Projects Completed",
    description:
      "Successfully completed residential, commercial and luxury pool projects.",
  },
  {
    icon: <FaUsers />,
    number: 500,
    suffix: "+",
    title: "Satisfied Clients",
    description:
      "Trusted by homeowners, architects, developers and businesses.",
  },
  {
    icon: <FaHeadset />,
    number: 24,
    suffix: "/7",
    title: "Customer Support",
    description:
      "Dedicated technical assistance and after-sales service whenever required.",
  },
];

function StatisticsSection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/images/counter-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/80"></div>

      {/* Blur Effect */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[180px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Our Achievements
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Numbers That Reflect
            <span className="text-cyan-400"> Our Excellence</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-300 leading-8">
            More than four decades of experience delivering innovative,
            reliable and premium swimming pool engineering across Singapore.
          </p>
        </motion.div>

        {/* Statistics Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/10 backdrop-blur-xl rounded-[30px] border border-white/20 p-8 text-center hover:bg-white/15 transition duration-500"
            >

              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center text-white text-4xl shadow-lg">

                {item.icon}

              </div>

              <h3 className="text-5xl font-bold text-cyan-400 mt-8">

                <CountUp
                  end={item.number}
                  duration={4}
                  separator=","
                />

                {item.suffix}

              </h3>

              <h4 className="text-white text-xl font-semibold mt-5">

                {item.title}

              </h4>

              <p className="text-slate-300 leading-7 mt-5">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default StatisticsSection;
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaShieldAlt,
  FaHeadset,
  FaHandsHelping,
  FaHeartbeat,
  FaWater,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb />,
    title: "Expert Knowledge",
    description:
      "Over 40 years of industry experience in maintaining residential, commercial and luxury swimming pools with precision.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliable Service",
    description:
      "Scheduled maintenance plans that keep your swimming pool safe, clean and operating efficiently throughout the year.",
  },
  {
    icon: <FaHeadset />,
    title: "Fast Response",
    description:
      "Our dedicated technicians respond quickly to service requests, emergency breakdowns and repair needs.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Complete Care",
    description:
      "From pool cleaning and equipment servicing to water balancing and preventive maintenance under one trusted team.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Customer First",
    description:
      "Every maintenance plan is tailored to suit your property's requirements and budget while ensuring long-term reliability.",
  },
  {
    icon: <FaWater />,
    title: "Crystal Clear Water",
    description:
      "Advanced water chemistry monitoring ensures sparkling, hygienic and perfectly balanced swimming pools.",
  },
];

function WhyChoosePoolCare() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">

            Why Choose
            <span className="text-cyan-500"> Swimspa?</span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">

            We combine technical expertise, premium equipment and
            preventive maintenance strategies to keep every swimming
            pool performing at its best.

          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group bg-white rounded-[30px] p-10 shadow-xl border border-slate-100 hover:shadow-cyan-200 transition duration-500"
            >

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center text-white text-4xl group-hover:rotate-6 transition duration-500">

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

export default WhyChoosePoolCare;
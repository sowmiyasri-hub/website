import { motion } from "framer-motion";
import {
  FaAward,
  FaBoxes,
  FaTruckMoving,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "Premium Quality Brands",
    description:
      "We supply internationally trusted swimming pool brands known for quality, durability and outstanding performance.",
  },
  {
    icon: <FaBoxes />,
    title: "Largest Product Range",
    description:
      "From pumps and filters to chemicals and lighting, everything you need for your swimming pool is available under one roof.",
  },
  {
    icon: <FaTruckMoving />,
    title: "Fast Delivery",
    description:
      "Quick order processing and reliable delivery ensure your projects continue without unnecessary delays.",
  },
  {
    icon: <FaHandshake />,
    title: "Expert Support",
    description:
      "Our experienced team helps you choose the right products for every residential and commercial swimming pool project.",
  },
];

function WhyChoosePoolShop() {
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
            Why Choose Pool Connect
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">

            Everything You Need
            <span className="text-cyan-500"> In One Place</span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">

            Menspool provides premium swimming pool products backed by
            professional technical advice, reliable stock availability,
            and exceptional customer support.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="group bg-white rounded-[30px] p-10 shadow-xl border border-slate-100 hover:shadow-cyan-200 transition duration-500"
            >

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center text-white text-4xl group-hover:rotate-6 transition duration-500">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mt-8 text-slate-900">

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

export default WhyChoosePoolShop;
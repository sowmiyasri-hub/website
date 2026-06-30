import { FaAward, FaWater, FaUsers, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaAward size={40} />,
    title: "40+ Years Experience",
    desc: "Since 1984, Menspool has delivered exceptional swimming pool engineering, construction and maintenance services across Singapore.",
  },
  {
    icon: <FaWater size={40} />,
    title: "1000+ Premium Projects",
    desc: "From luxury residences to commercial developments, we have successfully completed hundreds of customized swimming pool projects.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Trusted By Clients",
    desc: "Developers, architects, hotels, schools and homeowners trust Menspool for our quality workmanship and dependable service.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Quality Guaranteed",
    desc: "We use premium materials, advanced technology and strict quality standards to ensure every project exceeds expectations.",
  },
];

function AboutFeatures() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-cyan-50 overflow-hidden">

      {/* Background Decoration */}

      <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-100 rounded-full blur-[140px] opacity-60"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-[160px] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Why Choose Menspool
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Excellence Built Over
            <span className="text-cyan-500"> Four Decades</span>
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-8">
            Combining innovation, craftsmanship and passion, Menspool continues
            to deliver premium swimming pool solutions that redefine luxury,
            functionality and long-term reliability.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:60 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index * .15 }}
              whileHover={{
                y:-15,
                scale:1.03
              }}
              className="group bg-white/80 backdrop-blur-xl rounded-[30px] shadow-xl border border-white p-10 transition duration-500 hover:shadow-cyan-200/60"
            >

              <div className="w-20 h-20 rounded-2xl bg-cyan-500 text-white flex items-center justify-center mb-8 group-hover:rotate-6 transition duration-500">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-5">

                {item.title}

              </h3>

              <p className="text-slate-600 leading-8">

                {item.desc}

              </p>

              <div className="mt-8 w-12 h-1 rounded-full bg-cyan-500 group-hover:w-full transition-all duration-500"></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default AboutFeatures;
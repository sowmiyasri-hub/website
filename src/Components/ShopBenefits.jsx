import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaTruck,
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaWarehouse,
  FaCheckCircle,
} from "react-icons/fa";

function ShopBenefits() {
  const benefits = [
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description:
        "Quick delivery across Singapore to keep your projects running on schedule.",
    },
    {
      icon: <FaShieldAlt />,
      title: "100% Genuine Products",
      description:
        "Only authentic products sourced directly from trusted global manufacturers.",
    },
    {
      icon: <FaTools />,
      title: "Technical Expertise",
      description:
        "Professional product recommendations and engineering support from experienced specialists.",
    },
    {
      icon: <FaHeadset />,
      title: "After Sales Support",
      description:
        "Reliable assistance, troubleshooting and product guidance whenever you need it.",
    },
    {
      icon: <FaWarehouse />,
      title: "Ready Stock",
      description:
        "Extensive inventory of pumps, filters, chemicals and accessories available immediately.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Warranty Assurance",
      description:
        "Manufacturer-backed warranty and dependable service for complete peace of mind.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-900 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
              Why Buy From Menspool
            </span>

            <h2 className="text-5xl font-bold text-white mt-5 leading-tight">

              Premium Products.
              <br />

              Professional Service.
              <br />

              <span className="text-cyan-400">

                Trusted Since 1984.

              </span>

            </h2>

            <p className="mt-8 text-slate-300 leading-8 text-lg">

              Our Pool Shop supplies high-quality swimming pool equipment
              from internationally recognised brands together with
              professional technical advice and reliable after-sales
              support.

            </p>

            {/* Statistics */}

            <div className="grid grid-cols-2 gap-8 mt-12">

              <div>

                <h3 className="text-5xl font-black text-cyan-400">

                  <CountUp end={5000} duration={4} separator="," />+

                </h3>

                <p className="text-slate-300 mt-3">

                  Products Available

                </p>

              </div>

              <div>

                <h3 className="text-5xl font-black text-cyan-400">

                  <CountUp end={40} duration={4} />+

                </h3>

                <p className="text-slate-300 mt-3">

                  Years Experience

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <div className="grid md:grid-cols-2 gap-6">

            {benefits.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-white/10 backdrop-blur-xl rounded-[30px] border border-white/20 p-8 hover:bg-white/15 transition duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-3xl">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-bold text-white mt-6">

                  {item.title}

                </h3>

                <p className="text-slate-300 leading-7 mt-4">

                  {item.description}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default ShopBenefits;
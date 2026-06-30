import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaTint,
  FaFlask,
  FaShieldAlt,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";

function WaterChemistry() {
  return (
    <section className="py-28 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <img
              src="/images/waterchemistry.png"
              alt="Water Chemistry"
              className="rounded-[35px] shadow-2xl h-[650px] object-cover w-full"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-2xl p-8">

              <h2 className="text-5xl font-bold text-cyan-500">

                <CountUp end={100} duration={4} />%

              </h2>

              <p className="mt-2 text-slate-600">

                Water Quality Assurance

              </p>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">

              Water Chemistry

            </span>

            <h2 className="text-5xl font-bold mt-5 text-slate-900 leading-tight">

              Crystal Clear Water
              <br />

              <span className="text-cyan-500">

                Every Single Day

              </span>

            </h2>

            <p className="mt-8 text-slate-600 leading-8">

              Proper water chemistry is the foundation of every
              healthy swimming pool.

              Our specialists continuously monitor and balance
              chlorine, pH, alkalinity and water clarity to provide
              a safe and enjoyable swimming experience.

            </p>

            {/* Features */}

            <div className="space-y-5 mt-10">

              {[
                "Water Testing & Analysis",
                "pH & Chlorine Balancing",
                "Algae Prevention",
                "Chemical Dosing",
                "Water Clarity Monitoring",
                "Health & Safety Compliance",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <FaCheckCircle className="text-cyan-500 text-xl" />

                  <span className="text-lg text-slate-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* Bottom Cards */}

            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="bg-cyan-50 rounded-3xl p-6 text-center">

                <FaTint className="text-4xl text-cyan-500 mx-auto" />

                <h3 className="mt-4 font-bold">

                  Water Balance

                </h3>

              </div>

              <div className="bg-cyan-50 rounded-3xl p-6 text-center">

                <FaFlask className="text-4xl text-cyan-500 mx-auto" />

                <h3 className="mt-4 font-bold">

                  Chemical Control

                </h3>

              </div>

              <div className="bg-cyan-50 rounded-3xl p-6 text-center">

                <FaLeaf className="text-4xl text-cyan-500 mx-auto" />

                <h3 className="mt-4 font-bold">

                  Eco Friendly

                </h3>

              </div>

              <div className="bg-cyan-50 rounded-3xl p-6 text-center">

                <FaShieldAlt className="text-4xl text-cyan-500 mx-auto" />

                <h3 className="mt-4 font-bold">

                  Safe Swimming

                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default WaterChemistry;
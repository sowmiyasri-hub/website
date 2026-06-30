import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaCheckCircle,
  FaWater,
  FaTools,
  FaBuilding,
} from "react-icons/fa";

function EngineeringStory() {
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
              src="/images/engineering.jpg"
              alt="Engineering"
              className="rounded-[35px] h-[650px] w-full object-cover shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-10 -right-8 bg-white rounded-3xl shadow-2xl p-8">

              <div className="text-5xl font-bold text-cyan-500">

                <CountUp end={40} duration={4} />+

              </div>

              <p className="text-slate-600 mt-2">
                Years of Engineering Excellence
              </p>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
              Engineering Excellence
            </span>

            <h2 className="text-5xl font-bold mt-5 leading-tight text-slate-900">

              Building World-Class
              <br />

              <span className="text-cyan-500">
                Swimming Pools
              </span>

            </h2>

            <p className="mt-8 text-slate-600 leading-8">

              Since 1984, Menspool has been at the forefront of swimming
              pool engineering in Singapore.

              We specialise in luxury residential pools,
              commercial aquatic facilities, spa pools,
              water features and complete turnkey engineering
              solutions.

            </p>

            {/* Features */}

            <div className="space-y-5 mt-10">

              {[
                "Swimming Pool Engineering",
                "Mechanical & Electrical Systems",
                "Luxury Water Features",
                "Complete Turnkey Construction",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <FaCheckCircle
                    className="text-cyan-500 text-xl"
                  />

                  <span className="text-lg text-slate-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* Cards */}

            <div className="grid grid-cols-3 gap-5 mt-12">

              <div className="rounded-3xl bg-cyan-50 p-6 text-center">

                <FaWater className="text-4xl text-cyan-500 mx-auto" />

                <h3 className="font-bold mt-4">
                  Water Systems
                </h3>

              </div>

              <div className="rounded-3xl bg-cyan-50 p-6 text-center">

                <FaTools className="text-4xl text-cyan-500 mx-auto" />

                <h3 className="font-bold mt-4">
                  M&E Works
                </h3>

              </div>

              <div className="rounded-3xl bg-cyan-50 p-6 text-center">

                <FaBuilding className="text-4xl text-cyan-500 mx-auto" />

                <h3 className="font-bold mt-4">
                  Commercial
                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default EngineeringStory;
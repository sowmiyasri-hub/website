import { motion } from "framer-motion";
import { FaCheckCircle, FaBullseye, FaEye } from "react-icons/fa";

function CompanyStory() {
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
              src="/images/about.jpg"
              alt="Menspool"
              className="rounded-[35px] shadow-2xl object-cover w-full h-[650px]"
            />

            {/* Floating Experience Card */}

            <div className="absolute -bottom-8 -right-8 bg-cyan-500 text-white p-8 rounded-3xl shadow-2xl">

              <h2 className="text-5xl font-bold">
                40+
              </h2>

              <p className="mt-2 text-lg">
                Years of Excellence
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
              Our Story
            </span>

            <h2 className="text-5xl font-bold mt-5 text-slate-900 leading-tight">

              Building Singapore's
              <br />

              <span className="text-cyan-500">
                Swimming Pool Legacy
              </span>

            </h2>

            <p className="mt-8 text-slate-600 leading-8">

              Established in 1984, Menspool has grown from a passionate
              swimming pool specialist into one of Singapore's trusted
              names in pool engineering, construction and maintenance.

              <br /><br />

              For more than four decades we have partnered with
              homeowners, architects, developers and commercial
              organisations to deliver elegant, innovative and
              sustainable swimming pool solutions.

            </p>

            {/* Checklist */}

            <div className="mt-10 space-y-5">

              {[
                "Premium Engineering Solutions",
                "Residential & Commercial Projects",
                "Experienced Technical Team",
                "Trusted Since 1984"
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <FaCheckCircle
                    className="text-cyan-500 text-xl"
                  />

                  <span className="text-slate-700 text-lg">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* Mission Vision */}

            <div className="grid md:grid-cols-2 gap-6 mt-12">

              <div className="bg-cyan-50 rounded-3xl p-8">

                <FaBullseye
                  className="text-cyan-500 text-4xl mb-5"
                />

                <h3 className="text-2xl font-bold">

                  Mission

                </h3>

                <p className="mt-4 text-slate-600 leading-7">

                  To deliver innovative swimming pool solutions
                  through quality craftsmanship, integrity and
                  exceptional customer service.

                </p>

              </div>

              <div className="bg-slate-900 rounded-3xl p-8 text-white">

                <FaEye
                  className="text-cyan-400 text-4xl mb-5"
                />

                <h3 className="text-2xl font-bold">

                  Vision

                </h3>

                <p className="mt-4 leading-7 text-slate-300">

                  To become Singapore's most admired swimming
                  pool engineering company recognised for
                  excellence, innovation and reliability.

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default CompanyStory;
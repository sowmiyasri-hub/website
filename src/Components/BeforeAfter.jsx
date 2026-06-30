import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    before: "/images/before1.jpeg",
    after: "/images/after1.jpeg",
    title: "Residential Pool Restoration",
  },
  {
    before: "/images/before2.jpeg",
    after: "/images/after2.jpg",
    title: "Commercial Pool Maintenance",
  },
];

function BeforeAfter() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Before & After
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">

            See The
            <span className="text-cyan-500"> Transformation</span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            Our maintenance team transforms swimming pools into
            sparkling, hygienic and inviting aquatic spaces.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[35px] overflow-hidden shadow-xl"
            >

              <div className="grid grid-cols-2">

                <div className="relative">

                  <img
                    src={item.before}
                    className="h-80 w-full object-cover"
                    alt=""
                  />

                  <div className="absolute top-5 left-5 bg-red-500 text-white px-4 py-2 rounded-full">

                    BEFORE

                  </div>

                </div>

                <div className="relative">

                  <img
                    src={item.after}
                    className="h-80 w-full object-cover"
                    alt=""
                  />

                  <div className="absolute top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-full">

                    AFTER

                  </div>

                </div>

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold">

                  {item.title}

                </h3>

                <Link
                  to="/gallery"
                  className="mt-6 inline-flex items-center text-cyan-500 font-semibold"
                >
                  View More

                  <FaArrowRight className="ml-3" />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default BeforeAfter;
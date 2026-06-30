import { motion } from "framer-motion";

const timeline = [
  {
    year: "1984",
    title: "The Beginning",
    desc: "Menspool was founded with a vision to provide high-quality swimming pool construction and maintenance services in Singapore.",
  },
  {
    year: "1995",
    title: "Expanding Services",
    desc: "Expanded into commercial swimming pools and water treatment solutions, serving schools, clubs and condominiums.",
  },
  {
    year: "2005",
    title: "Engineering Excellence",
    desc: "Introduced advanced pool engineering technologies and premium equipment from internationally recognized brands.",
  },
  {
    year: "2015",
    title: "Innovation & Growth",
    desc: "Successfully completed numerous luxury residential and commercial projects across Singapore.",
  },
  {
    year: "2020",
    title: "Trusted Industry Leader",
    desc: "Strengthened our reputation with long-term maintenance contracts and innovative pool care solutions.",
  },
  {
    year: "2025",
    title: "Building the Future",
    desc: "Continuing to deliver premium swimming pool experiences through innovation, sustainability and customer satisfaction.",
  },
];

function Timeline() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Our Journey
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Timeline
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            More than four decades of innovation, dedication and excellence in
            swimming pool engineering.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-1/2 top-0 h-full w-1 bg-cyan-300 transform -translate-x-1/2"></div>

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >

              <div className="w-full lg:w-5/12">

                <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-cyan-200 transition duration-500">

                  <span className="inline-block bg-cyan-500 text-white px-5 py-2 rounded-full font-semibold mb-5">

                    {item.year}

                  </span>

                  <h3 className="text-2xl font-bold text-slate-900">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-slate-600 leading-8">

                    {item.desc}

                  </p>

                </div>

              </div>

              {/* Circle */}

              <div className="absolute left-1/2 transform -translate-x-1/2">

                <div className="w-8 h-8 rounded-full bg-cyan-500 border-4 border-white shadow-xl"></div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Timeline;
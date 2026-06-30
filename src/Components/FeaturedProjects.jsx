import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const projects = [
  {
    image: "/images/Project1.jpeg",
    title: "Luxury Residential Pool",
    location: "Singapore",
    category: "Residential",
  },
  {
    image: "/images/Project2.jpg",
    title: "Commercial Swimming Pool",
    location: "Singapore",
    category: "Commercial",
  },
  {
    image: "/images/Project3.jpg",
    title: "Infinity Pool",
    location: "Singapore",
    category: "Luxury",
  },
  {
    image: "/images/Project4.jpg",
    title: "Hotel Water Feature",
    location: "Singapore",
    category: "Hospitality",
  },
];

function FeaturedProjects() {
  return (
    <section className="py-28 bg-slate-900 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Featured Projects
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">

            Engineering
            <span className="text-cyan-400">
              {" "}Excellence In Action
            </span>

          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-300 leading-8">

            Every swimming pool reflects our commitment to engineering
            excellence, premium craftsmanship and innovative design.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[35px] overflow-hidden shadow-2xl"
            >

              {/* Image */}

              <img
                src={project.image}
                alt={project.title}
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>

              {/* Category */}

              <div className="absolute top-8 left-8 bg-cyan-500 text-white px-5 py-2 rounded-full text-sm font-semibold">

                {project.category}

              </div>

              {/* Content */}

              <div className="absolute bottom-8 left-8 right-8">

                <div className="flex items-center text-cyan-300 text-sm">

                  <FaMapMarkerAlt className="mr-2" />

                  {project.location}

                </div>

                <h3 className="text-3xl font-bold text-white mt-3">

                  {project.title}

                </h3>

                <Link
                  to="/gallery"
                  className="inline-flex items-center mt-6 text-cyan-300 font-semibold group-hover:text-white transition"
                >
                  View Project

                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition duration-300" />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Button */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >

          <Link
            to="/gallery"
            className="inline-block px-10 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300"
          >
            View All Projects
          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default FeaturedProjects;
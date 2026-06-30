import { motion } from "framer-motion";
import {
  FaComments,
  FaPencilRuler,
  FaDraftingCompass,
  FaHardHat,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";

const workflow = [
  {
    icon: <FaComments />,
    title: "Consultation",
    description:
      "Understanding client requirements, site conditions and project objectives.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Design",
    description:
      "Developing customized concepts, layouts and engineering drawings.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Engineering",
    description:
      "Detailed structural, hydraulic and M&E engineering planning.",
  },
  {
    icon: <FaHardHat />,
    title: "Construction",
    description:
      "Professional construction with premium materials and quality control.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Testing",
    description:
      "System testing, water balancing and commissioning before handover.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Completion",
    description:
      "Project handover with after-sales support and maintenance guidance.",
  },
];

function ProjectWorkflow() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Project Workflow
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">

            Our Proven
            <span className="text-cyan-500">
              {" "}Engineering Process
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">

            Every project follows a structured engineering workflow
            ensuring efficiency, quality and long-term reliability.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-200 transform -translate-x-1/2"></div>

          {workflow.map((step, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >

              {/* Card */}

              <div className="w-full lg:w-5/12">

                <div className="bg-white rounded-[30px] shadow-xl border border-slate-100 p-8 hover:shadow-cyan-200 transition duration-500">

                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center text-white text-4xl">

                    {step.icon}

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">

                    {step.title}

                  </h3>

                  <p className="mt-5 text-slate-600 leading-8">

                    {step.description}

                  </p>

                </div>

              </div>

              {/* Timeline Circle */}

              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-500 rounded-full border-4 border-white shadow-xl"></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProjectWorkflow;
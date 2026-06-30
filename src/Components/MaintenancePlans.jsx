import { motion } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaCrown,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const plans = [
  {
    icon: <FaHome />,
    title: "Residential Care",
    subtitle: "Perfect for Homeowners",
    color: "from-cyan-500 to-sky-500",
    features: [
      "Weekly Pool Cleaning",
      "Water Chemistry Balancing",
      "Equipment Inspection",
      "Filter Cleaning",
      "Chemical Supply",
      "Monthly Service Report",
    ],
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Care",
    subtitle: "Hotels • Condominiums • Clubs",
    color: "from-slate-700 to-slate-900",
    features: [
      "Daily / Weekly Maintenance",
      "Professional Water Testing",
      "Pump & Filter Servicing",
      "Emergency Breakdown Support",
      "Compliance Monitoring",
      "Maintenance Reports",
    ],
  },
  {
    icon: <FaCrown />,
    title: "Premium Care",
    subtitle: "Complete Pool Management",
    color: "from-amber-400 to-orange-500",
    features: [
      "24/7 Priority Support",
      "Unlimited Service Visits",
      "Premium Chemical Supply",
      "Equipment Replacement Advice",
      "Dedicated Maintenance Team",
      "Annual Health Assessment",
    ],
  },
];

function MaintenancePlans() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Maintenance Plans
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">

            Flexible Plans For
            <span className="text-cyan-500">
              {" "}Every Pool
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">

            Whether you own a residential swimming pool,
            condominium, hotel or commercial facility,
            Menspool provides customised maintenance
            programmes to suit your requirements.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-10">

          {plans.map((plan, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:70 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*.15 }}
              whileHover={{
                y:-15,
                scale:1.03
              }}
              className="relative overflow-hidden rounded-[35px] bg-white shadow-2xl border border-slate-100"
            >

              {/* Header */}

              <div
                className={`bg-gradient-to-r ${plan.color} text-white p-10`}
              >

                <div className="text-5xl">

                  {plan.icon}

                </div>

                <h3 className="text-3xl font-bold mt-6">

                  {plan.title}

                </h3>

                <p className="mt-3 text-white/90">

                  {plan.subtitle}

                </p>

              </div>

              {/* Body */}

              <div className="p-10">

                <div className="space-y-5">

                  {plan.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-4"
                    >

                      <FaCheckCircle className="text-cyan-500" />

                      <span className="text-slate-700">

                        {feature}

                      </span>

                    </div>

                  ))}

                </div>

                <Link
                  to="/contact"
                  className="mt-10 inline-block w-full text-center py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300"
                >
                  Request Consultation
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default MaintenancePlans;
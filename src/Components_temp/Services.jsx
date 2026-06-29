import {
  FaSwimmingPool,
  FaTools,
  FaWater,
  FaWrench,
  FaCogs,
  FaHotTub,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSwimmingPool />,
    title: "Pool Construction",
    desc: "Design and build luxury residential and commercial swimming pools.",
    image: "/images/service1.jpg",
  },
  {
    icon: <FaTools />,
    title: "Pool Maintenance",
    desc: "Comprehensive maintenance solutions ensuring peak performance.",
    image: "/images/poolmaintenance.jpg",
  },
  {
    icon: <FaWater />,
    title: "Water Features",
    desc: "Elegant fountains, waterfalls and decorative aquatic features.",
    image: "/images/service3.jpg",
  },
  {
    icon: <FaWrench />,
    title: "Pool Renovation",
    desc: "Modernize aging pools with advanced technologies and finishes.",
    image: "/images/service4.jpg",
  },
  {
    icon: <FaCogs />,
    title: "Filtration Systems",
    desc: "Efficient filtration and circulation systems for crystal clear water.",
    image: "/images/service5.jpg",
  },
  {
    icon: <FaHotTub />,
    title: "Spa Solutions",
    desc: "Custom spa and wellness solutions for residential developments.",
    image: "/images/service6.jpg",
  },
];

function OurServices() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-cyan-500 uppercase tracking-[4px] font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Complete Pool Solutions
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Professional swimming pool engineering,
            maintenance and water feature services
            delivered with precision and quality.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="
              group
              bg-white
              rounded-[30px]
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div className="grid grid-cols-2">

                {/* Image */}

                <div className="overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                    "
                  />

                </div>

                {/* Content */}

                <div className="p-8 flex flex-col justify-center">

                  <div className="text-cyan-500 text-4xl mb-4">
                    {service.icon}
                  </div>

                  <h3 className="text-3xl font-bold text-slate-800">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {service.desc}
                  </p>

                  <button
                    className="
                    mt-6
                    w-fit
                    px-6
                    py-3
                    border
                    border-cyan-500
                    rounded-full
                    text-cyan-500
                    transition-all
                    duration-300
                    hover:bg-cyan-500
                    hover:text-white
                    "
                  >
                    Read More →
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default OurServices;
import { motion } from "framer-motion";

const brands = [
  {
    name: "Saci Pumps",
    logo: "/images/Partners/saci-LOGO.png",
  },
  {
    name: "Smorobot",
    logo: "/images/Partners/smorobot2.png",
  },
  {
    name: "Bombas PSH",
    logo: "/images/Partners/psh2.png",
  },
  {
    name: "Procopi",
    logo: "/images/Partners/procopi1.png",
  },
  {
    name: "Pentair-Water",
    logo: "/images/Partners/Pentair-Water.svg",
  },
  {
    name: "harvia",
    logo: "/images/Partners/harvia.png",
  },
  {
    name: "Emaux",
    logo: "/images/Partners/emaux.png",
  },
  {
    name: "Nissan",
    logo: "/images/Partners/nissan2.png",
  },

 {
    name: "Nissan",
    logo: "/images/Partners/BS-Pool.svg",
  },
 {
    name: "Messner",
    logo: "/images/Partners/messner2.png",
  },
 {
    name: "Pahlen",
    logo: "/images/Partners/pahlen_logo.png",
  },
 {
    name: "Aquabot",
    logo: "/images/Partners/aquabot2.png",
  },

{
    name: "Aquacal",
    logo: "/images/Partners/aquacal-logo.png",
  },
  {
    name: "Aquaperl",
    logo: "/images/Partners/aquaperl.png",
  },
  {
    name: "Aqua-Spa",
    logo: "/images/Partners/aqua-spa-3.png",
  },

  {
    name: "Blue White",
    logo: "/images/Partners/blue-white2.png",
  },

 {
    name: "Effast3",
    logo: "/images/Partners/effast3.png",
  },


];

function BrandPartners() {
  return (
    <section className="py-28 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
            Trusted Brands
          </span>

          <h2 className="text-5xl font-bold mt-5">

            Our Premium
            <span className="text-cyan-500"> Brand Partners</span>

          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-600 leading-8">

            We work with internationally recognized swimming pool
            equipment manufacturers to ensure superior quality,
            reliability and long-term performance.

          </p>

        </motion.div>

        {/* Brand Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {brands.map((brand, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="group bg-white rounded-[30px] shadow-lg hover:shadow-cyan-200 border border-slate-100 h-52 flex flex-col justify-center items-center p-8 transition-all duration-500"
            >

              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-20 object-contain  group-hover:grayscale-0 transition duration-500"
              />

              <h3 className="mt-8 text-lg font-semibold text-slate-700">

                {brand.name}

              </h3>

            </motion.div>

          ))}

        </div>

        {/* Bottom Statistics */}

        <div className="grid md:grid-cols-4 gap-8 mt-24">

          {[
            ["20+", "Global Brands"],
            ["5000+", "Products"],
            ["40+", "Years Experience"],
            ["100%", "Genuine Products"],
          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >

              <h2 className="text-5xl font-black text-cyan-500">

                {item[0]}

              </h2>

              <p className="mt-3 text-slate-600">

                {item[1]}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default BrandPartners;
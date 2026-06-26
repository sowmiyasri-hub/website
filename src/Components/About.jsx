import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="py-28 bg-white">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src="/images/about.jpg"
              alt="Menspool"
              className="
              w-full
              h-[650px]
              object-cover
              rounded-[30px]
              shadow-2xl
              "
            />

            {/* Floating Badge */}

            {/* <div
              className="
              absolute
              bottom-8
              right-8
              bg-white
              p-6
              rounded-2xl
              shadow-xl
              "
            >
              <h3 className="text-4xl font-bold text-cyan-500">
                40+
              </h3>

              <p className="text-gray-600">
                Years Experience
              </p>
            </div> */}

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <span
              className="
              uppercase
              tracking-[4px]
              text-cyan-500
              font-semibold
              "
            >
              About Menspool
            </span>

            <h2
              className="
              text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              mt-4
              "
            >
              Singapore's Trusted
              Pool & Spa Experts
              Since 1984
            </h2>

            <p
              className="
              text-gray-600
              text-lg
              leading-9
              mt-8
              "
            >
              For over four decades, Menspool has been a
              trusted leader in swimming pool engineering,
              construction, maintenance and water feature
              solutions across Singapore.

              We deliver innovative aquatic environments
              for residential developments, hospitality
              projects and commercial facilities, combining
              engineering excellence with long-term reliability.
            </p>

            <p
              className="
              text-gray-600
              text-lg
              leading-9
              mt-6
              "
            >
              Our commitment to quality, innovation and
              customer satisfaction has made us one of
              Singapore's most respected names in the
              swimming pool industry.
            </p>

            <button
              className="
              mt-10
              bg-cyan-500
              hover:bg-cyan-600
              text-white
              px-8
              py-4
              rounded-full
              transition-all
              duration-300
              "
            >
              Learn More
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;
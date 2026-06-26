import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function CTA() {
  const navigate = useNavigate();

  return (
    <section
      className="relative py-32"
      style={{
        backgroundImage: "url('/images/cta.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#081120]/75"></div>

      <div className="container-custom relative z-10 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-6xl font-bold text-white"
        >
          Ready to Build Your Dream Pool?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/80 text-lg max-w-3xl mx-auto mt-6 leading-8"
        >
          Whether it's a luxury residential pool, commercial aquatic facility
          or a complete renovation, our team is ready to bring your vision to life.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          onClick={() => navigate("/contact")}
          className="mt-10 px-10 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold transition-all duration-300"
        >
          Get a Free Consultation
        </motion.button>

      </div>
    </section>
  );
}

export default CTA;
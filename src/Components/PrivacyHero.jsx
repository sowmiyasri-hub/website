import { motion } from "framer-motion";

function PrivacyHero() {
  return (
    <section
      className="relative h-[45vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/about-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center"
      >
        <h1 className="text-6xl font-black text-white">
          Privacy Policy
        </h1>

        <p className="text-slate-300 mt-5">
          Your privacy is important to us.
        </p>
      </motion.div>
    </section>
  );
}

export default PrivacyHero;
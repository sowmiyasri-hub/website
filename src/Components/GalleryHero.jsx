import { motion } from "framer-motion";

function GalleryHero() {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/images/counter-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70"></div>

      <motion.div
        initial={{ opacity:0,y:40 }}
        animate={{ opacity:1,y:0 }}
        className="relative text-center"
      >
        <h1 className="text-6xl font-black text-white">

          Our Gallery

        </h1>

        <p className="text-slate-300 mt-6 text-xl">

          Explore Our Premium Projects

        </p>

      </motion.div>

    </section>
  );
}

export default GalleryHero;
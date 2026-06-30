import Masonry from "react-masonry-css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

function MasonryGallery({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const breakpoints = {
    default: 4,
    1280: 3,
    768: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={img}
              alt=""
              className="w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-lg font-semibold">
                View Image
              </p>
            </div>
          </motion.div>
        ))}
      </Masonry>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img }))}
      />
    </>
  );
}

export default MasonryGallery;
import { Link, useParams } from "react-router-dom";
import { galleryImages } from "../data/galleryData";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import MasonryGallery from "./MasonryGallery";
function GalleryGrid() {
  const { category } = useParams();

  const images = galleryImages[category] || [];

  const title = category
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-24 bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}

        <div className="mb-10">

          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 text-cyan-500 hover:text-cyan-600 font-semibold"
          >
            <FaArrowLeft />

            Back To Gallery

          </Link>

        </div>

        {/* Heading */}

        <motion.div
          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          className="mb-20"
        >

          <h1 className="text-5xl font-black">

            {title}

          </h1>

          <p className="mt-4 text-slate-600">

            Explore our completed projects.

          </p>

        </motion.div>

        {/* Images */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<MasonryGallery images={images} />
          {images.map((image, i) => (

            <motion.div

              key={i}

              initial={{ opacity:0,y:50 }}

              whileInView={{ opacity:1,y:0 }}

              viewport={{ once:true }}

              transition={{ delay:i*.08 }}

              whileHover={{
                y:-10
              }}

              className="overflow-hidden rounded-[30px] shadow-xl cursor-pointer"

              onClick={()=>{
                setIndex(i);
                setOpen(true);
              }}

            >

              <img

                src={image}

                alt=""

                className="h-80 w-full object-cover hover:scale-110 transition duration-700"

              />

            </motion.div>

          ))}

        </div>

      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img)=>({src:img}))}
      />

    </section>
  );
}

export default GalleryGrid;
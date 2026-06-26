import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearchPlus } from "react-icons/fa";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function GalleryPreview() {
  const navigate = useNavigate();

  const images = [
    "images/gallery/Gallery1.jpg",
    "images/gallery/Gallery2.jpg",
    "images/gallery/Gallery3.jpg",
    "images/gallery/Gallery4.jpg",
    "images/gallery/Gallery5.jpg",
    "images/gallery/Gallery6.jpg",
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((img) => ({
    src: img,
  }));

  return (
    <section className="py-28 bg-slate-50">

      <div className="container-custom">

        {/* Heading */}

        <div className="flex justify-between items-center mb-14">

          <div>

            <span className="uppercase tracking-[4px] text-cyan-500 font-semibold">
              Gallery
            </span>

            <h2 className="text-5xl font-bold mt-3">
              Our Latest Projects
            </h2>

          </div>

          <button
            onClick={() => navigate("/gallery")}
            className="px-8 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition"
          >
            View All →
          </button>

        </div>

        {/* Gallery Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((img, i) => (

            <div
              key={i}
              className="group relative h-[320px] rounded-[25px] overflow-hidden cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >

              <img
                src={img}
                alt=""
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">

                  <FaSearchPlus className="text-cyan-500 text-3xl"/>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Lightbox */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />

    </section>
  );
}

export default GalleryPreview;
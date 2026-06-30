import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { galleryCategories } from "../Data/GalleryData";
import { FaArrowRight } from "react-icons/fa";

function GalleryCategories() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-10">

          {galleryCategories.map((item,index)=>(

            <motion.div

              key={index}

              whileHover={{
                y:-10
              }}

              className="group rounded-[35px] overflow-hidden shadow-xl"

            >

              <img

                src={item.image}

                className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"

              />

              <div className="p-8">

                <h2 className="text-3xl font-bold">

                  {item.title}

                </h2>

                <p className="mt-4 text-slate-600">

                  {item.description}

                </p>

                <Link

                  to={`/gallery/${item.id}`}

                  className="mt-8 inline-flex items-center text-cyan-500 font-semibold"

                >

                  View Gallery

                  <FaArrowRight className="ml-3"/>

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default GalleryCategories;
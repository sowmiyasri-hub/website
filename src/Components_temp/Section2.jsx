import {
  FaSwimmingPool,
  FaTools,
  FaStore,
  FaWater,
  FaHotTub,
  FaWrench,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const services = [
  {
    icon: <FaSwimmingPool />,
    title: "Pool Engineering",
  },
  {
    icon: <FaTools />,
    title: "Pool Care",
  },
  {
    icon: <FaStore />,
    title: "Pool Shop",
  },
  {
    icon: <FaWater />,
    title: "Water Features",
  },
  {
    icon: <FaHotTub />,
    title: "Spa Systems",
  },
  {
    icon: <FaWrench />,
    title: "Pool Renovation",
  },
];

function Section2() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-cyan-500 uppercase tracking-[4px] font-semibold">
            Our Divisions
          </span>

          <h2 className="text-5xl font-bold mt-4">
            End-to-End Excellence
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            From engineering and construction to maintenance,
            water quality management and premium pool products.
          </p>

        </div>

        {/* Slider */}

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >

          {services.map((item, index) => (

            <SwiperSlide key={index}>

              <div
                className="
                group
                relative
                mt-16
                mb-16
                bg-white
                rounded-3xl
                shadow-lg
                h-[280px]
                flex
                flex-col
                justify-center
                items-center
                text-center
                transition-all
                duration-500
                hover:-translate-y-4
                hover:shadow-2xl
                "
              >

                {/* Circle Icon */}

                <div
                  className="
                  absolute
                  -top-12
                  w-24
                  h-24
                  rounded-full
                  bg-white
                  shadow-lg
                  flex
                  items-center
                  justify-center
                  text-cyan-500
                  text-4xl
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-12
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold text-slate-800 px-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-4 px-8">
                  Premium swimming pool solutions
                  delivered with quality and precision.
                </p>

                {/* Arrow */}

                <div
                  className="
                  absolute
                  -bottom-8
                  w-16
                  h-16
                  rounded-full
                  bg-slate-900
                  text-white
                  flex
                  items-center
                  justify-center
                  text-2xl
                  transition-all
                  duration-500
                  group-hover:bg-cyan-500
                  group-hover:translate-x-2
                  "
                >
                  →
                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>
    </section>
  );
}

export default Section2;
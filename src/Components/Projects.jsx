import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Projects() {

  const projects = [
    {
      title: "Luxury Villa Pools",
      location: "Singapore",
      image: "/images/Project2.jpg",
    },
    {
      title: "Condominium Pools",
      location: "Singapore",
      image: "/images/Project-2.jpg",
    },
    {
      title: "Hotel & Resort Pools",
      location: "Singapore",
      image: "/images/Project3.jpg",
    },
    {
      title: "Commercial Projects",
      location: "Singapore",
      image: "/images/Project4.jpg",
    },
  ];

  return (
    <section className="py-28 bg-white">

      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-cyan-500 uppercase tracking-[4px] font-semibold">
            Featured Projects
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Our Recent Works
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Discover some of our completed swimming pool,
            spa and water feature projects across Singapore.
          </p>

        </div>

        {/* Slider */}

        <Swiper
          modules={[Pagination, Autoplay]}
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
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >

          {projects.map((item, index) => (

            <SwiperSlide key={index}>

              <div
                className="
                group
                relative
                h-[550px]
                rounded-[30px]
                overflow-hidden
                cursor-pointer
                "
              >

                {/* Image */}

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/30
                  to-transparent
                  "
                />

                {/* Content */}

                <div
                  className="
                  absolute
                  bottom-0
                  left-0
                  p-8
                  text-white
                  "
                >

                  <span className="text-cyan-400 uppercase tracking-[3px]">
                    {item.location}
                  </span>

                  <h3 className="text-3xl font-bold mt-3">
                    {item.title}
                  </h3>

                  <button
                    className="
                    mt-6
                    px-6
                    py-3
                    bg-cyan-500
                    rounded-full
                    transition-all
                    duration-300
                    group-hover:bg-white
                    group-hover:text-black
                    "
                  >
                    View Project →
                  </button>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Projects;
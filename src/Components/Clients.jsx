import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Clients() {
  const clients = [
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
    "/images/client4.png",
    "/images/client5.png",
    "/images/client6.png",
  ];

  return (
    <section className="py-28 bg-white">

      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-cyan-500 uppercase tracking-[4px] font-semibold">
            Trusted By
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Our Clients
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Trusted by luxury residences, hotels,
            developers and commercial establishments
            across Singapore.
          </p>

        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
        >

          {clients.map((logo, index) => (

            <SwiperSlide key={index}>

              <div
                className="
  h-[180px]
  bg-blue-900
  rounded-[30px]
  shadow-lg
  flex
  items-center
  justify-center
  p-8
  hover:shadow-2xl
  transition-all
  duration-500
  "
              >

                <img
                  src={logo}
                  alt=""
                  className="
    w-[200px]
    h-auto
    object-contain
    grayscale
    hover:grayscale-0
    transition-all
    duration-500
    "
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Clients;
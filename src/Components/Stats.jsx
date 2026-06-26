import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function StatsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      number: 40,
      suffix: "+",
      title: "Years Experience",
    },
    {
      number: 500,
      suffix: "+",
      title: "Successful Projects",
    },
    {
      number: 200,
      suffix: "+",
      title: "Satisfied Clients",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/counter-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#081120]/80"></div>

      <div className="container-custom relative z-10">

        <div className="grid md:grid-cols-3 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                text-center
                py-12
                rounded-[24px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                transition-all
                duration-500
                hover:bg-white/10
              "
            >
              <h2 className="text-white text-6xl lg:text-7xl font-bold">

                {inView ? (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={3}
                  />
                ) : (
                  0
                )}

                <span className="text-cyan-400">
                  {item.suffix}
                </span>

              </h2>

              <p
                className="
                  mt-4
                  text-white/70
                  uppercase
                  tracking-[3px]
                  text-sm
                "
              >
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default StatsCounter;
import { useNavigate } from "react-router-dom";

function Divisions() {
    const navigate = useNavigate();

    const cards = [
        {
            title: "Pool Engineering",
            subtitle: "Design • Build • Innovation",
            image: "/images/engineering.jpg",
            logo: "/images/Menspool.png",
            route: "/pool-engineering",
        },
        {
            title: "Pool Care",
            subtitle: "Maintenance • Water Quality",
            image: "/images/poolcare.jpg",
            logo: "/images/swimspa.png",
            route: "/pool-care",
        },
        {
            title: "Pool Shop",
            subtitle: "Equipment • Chemicals",
            image: "/images/poolshop.jpg",
            logo: "/images/poolconnect.png",
            route: "/pool-shop",
        },
    ];

    return (
        <section className="py-28 bg-white">

            <div className="container-custom">

                <div className="text-center mb-16">

                    <span className="text-cyan-500 uppercase tracking-[4px] font-semibold">
                        Our Divisions
                    </span>

                    <h2 className="text-5xl lg:text-6xl font-bold mt-4">
                        End-to-End Excellence
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto mt-5">
                        Engineering, maintenance and premium pool products
                        under one trusted group.
                    </p>

                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {cards.map((card, index) => (

                        <div
                            key={index}
                            onClick={() => navigate(card.route)}
                            className="
                group
                relative
                h-[650px]
                rounded-[30px]
                overflow-hidden
                cursor-pointer
                shadow-xl
              "
                        >

                            {/* Background Image */}

                            <img
                                src={card.image}
                                alt={card.title}
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
                  from-black/85
                  via-black/40
                  to-transparent
                "
                            />

                            {/* Content */}

                            <div
                                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  justify-end
                  p-10
                "
                            >

                                <img
                                    src={card.logo}
                                    alt=""
                                    className="h-16 w-auto mb-8"
                                />

                                <h3 className="text-white text-4xl font-bold">
                                    {card.title}
                                </h3>

                                <p className="text-white/80 mt-3 text-lg">
                                    {card.subtitle}
                                </p>

                                <button
                                    className="
                    mt-8
                    w-fit
                    px-8
                    py-3
                    bg-white
                    text-black
                    rounded-full
                    font-medium
                    transition-all
                    duration-300
                    group-hover:bg-cyan-500
                    group-hover:text-white
                  "
                                >
                                    Explore →
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Divisions;
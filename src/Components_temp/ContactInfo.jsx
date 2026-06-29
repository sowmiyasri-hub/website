import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
   FaRandom,
   FaSalesforce,
FaProjectDiagram,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="container-custom">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[4px] text-cyan-500 font-semibold">
            Contact Information
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Reach Us Anytime
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Address */}

          <div className="bg-white rounded-[25px] shadow-lg p-8 text-center hover:-translate-y-2 transition">

            <div className="text-cyan-500 text-4xl flex justify-center mb-5">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-xl font-bold mb-3">
              Office
            </h3>

            <p className="text-gray-600">
               +65 6266 1211
              <br />
              info@menspool.com.sg
              <br />
 8 Third Chin Bee Road,Singapore 618684
              <br />
            </p>

          </div>

          {/* Projects */}
          <div className="bg-white rounded-[25px] shadow-lg p-8 text-center hover:-translate-y-2 transition">

            <div className="text-cyan-500 text-4xl flex justify-center mb-5">
             <FaProjectDiagram />
            </div>

            <h3 className="text-xl font-bold mb-3">

              Projects
            </h3>

            <p className="text-gray-600">
              Mens’pool Engineering Pte Ltd
              <br />
              +65 6266 0238
              <br />
              project@menspool.com.sg
            </p>

          </div>

          {/* Service & Maintenance */}

          <div className="bg-white rounded-[25px] shadow-lg p-8 text-center hover:-translate-y-2 transition">

            <div className="text-cyan-500 text-4xl flex justify-center mb-5">
          <FaRandom />
            </div>

            <h3 className="text-xl font-bold mb-3">

              Service & Maintenance
            </h3>

            <p className="text-gray-600">
              Swimspa Pte Ltd
              <br />
              +65 6266 0696
              <br />
              maintenance@menspool.com.sg
            </p>

          </div>

          {/* Sales */}

          <div className="bg-white rounded-[25px] shadow-lg p-8 text-center hover:-translate-y-2 transition">

            <div className="text-cyan-500 text-4xl flex justify-center mb-5">
             <FaSalesforce />
            </div>

            <h3 className="text-xl font-bold mb-3">

              Sales
            </h3>

            <p className="text-gray-600">
              Pool Connect Pte Ltd
              <br />
              +65 6266 2550
              <br />
              esales@epoolconnect.com
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactInfo;
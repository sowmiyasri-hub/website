import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";
import ContactMap from "../Components/ContactMap";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
    
      {/* Banner */}

      <section
        className="relative h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/Contact-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#081120]/75"></div>

        <div className="relative text-center text-white">
          <h1 className="text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-5 text-xl">
            We'd love to hear about your project.
          </p>
        </div>
      </section>

      {/* Contact Section */}

      <section className="py-28 bg-white">

        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-16">

            <ContactMap />

            <ContactForm />

          </div>

        </div>

      </section>

      <ContactInfo />

      <Footer />
    </>
  );
}

export default Contact;
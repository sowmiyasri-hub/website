import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import OurServices from "../Components/Services";
import Aboutsection from "../Components/About";
import StatsCounter from "../Components/Stats";
// import Testimonials from "../components/Testimonials";
import GalleryPreview from "../Components/GalleryPreview";
import Footer from "../Components/Footer";
import Section2 from "../Components/Section2";
import Divisions from "../Components/divisions";
import Projects from "../Components/Projects";
import Clients from "../Components/Clients";
import CTA from "../Components/CTA";

function Home() {
  return (
    <>
      <Navbar />  
      <Hero />
      <Section2 />
      <Divisions/>
      <Aboutsection />
      <StatsCounter />
      <Projects />
      <OurServices />
      {/* <Testimonials /> */}
      <Clients />
      <GalleryPreview />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
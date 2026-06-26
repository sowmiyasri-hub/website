import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurServices from "../components/Services";
import Aboutsection from "../components/About";
import StatsCounter from "../components/Stats";
// import Testimonials from "../components/Testimonials";
import GalleryPreview from "../components/GalleryPreview";
import Footer from "../components/Footer";
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
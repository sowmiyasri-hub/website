import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import EngineeringHero from "../Components/EngineeringHero";
import WhyChooseEngineering from "../Components/WhyChooseEngineering";
import EngineeringStory from "../Components/EngineeringStory";
import EngineeringServices from "../Components/EngineeringServices";
import ProjectWorkflow from "../Components/ProjectWorkflow";
import TechnologySection from "../Components/TechnologySection";
import FeaturedProjects from "../Components/FeaturedProjects";
import StatisticsSection from "../Components/StatisticsSection";
import Clients from "../Components/Clients";
import CTA from "../Components/CTA";

function PoolEngineering() {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <EngineeringHero />

      {/* Why Choose Menspool */}
      <WhyChooseEngineering />

      {/* Company Story */}
      <EngineeringStory />

      {/* Services */}
      <EngineeringServices />

      {/* Project Process */}
      <ProjectWorkflow />

      {/* Technology */}
      <TechnologySection />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Statistics */}
      <StatisticsSection />

      {/* Client Logos */}
      <Clients />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default PoolEngineering;
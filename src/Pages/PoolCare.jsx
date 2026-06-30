import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import PoolCareHero from "../Components/PoolCareHero";
import WhyChoosePoolCare from "../Components/WhyChoosePoolCare";
import PoolCareServices from "../Components/PoolCareServices";
import MaintenanceProcess from "../Components/MaintenanceProcess";
import MaintenancePlans from "../Components/MaintenancePlans";
import WaterChemistry from "../Components/WaterChemistry";
import StatisticsSection from "../Components/StatisticsSection";
import Clients from "../Components/Clients";
import CTA from "../Components/CTA";
import BeforeAfter from "../Components/BeforeAfter";
function PoolCare() {
  return (
    <>
      <Navbar />

      <PoolCareHero />

      <WhyChoosePoolCare />

      <PoolCareServices />

      <MaintenanceProcess />

      <MaintenancePlans />

      <WaterChemistry />

      <BeforeAfter />

      <StatisticsSection />

      <Clients />

      <CTA />

      <Footer />
    </>
  );
}

export default PoolCare;
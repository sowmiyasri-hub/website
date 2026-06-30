import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import PoolShopHero from "../Components/PoolShopHero";
import WhyChoosePoolShop from "../Components/WhyChoosePoolShop";
import FeaturedProducts from "../Components/FeaturedProducts";
import BrandPartners from "../Components/BrandPartners";
import ShopBenefits from "../Components/ShopBenefits";
import Clients from "../Components/Clients";
import CTA from "../Components/CTA";

function PoolShop() {
  return (
    <>
      <Navbar />

      <PoolShopHero />

      <WhyChoosePoolShop />

      <FeaturedProducts />

      <BrandPartners />

      <ShopBenefits />

      <Clients />

      <CTA />

      <Footer />
    </>
  );
}

export default PoolShop;
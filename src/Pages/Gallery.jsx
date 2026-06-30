import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import GalleryHero from "../Components/GalleryHero";
import GalleryCategories from "../Components/GalleryCategories";

function Gallery() {
  return (
    <>
      <Navbar />

      <GalleryHero />

      <GalleryCategories />

      <Footer />
    </>
  );
}

export default Gallery;
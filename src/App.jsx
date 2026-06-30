import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import PoolEngineering from "./Pages/PoolEngineering";
import PoolCare from "./Pages/PoolCare";
import PoolShop from "./Pages/PoolShop";
import Contact from "./Pages/Contact";
import CategoryGallery from "./Pages/CategoryGallery";
import Terms from "./Pages/Terms";
import PrivacyPolicy from "./Pages/PrivacyPolicy";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pool-engineering" element={<PoolEngineering />} />
        <Route path="/pool-care" element={<PoolCare />} />
        <Route path="/pool-shop" element={<PoolShop />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/gallery/:category"
          element={<CategoryGallery />}
        />

        <Route path="/terms" element={<Terms />} />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
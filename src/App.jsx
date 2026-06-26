import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import PoolEngineering from "./Pages/PoolEngineering";
import PoolCare from "./Pages/PoolCare";
import PoolShop from "./Pages/PoolShop";
import Contact from "./Pages/Contact";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pool-engineering" element={<PoolEngineering />} />
        <Route path="/pool-care" element={<PoolCare />} />
        <Route path="/pool-shop" element={<PoolShop />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
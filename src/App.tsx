import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MobileFloatingActions from "./components/MobileFloatingActions";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Cinema from "./pages/Cinema";
import Dining from "./pages/Dining";
import Stores from "./pages/Stores";
import Loyalty from "./pages/Loyalty";

function App() {
  return (
    <>
      <Navbar />

      {/* <MobileStatusBar
        isOpen={true}
        movies={8}
        offers={12}
        events={3}
        premieres={2}
        newStores={1}
      /> */}

      <MobileFloatingActions />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/shops" element={<Stores />} />
          <Route path="/loyalty" element={<Loyalty />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
import { Routes, Route, Navigate, useParams } from "react-router-dom";

import Navbar from "./components/Navbar";
import MobileFloatingActions from "./components/MobileFloatingActions";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Cinema from "./pages/Cinema";
import Dining from "./pages/Dining";
import Stores from "./pages/Stores";
import Loyalty from "./pages/Loyalty";
import SummerCampaign from "./pages/SummerCampaign";
import StorePage from "./pages/StorePage";

import { getStoreBySlug } from "./data/stores";

function StorePageRoute() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/shops" replace />;
  }

  const store = getStoreBySlug(slug);

  if (!store) {
    return <Navigate to="/shops" replace />;
  }

  return <StorePage store={store} />;
}

function App() {
  return (
    <>
      <Navbar />

      <MobileFloatingActions />

      <main>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/events" element={<Events />} />

          <Route path="/cinema" element={<Cinema />} />

          <Route path="/dining" element={<Dining />} />

          {/* Store listing */}
          <Route path="/shops" element={<Stores />} />

          {/* Individual store pages */}
          <Route path="/shops/:slug" element={<StorePageRoute />} />

          <Route path="/loyalty" element={<Loyalty />} />

          <Route
            path="/campaigns/summer"
            element={<SummerCampaign />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
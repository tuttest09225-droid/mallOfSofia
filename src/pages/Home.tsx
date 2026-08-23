import Hero from "../components/Home/Hero";
import DiscoverSection from "../components/Home/DiscoverSection";
import FeaturedPartners from "../components/Home/FeaturedPartners";
import WhatsHappening from "../components/Home/WhatsHappening";
import CinemaSpotlight from "../components/Home/CinemaSpotlight";
import FeaturedCampaign from "../components/Home/FeaturedCampaign";

import HomeBackground from "../components/Home/HomeBackground";
import FloatingDiscoveryBookmarks from "../components/FloatingDiscoveryBookmarks";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <HomeBackground />

      <div className="relative z-10">
        <Hero />
        <FloatingDiscoveryBookmarks
          visibility="after-discovery"
          discoverySectionId="discovery-section"
          footerId="site-footer"
        />
        <FeaturedPartners />
        <DiscoverSection />
        <WhatsHappening />
        <FeaturedCampaign />
        <CinemaSpotlight />
      </div>
    </div>
  );
}

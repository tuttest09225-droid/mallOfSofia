import Hero from "../components/Home/Hero";
import DiscoverSection from "../components/Home/DiscoverSection";
import FeaturedPartners from "../components/Home/FeaturedPartners";
import WhatsHappening from "../components/Home/WhatsHappening";
import CinemaSpotlight from "../components/Home/CinemaSpotlight";
import FeaturedCampaign from "../components/Home/FeaturedCampaign";

export default function Home() {
  return (
    <div className="bg-base-100">
      <Hero />
      <FeaturedPartners />
      <DiscoverSection />
      <WhatsHappening />
      <FeaturedCampaign />
      <CinemaSpotlight />
    </div>
  );
}

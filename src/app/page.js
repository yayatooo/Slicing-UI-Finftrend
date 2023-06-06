import BestDealSection from "./components/BestDealSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import JoinSection from "./components/JoinSection";
import LongtextSection from "./components/LongtextSection";
import OpenTabSection from "./components/OpenTabSection";
import PartnerSection from "./components/PartnerSection";
import PlatformSection from "./components/PlatformSection";

export default function Home() {
  return (
    <>
      <div className="mx-auto">
        <HeroSection />
        <OpenTabSection />
        <LongtextSection />
        <PartnerSection />
        <PlatformSection />
        <BestDealSection />
        <JoinSection />
        <FooterSection />
      </div>
    </>
  );
}

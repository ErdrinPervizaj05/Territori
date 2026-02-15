import HeroBanner from "./HeroBanner";
import PremiumFirmsCarousel from "./PremiumFirmsCarousel";
import PremiumPropertiesCarousel from "./PremiumPropertiesCarousel";
import Listings from "./Listings";
import TrustedBy from "./TrustedBy";

const HomeLayout = () => {
  return (
    <div>
      <HeroBanner />
      <TrustedBy/>
      <PremiumFirmsCarousel />
      <PremiumPropertiesCarousel />
      <Listings />
    </div>
  );
};

export default HomeLayout;

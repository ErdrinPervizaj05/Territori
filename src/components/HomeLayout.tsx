import HeroBanner from "./HeroBanner";
import Listings from "./Listings";
import TrustedBy from "./TrustedBy";

const HomeLayout = () => {
  return (
    <div>
      <HeroBanner />
      <TrustedBy/>
      <Listings />
    </div>
  );
};

export default HomeLayout;

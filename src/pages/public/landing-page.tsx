import HeroSection from "@/components/shared/hero-secion";
import MainNavBar from "@/components/shared/main-nav-bar";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <MainNavBar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;

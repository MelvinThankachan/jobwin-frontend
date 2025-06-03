import CategoriesSection from "@/components/shared/categories-section";
import FeaturedCompaniesSection from "@/components/shared/featured-companies-section";
import HeroSection from "@/components/shared/hero-secion";
import MainNavBar from "@/components/shared/main-nav-bar";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <MainNavBar />
      <HeroSection />
      <FeaturedCompaniesSection />
      <CategoriesSection />
    </div>
  );
};

export default LandingPage;

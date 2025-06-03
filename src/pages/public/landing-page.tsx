import CategoriesSection from "@/components/shared/categories-section";
import FeaturedCompaniesSection from "@/components/shared/featured-companies-section";
import FeaturedJobsSection from "@/components/shared/featured-jobs-section";
import HeroSection from "@/components/shared/hero-secion";
import MainNavBar from "@/components/shared/main-nav-bar";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <MainNavBar />
      <HeroSection />
      <FeaturedCompaniesSection />
      <CategoriesSection />
      <FeaturedJobsSection />
      <div className="flex items-center justify-center text-9xl font-bold font-clash h-96">
        Melvin Thankachan
      </div>
    </div>
  );
};

export default LandingPage;

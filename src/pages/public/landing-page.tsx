import CategoriesSection from "@/components/shared/categories-section";
import FeaturedCompaniesSection from "@/components/shared/featured-companies-section";
import FeaturedJobsSection from "@/components/shared/featured-jobs-section";
import HeroSection from "@/components/shared/hero-section";
import LatestJobsSection from "@/components/shared/latest-jobs-section";

const LandingPage = () => {
  return (
    <>
      <HeroSection
        mainTitle="Discover more than"
        highlightedText="5000+ Jobs"
        description="Great platform for the job seeker that searching for new career
          heights and passionate about startups."
      />
      <FeaturedCompaniesSection />
      <CategoriesSection />
      <FeaturedJobsSection />
      <LatestJobsSection />
    </>
  );
};

export default LandingPage;

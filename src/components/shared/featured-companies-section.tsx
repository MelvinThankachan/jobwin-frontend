import { Muted } from "../ui/typography";

const FeaturedCompaniesSection = () => {
  return (
    <section className="section-container">
      <Muted className="text-2xl">Companies we helped grow</Muted>
      <div className="flex items-center justify-between">
        <img src="/logos/vodafone-logo.svg" alt="Vodafone" />
        <img src="/logos/intel-logo.svg" alt="Intel" />
        <img src="/logos/tesla-logo.svg" alt="Tesla" />
        <img src="/logos/amd-logo.svg" alt="Amd" />
        <img src="/logos/talkit-logo.svg" alt="Talkit" />
      </div>
    </section>
  );
};

export default FeaturedCompaniesSection;

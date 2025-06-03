import JobCard from "./job-card";
import SectionHeader from "./section-header";

const FeaturedJobsSection = () => {
  return (
    <section className="section-container">
      <SectionHeader
        mainTitle="Featured"
        highlightedText="jobs"
        actionLabel="See all jobs"
      />
      <div className="grid grid-cols-4 gap-10">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </section>
  );
};

export default FeaturedJobsSection;

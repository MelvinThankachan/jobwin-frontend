import JobCard from "./job-card";
import SectionHeader from "./section-header";

const LatestJobsSection = () => {
  return (
    <section className="section-container">
      <SectionHeader
        mainTitle="Latest"
        highlightedText="job openings"
        actionLabel="See all jobs"
      />
      <div className="grid grid-cols-2 gap-10">
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

export default LatestJobsSection;

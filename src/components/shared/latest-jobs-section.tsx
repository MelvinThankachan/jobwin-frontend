import JobListCard from "./job-list-card";
import SectionHeader from "./section-header";

const jobListData = [
  {
    jobTitle: "UI Designer",
    jobType: "Full-time",
    company: "Google",
    location: "New York",
    description:
      "We are hiring a UI Designer to join our team. We are looking for a talented UI Designer to join our team. We are looking for a talented UI Designer to join our team.",
    tags: ["Design", "UI", "UX"],
    logoURL: "/logos/google-logo.png",
  },
  {
    jobTitle: "Email Marketing Specialist",
    jobType: "Part-time",
    company: "Mailchimp",
    location: "Washington",
    description:
      "We are looking for a talented Email Marketing Specialist to join our team. We are looking for a talented Email Marketing Specialist to join our team.",
    tags: ["Marketing", "Sales", "Email"],
    logoURL: "/logos/mailchimp-logo.png",
  },
  {
    jobTitle: "Data Analyst",
    jobType: "Internship",
    company: "Dropbox",
    location: "San Francisco",
    description:
      "We are looking for a talented Data Analyst to join our team. We are looking for a talented Data Analyst to join our team.",
    tags: ["Data", "Analytics", "SQL"],
    logoURL: "/logos/dropbox-logo.png",
  },
  {
    jobTitle: "Product Manager",
    jobType: "Full-time",
    company: "Google",
    location: "New York",
    description:
      "We are looking for a talented Product Manager to join our team. We are looking for a talented Product Manager to join our team.",
    tags: ["Product", "Management", "UX"],
    logoURL: "/logos/google-logo.png",
  },
  {
    jobTitle: "Lead Designer",
    jobType: "Remote",
    company: "Canva",
    location: "New York",
    description:
      "We are looking for a talented Lead Designer to join our team. We are looking for a talented Lead Designer to join our team.",
    tags: ["Design", "UI", "UX"],
    logoURL: "/logos/canva-logo.png",
  },
  {
    jobTitle: "Brand Strategist",
    jobType: "Part-time",
    company: "Godaddy",
    location: "New York",
    description:
      "We are looking for a talented Brand Strategist to join our team. We are looking for a talented Brand Strategist to join our team.",
    tags: ["Design", "UI", "UX"],
    logoURL: "/logos/godaddy-logo.png",
  },
  {
    jobTitle: "Visual Designer",
    jobType: "Full time",
    company: "Blinklist",
    location: "New York",
    description:
      "We are looking for a talented Visual Designer to join our team. We are looking for a talented Visual Designer to join our team.",
    tags: ["Design", "UI", "UX"],
    logoURL: "/logos/blinklist-logo.png",
  },
  {
    jobTitle: "Audio Designer",
    jobType: "Full-time",
    company: "Spotify",
    location: "New York",
    description:
      "We are looking for a talented Audio Designer to join our team. We are looking for a talented Audio Designer to join our team.",
    tags: ["Design", "UI", "UX"],
    logoURL: "/logos/spotify-logo.png",
  },
];

const LatestJobsSection = () => {
  return (
    <section className="section-container">
      <SectionHeader
        mainTitle="Latest"
        highlightedText="job openings"
        actionLabel="See all jobs"
      />
      <div className="grid grid-cols-2 gap-10">
        {jobListData.map((job, idx) => (
          <JobListCard
            key={job.jobTitle + job.company + idx}
            jobTitle={job.jobTitle}
            jobType={job.jobType}
            company={job.company}
            location={job.location}
            description={job.description}
            tags={job.tags}
            logoURL={job.logoURL}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestJobsSection;

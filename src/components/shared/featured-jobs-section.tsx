import JobGridCard from "./job-grid-card";
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
        <JobGridCard
          jobTitle="UI Designer"
          jobType="Full-time"
          company="Google"
          location="New York"
          description="We are hiring a UI Designer to join our team. We are looking for a talented UI Designer to join our team. We are looking for a talented UI Designer to join our team."
          tags={["Design", "UI", "UX"]}
          logoURL="/logos/google-logo.png"
        />
        <JobGridCard
          jobTitle="Email Marketing Specialist"
          jobType="Part-time"
          company="Mailchimp"
          location="Washington"
          description="We are looking for a talented Email Marketing Specialist to join our team. We are looking for a talented Email Marketing Specialist to join our team."
          tags={["Marketing", "Sales", "Email"]}
          logoURL="/logos/mailchimp-logo.png"
        />
        <JobGridCard
          jobTitle="Data Analyst"
          jobType="Internship"
          company="Dropbox"
          location="San Francisco"
          description="We are looking for a talented Data Analyst to join our team. We are looking for a talented Data Analyst to join our team."
          tags={["Data", "Analytics", "SQL"]}
          logoURL="/logos/dropbox-logo.png"
        />
        <JobGridCard
          jobTitle="Product Manager"
          jobType="Full-time"
          company="Google"
          location="New York"
          description="We are looking for a talented Product Manager to join our team. We are looking for a talented Product Manager to join our team."
          tags={["Product", "Management", "UX"]}
          logoURL="/logos/google-logo.png"
        />
        <JobGridCard
          jobTitle="Lead Designer"
          jobType="Remote"
          company="Canva"
          location="New York"
          description="We are looking for a talented Lead Designer to join our team. We are looking for a talented Lead Designer to join our team."
          tags={["Design", "UI", "UX"]}
          logoURL="/logos/canva-logo.png"
        />
        <JobGridCard
          jobTitle="Brand Strategist"
          jobType="Part-time"
          company="Godaddy"
          location="New York"
          description="We are looking for a talented Brand Strategist to join our team. We are looking for a talented Brand Strategist to join our team."
          tags={["Design", "UI", "UX"]}
          logoURL="/logos/godaddy-logo.png"
        />
        <JobGridCard
          jobTitle="Visual Designer"
          jobType="Full time"
          company="Blinklist"
          location="New York"
          description="We are looking for a talented Visual Designer to join our team. We are looking for a talented Visual Designer to join our team."
          tags={["Design", "UI", "UX"]}
          logoURL="/logos/blinklist-logo.png"
        />
        <JobGridCard
          jobTitle="Audio Designer"
          jobType="Full-time"
          company="Spotify"
          location="New York"
          description="We are looking for a talented Audio Designer to join our team. We are looking for a talented Audio Designer to join our team."
          tags={["Design", "UI", "UX"]}
          logoURL="/logos/spotify-logo.png"
        />
      </div>
    </section>
  );
};

export default FeaturedJobsSection;

import { Muted } from "../ui/typography";
import Tag from "./tag";

const JobCard = () => {
  return (
    <div className="border p-10 flex flex-col gap-5 hover:cursor-pointer hover:bg-primary group">
      <div className="flex justify-between items-center">
        <img
          src="/logos/pitch-logo.png"
          alt="company logo"
          className="w-16 h-16 aspect-square object-cover object-center rounded-full"
        />
        <Tag label="Full Time" color="emerald" />
      </div>
      <div>
        <h1 className="font-semibold text-2xl group-hover:text-primary-foreground">
          Email Marketing
        </h1>
        <div className="group-hover:text-primary-foreground">
          Pitch | Berlin, Germany
        </div>
      </div>
      <Muted className="line-clamp-2 group-hover:text-primary-foreground">
        Pitch is looking for a Customer Manager to join the marketing team and
        drive customer engagement, retention, and satisfaction through strategic
        campaign management and personalized communication.
      </Muted>
      <div className="flex gap-5">
        <Tag label="Marketing" />
        <Tag label="Design" />
      </div>
    </div>
  );
};

export default JobCard;

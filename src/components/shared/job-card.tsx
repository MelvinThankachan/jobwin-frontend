import { Muted } from "../ui/typography";
import Tag from "./tag";

const JobCard = () => {
  return (
    <div className="border p-10 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <img
          src="/logos/pitch-logo.png"
          alt="company logo"
          className="w-16 h-16 aspect-square object-cover object-center rounded-full"
        />
        {/* <span className="px-5 py-2 h-fit border border-primary text-primary">
          Full Time
        </span> */}
        <Tag label="Full Time" color="blue"/>
      </div>
      <div>
        <h1 className="font-semibold text-2xl">Email Marketing</h1>
        <div>Pitch | Berlin, Germany</div>
      </div>
      <Muted className="line-clamp-2 ">
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

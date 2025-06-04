import { Separator } from "../ui/separator";
import Tag from "./tag";

type JobListCardProps = {
  logoURL: string;
  jobTitle: string;
  jobType: string;
  company: string;
  location: string;
  description?: string;
  tags: string[];
};

const JobListCard: React.FC<JobListCardProps> = ({
  logoURL,
  jobTitle,
  jobType,
  company,
  location,
  tags,
}) => {
  if (tags.length > 2) {
    tags = tags.slice(0, 2);
  }

  return (
    <div className="border p-10 flex gap-10 hover:cursor-pointer hover:bg-primary group">
      <div className="flex items-start ">
        <img
          src={logoURL}
          alt="company logo"
          className="w-16 h-16 aspect-square object-cover object-center rounded-full"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="font-semibold text-2xl group-hover:text-primary-foreground line-clamp-1">
            {jobTitle}
          </h1>
          <div className="group-hover:text-primary-foreground">
            {company} | {location}
          </div>
        </div>
        <div className="flex gap-5">
          <Tag label={jobType} color="emerald" />
          <Separator orientation="vertical" />
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListCard;

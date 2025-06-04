import { Muted } from "../ui/typography";
import Tag from "./tag";

type JobGridCardProps = {
  logoURL: string;
  jobTitle: string;
  jobType: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
};

const JobGridCard: React.FC<JobGridCardProps> = ({
  logoURL,
  jobTitle,
  jobType,
  company,
  location,
  description,
  tags,
}) => {
  if (tags.length > 2) {
    tags = tags.slice(0, 2);
  }

  return (
    <div className="border p-10 flex flex-col gap-5 hover:cursor-pointer hover:bg-primary group">
      <div className="flex justify-between items-center">
        <img
          src={logoURL}
          alt="company logo"
          className="w-16 h-16 aspect-square object-cover object-center rounded-full"
        />
        <Tag label={jobType} color="emerald" />
      </div>
      <div>
        <h1 className="font-semibold text-2xl group-hover:text-primary-foreground line-clamp-1">
          {jobTitle}
        </h1>
        <div className="group-hover:text-primary-foreground">
          {company} | {location}
        </div>
      </div>
      <Muted className="line-clamp-2 group-hover:text-primary-foreground">
        {description}
      </Muted>
      <div className="flex gap-5">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
};

export default JobGridCard;

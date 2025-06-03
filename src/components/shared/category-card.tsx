import { ArrowRight } from "lucide-react";
import { Muted } from "../ui/typography";

type CategoryCardProps = {
  icon: React.ReactElement;
  title: string;
  jobs: number;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, jobs }) => {
  return (
    <div className="border p-10 flex flex-col gap-10 hover:bg-primary hover:text-primary-foreground group cursor-pointer ">
      <div>{icon}</div>
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-semibold font-clash truncate">{title}</h1>
        <div className="flex items-center gap-5 justify-between">
          <Muted className="text-2xl group-hover:text-primary-foreground">
            {jobs} jobs available
          </Muted>
          <ArrowRight className="size-7" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

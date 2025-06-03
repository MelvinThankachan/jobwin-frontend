import {
  ArrowRight,
  ChartArea,
  PencilRuler,
  Megaphone,
  Wallet,
  MonitorSmartphone,
  Cog,
  Handshake,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import CategoryCard from "./category-card";

const CategoriesSection = () => {
  return (
    <section className="section-container">
      <div className="flex items-center justify-between">
        <h1 className="text-6xl font-semibold font-clash">
          Explore by <span className="text-sky-500">category</span>
        </h1>
        <Button variant="link" size="lg">
          Show all categories <ArrowRight className="size-7" />
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <CategoryCard
          icon={<PencilRuler className="category-card-icon" />}
          title="Design"
          jobs={235}
        />
        <CategoryCard
          icon={<ChartArea className="category-card-icon" />}
          title="Sales"
          jobs={756}
        />
        <CategoryCard
          icon={<Megaphone className="category-card-icon" />}
          title="Marketing"
          jobs={235}
        />
        <CategoryCard
          icon={<Wallet className="category-card-icon" />}
          title="Finance"
          jobs={235}
        />
        <CategoryCard
          icon={<MonitorSmartphone className="category-card-icon" />}
          title="Technology"
          jobs={235}
        />
        <CategoryCard
          icon={<Cog className="category-card-icon" />}
          title="Engineering"
          jobs={235}
        />
        <CategoryCard
          icon={<Handshake className="category-card-icon" />}
          title="Business"
          jobs={235}
        />
        <CategoryCard
          icon={<Users className="category-card-icon" />}
          title="Human Resources"
          jobs={235}
        />
      </div>
    </section>
  );
};

export default CategoriesSection;

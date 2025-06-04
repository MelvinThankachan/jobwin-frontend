import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ArrowRight, ChevronRight } from "lucide-react";

type FilterGroupCollapsibleProps = {
  title: string;
  filters: string[];
};

const FilterGroupCollapsible: React.FC<FilterGroupCollapsibleProps> = ({
  title,
  filters,
}) => {
  return (
    <div className="">
      <Collapsible>
        <div className="flex items-center justify-between group">
          <h1>{title}</h1>
          <CollapsibleTrigger asChild>
            <button
              type="button"
              className="ml-2 transition-transform data-[state=open]:rotate-90"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </CollapsibleTrigger>
        </div>
        {filters.map((filter) => (
          <CollapsibleContent key={filter}>{filter}</CollapsibleContent>
        ))}
      </Collapsible>
    </div>
  );
};

export default FilterGroupCollapsible;

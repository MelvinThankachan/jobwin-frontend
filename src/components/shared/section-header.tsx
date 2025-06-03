import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

type SectionHeaderProps = {
  mainTitle: string;
  highlightedText: string;
  actionLabel: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  mainTitle,
  highlightedText,
  actionLabel,
}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-6xl font-semibold font-clash">
        {mainTitle} <span className="text-sky-500">{highlightedText}</span>
      </h1>
      <Button variant="link" size="lg">
        {actionLabel} <ArrowRight className="size-7" />
      </Button>
    </div>
  );
};

export default SectionHeader;

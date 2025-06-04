import { Muted } from "../ui/typography";
import HeroSearchBar from "./hero-search-bar";

type HeroSectionProps = {
  mainTitle: string;
  highlightedText: string;
  description: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  mainTitle,
  highlightedText,
  description,
}) => {
  return (
    <div className="w-full">
      <div className="section-container">
        <div className="text-8xl font-semibold font-clash max-w-[10ch] flex flex-col gap-5">
          <h1 className="">{mainTitle}</h1>
          <span className="text-sky-500 w-fit flex flex-col">
            {highlightedText}
            <img src="/underline-marker.svg" alt="" className="mt-5 w-full" />
          </span>
        </div>
        <Muted className="text-2xl max-w-[45ch]">{description}</Muted>
        <HeroSearchBar />
      </div>
    </div>
  );
};

export default HeroSection;

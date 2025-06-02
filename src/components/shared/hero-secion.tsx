import { Muted } from "../ui/typography";
import HeroSearchBar from "./hero-search-bar";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="container bg--400 mx-auto py-10 flex flex-col gap-10">
        <div className="text-8xl font-semibold font-clash max-w-[10ch] flex flex-col gap-5">
          <h1 className="">Discover more than</h1>
          <span className="text-sky-500 w-fit flex flex-col">
            5000+ Jobs
            <img src="/underline-marker.svg" alt="" className="mt-5 w-full" />
          </span>
        </div>
        <Muted className="text-2xl max-w-[45ch]">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </Muted>
        <HeroSearchBar />
      </div>
    </div>
  );
};

export default HeroSection;

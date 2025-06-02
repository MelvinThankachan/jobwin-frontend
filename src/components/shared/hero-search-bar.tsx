import { MapPin, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const HeroSearchBar = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="p-5 border flex gap-10 items-center max-w-6xl bg-sidebar">
        <div className="flex gap-5 items-center flex-1">
          <Search className="w-10 h-10" />
          <Input placeholder="Job title or keyword" className="" />
        </div>
        <div className="flex gap-5 items-center flex-1">
          <MapPin className="w-10 h-10" />
          <Input placeholder="Location" />
        </div>
        <div className="flex gap-5 items-center">
          <Button size="lg">Search my job</Button>
        </div>
      </div>
      <h1>Popular : UI Designer, UX Researcher, Android, Admin</h1>
    </div>
  );
};

export default HeroSearchBar;

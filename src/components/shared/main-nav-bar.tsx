import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Muted } from "../ui/typography";
import JobwinLogo from "./jobwin-logo";

const MainNavBar = () => {
  return (
    <header className="container flex bg-red- mx-auto py-5 justify-between">
      <div className="flex gap-10 items-center">
        <JobwinLogo />
        <div className="flex gap-5">
          <Muted className="text-xl">Find Jobs</Muted>
          <Muted className="text-xl">Browse Companies</Muted>
        </div>
      </div>
      <div className="flex gap-5">
        <Button variant="link" size="lg">
          Login
        </Button>
        <Separator orientation="vertical" />
        <Button size="lg">Sign Up</Button>
      </div>
    </header>
  );
};

export default MainNavBar;

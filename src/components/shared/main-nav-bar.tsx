import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import JobwinLogo from "./jobwin-logo";

const MainNavBar = () => {
  const getNavLinkStyles = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "font-semibold text-primary underline underline-offset-8 decoration-4"
      : "text-muted-foreground hover:underline underline-offset-8 decoration-2 hover:text-primary";
  };
  return (
    <header className="container flex mx-auto p-5 justify-between">
      <div className="flex gap-10 items-center">
        <NavLink to="/">
          <JobwinLogo />
        </NavLink>
        <div className="flex gap-10">
          <NavLink
            to="/find-jobs"
            className={({ isActive }) => getNavLinkStyles({ isActive })}
          >
            Find Jobs
          </NavLink>
          <NavLink
            to="/browse-companies"
            className={({ isActive }) => getNavLinkStyles({ isActive })}
          >
            Browse Companies
          </NavLink>
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

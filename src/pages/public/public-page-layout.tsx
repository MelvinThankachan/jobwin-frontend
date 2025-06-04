import FooterSection from "@/components/shared/footer-section";
import MainNavBar from "@/components/shared/main-nav-bar";
import { Outlet } from "react-router-dom";

const PublicPageLayout = () => {
  return (
    <div className="flex flex-col gap-10">
      <MainNavBar />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
};

export default PublicPageLayout;

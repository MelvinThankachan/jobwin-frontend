import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Muted } from "../ui/typography";
import JobwinLogo from "./jobwin-logo";
import Tag from "./tag";

const footerLinkSyles = "hover:underline hover:cursor-pointer";

const FooterSection = () => {
  return (
    <footer className="dark bg-background text-foreground">
      <div className="section-container">
        <div className="flex gap-10 justify-between">
          <div className="flex flex-col gap-10">
            <JobwinLogo />
            <p className="max-w-[40ch]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-semibold">Quick Links</h1>
            <nav className="flex flex-col gap-5">
              <ul className="footer-link">Companies</ul>
              <ul className="footer-link">Pricing</ul>
              <ul className="footer-link">Terms & Conditions</ul>
              <ul className="footer-link">Advice</ul>
              <ul className="footer-link">Privacy Policy</ul>
            </nav>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-semibold">Resources</h1>
            <nav className="flex flex-col gap-5">
              <ul className="footer-link">Community</ul>
              <ul className="footer-link">Help Docs</ul>
              <ul className="footer-link">Updates</ul>
              <ul className="footer-link">Contact Us</ul>
            </nav>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-semibold">Get Updates</h1>
            <p>The latest job news, articles, sent to your inbox weekly.</p>
            <div className="flex gap-5 items-center">
              <Input placeholder="Email address" type="email"></Input>
              <Button size="lg">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="py-10">
          <Separator />
        </div>
        <div className="flex justify-between items-center">
          <Muted>© 2023 Jobwin. All rights reserved</Muted>
          <div className="flex gap-5">
            <Tag className="w-12 h-12 p-2" label={<Linkedin />} color="white" />
            <Tag
              className="w-12 h-12 p-2"
              label={<Instagram />}
              color="white"
            />
            <Tag className="w-12 h-12 p-2" label={<Github />} color="white" />
            <Tag className="w-12 h-12 p-2" label={<Twitter />} color="white" />
            <Tag className="w-12 h-12 p-2" label={<Facebook />} color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

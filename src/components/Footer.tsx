import Info from "./Info";
import { IconEmail, IconLocation, IconPhone, Logo } from "./Logos";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import SignIn from "./SignIn";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="mt-80 pt-64 px-7 relative bg-primary-footer min-h-80 lg:min-h-0 lg:pl-32 lg:pt-48">
      <SignIn />
      <span className="w-full block [&>*]:h-full pl-4 lg:pl-0">
        <Logo />
      </span>
      <div className="lg:flex lg:justify-left lg:items-center lg:gap-28 lg:pb-20">
        <div className="lg:flex lg:justify-start lg:gap-20 lg:w-5/12">
          <Info
            Icon={IconLocation}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            }
          />
          <span>
            <Info Icon={IconPhone} desc={"+1-543-123-4567"} />
            <Info Icon={IconEmail} desc={"example@fylo.com"} />
          </span>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center lg:gap-20">
          <ul className="[&>*]:py-1 mt-16 lg:mt-8 lg:text-sm">
            <li>
              <a
                href="#about-us"
                className="text-white opacity-80 hover:opacity-100"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#jobs"
                className="text-white opacity-80 hover:opacity-100"
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                href="#press"
                className="text-white opacity-80 hover:opacity-100"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-white opacity-80 hover:opacity-100"
              >
                Blog
              </a>
            </li>
          </ul>
          <ul className="[&>*]:py-1 mt-8 lg:mt-0 lg:text-sm">
            <li>
              <a
                href="#about-us"
                className="text-white opacity-80 hover:opacity-100"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#jobs"
                className="text-white opacity-80 hover:opacity-100"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#press"
                className="text-white opacity-80 hover:opacity-100"
              >
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center pt-24 pb-12 lg:pt-0 lg:ml-0">
          <SocialIcon Icon={FaFacebookF} address={"#facebook"} />
          <SocialIcon Icon={AiOutlineTwitter} address={"#twitter"} />
          <SocialIcon Icon={BsInstagram} address={"#instagram"} />
        </div>
      </div>
    </footer>
  );
}

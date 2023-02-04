import { Logo } from "./Logos";

export default function Navbar() {
  return (
    <nav className="flex w-full justify-left pt-2 font-raleway bg-primary lg:justify-between lg:px-16">
      <div className="relative right-5 [&>*]:scale-50 lg:[&>*]:scale-75 lg:mt-1">
        <Logo />
      </div>
      <div>
        <ul className="flex justify-between gap-5 text-white pt-3 text-sm lg:gap-10">
          <li className="opacity-80 hover:opacity-100">
            <a href="#features">Features</a>
          </li>
          <li className="opacity-80 hover:opacity-100">
            <a href="#team">Team</a>
          </li>
          <li className="opacity-80 hover:opacity-100">
            <a href="#sign-in">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

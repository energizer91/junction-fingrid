import fingridLogo from "../assets/fingrid-logo.svg";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import { UserArea } from "./UserArea.tsx";
import johnDoe from "../assets/john-doe.png";

const basePath = import.meta.env.VITE_BASE_PATH || "";

const navItems = [
  { href: basePath + "/", title: "Dashboard" },
  { href: basePath + "/features", title: "Feature requests" },
  { href: basePath + "/releases", title: "Releases" },
  { href: basePath + "/faq", title: "FAQ" },
];

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="header flex justify-between items-center mb-10">
      <Link to={basePath + "/"} className="flex flex-1">
        <img src={fingridLogo} alt="Fingrid logo" />
      </Link>
      <nav className="flex flex-grow justify-center">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href} className="inline-block">
              <Link
                to={item.href}
                className={classnames("text-primary", {
                  "text-tremor-brand": item.href === pathname,
                })}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <UserArea name="Allan Kim" icon={johnDoe} />
    </header>
  );
};

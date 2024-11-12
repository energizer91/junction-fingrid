"use client";
import fingridLogo from "../../../public/fingrid-logo.svg";
import classnames from "classnames";
import { UserArea } from "./UserArea";
import johnDoe from "../../../public/john-doe.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "/", title: "Dashboard" },
  { href: "/features", title: "Feature requests" },
  { href: "/releases", title: "Releases" },
  { href: "/faq", title: "FAQ" },
];

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="header flex justify-between items-center mb-10">
      <Link href={"/public"} className="flex flex-1">
        <img src={fingridLogo.src} alt="Fingrid logo" />
      </Link>
      <nav className="flex flex-grow justify-center">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href} className="inline-block">
              <Link
                href={item.href}
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
      <UserArea name="Allan Kim" icon={johnDoe.src} />
    </header>
  );
};

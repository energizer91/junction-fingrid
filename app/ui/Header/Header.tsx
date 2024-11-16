"use client";
import fingridLogo from "../../../public/fingrid-logo.svg";
import classnames from "classnames";
import { UserArea } from "./UserArea";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { User } from "../../types";

const navItems = [
  { href: "/", title: "Dashboard" },
  { href: "/features", title: "Feature requests" },
  { href: "/releases", title: "Releases" },
  { href: "/faq", title: "FAQ" },
];

interface HeaderProps {
  user: User | null;
}

export const Header = ({ user }: HeaderProps) => {
  const pathname = usePathname();
  return (
    <header className="header flex justify-between items-center mb-10">
      <Link href="/" className="flex flex-1">
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
      <UserArea user={user} />
    </header>
  );
};

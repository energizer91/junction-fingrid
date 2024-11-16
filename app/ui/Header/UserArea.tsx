import { User } from "../../types";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { NotificationCenter } from "./NotificationCenter";
import johnDoe from "../../../public/john-doe.png";
import Link from "next/link";

interface UserAreaProps {
  user: User | null;
}

export const UserArea = ({ user }: UserAreaProps) => {
  if (!user) {
    return (
      <div className="flex flex-1 flex-nowrap items-center justify-end w-full">
        <LanguageSwitcher />
        <Link className="whitespace-nowrap ml-4" href="/login">
          Login
        </Link>
        <Link className="whitespace-nowrap ml-4" href="/register">
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-nowrap items-center justify-end w-full">
      <LanguageSwitcher />
      <NotificationCenter />
      <span className="whitespace-nowrap ml-10 mr-3">{user.name}</span>
      <img
        src={johnDoe.src}
        alt={user.name}
        className="w-[2.25rem] h-[2.25rem]"
      />
    </div>
  );
};

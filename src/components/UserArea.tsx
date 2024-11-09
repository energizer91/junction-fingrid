import { LanguageSwitcher } from "./LanguageSwitcher.tsx";
import { NotificationCenter } from "./NotificationCenter.tsx";

interface UserAreaProps {
  name: string;
  icon: string;
}

export const UserArea = ({ name, icon }: UserAreaProps) => {
  return (
    <div className="flex flex-1 flex-nowrap items-center justify-end w-full">
      <LanguageSwitcher />
      <NotificationCenter />
      <span className="whitespace-nowrap ml-10 mr-3">{name}</span>
      <img src={icon} alt={name} className="w-[2.25rem] h-[2.25rem]" />
    </div>
  );
};

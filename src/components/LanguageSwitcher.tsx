import { Select, SelectItem } from "@tremor/react";
import "./LanguageSwitcher.css";

export const LanguageSwitcher = () => {
  return (
    <Select
      defaultValue="en"
      className="language-switcher w-[70px] min-w-[initial] border-none shadow-none bg-transparent rounded-tremor-default"
    >
      <SelectItem value="en">EN</SelectItem>
      <SelectItem value="fi">FI</SelectItem>
    </Select>
  );
};

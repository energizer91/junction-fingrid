import { SearchInput } from "./SearchInput";

interface SidebarProps {
  children?: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside className="col-span-3 flex flex-col items-stretch">
      <SearchInput />
      {children}
    </aside>
  );
};

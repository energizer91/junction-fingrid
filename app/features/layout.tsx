import { ReactNode } from "react";
import { Sidebar } from "../ui/Sidebar/Sidebar";
import { FeaturesFilter } from "./FeaturesFilter";
import { NewFeature } from "./NewFeature";

export default async function ReleaseLayout({
  children,
}: {
  params: Promise<Record<string, unknown>>;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-6 w-full">
      <Sidebar>
        <FeaturesFilter />
        <NewFeature />
      </Sidebar>
      {children}
    </div>
  );
}

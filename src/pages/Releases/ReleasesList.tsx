import { H1 } from "../../components/Typography.tsx";
import { ReleaseItem } from "../../components/Release/ReleaseItem.tsx";
import { Card } from "@tremor/react";
import { Release } from "../../types.ts";

interface ReleasesListProps {
  releases: Release[];
}

export const ReleasesList = ({ releases }: ReleasesListProps) => {
  return (
    <Card className="col-span-9 p-[5rem]">
      <H1>Releases</H1>
      {releases.map((release) => (
        <ReleaseItem key={release.id} release={release} />
      ))}
    </Card>
  );
};

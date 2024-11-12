import { getReleases } from "../api/releases/action";
import { Card } from "@tremor/react";
import { H1 } from "../ui/Typography";
import { ReleaseItem } from "./ReleaseItem";

export default async function Page() {
  const releases = await getReleases();

  return (
    <Card className="col-span-9 p-[5rem]">
      <H1>Releases</H1>
      {releases.map((release) => (
        <ReleaseItem key={release.id} release={release} />
      ))}
    </Card>
  );
}

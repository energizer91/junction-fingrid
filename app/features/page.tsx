import { Card } from "@tremor/react";
import { H1 } from "../ui/Typography";
import { FeaturesTable } from "./FeaturesTable";
import { getFeatures } from "../api/features/action";

export default async function Page() {
  const features = await getFeatures();

  return (
    <Card className="col-span-9 p-[5rem]">
      <H1>All feature requests</H1>
      <FeaturesTable features={features} />
    </Card>
  );
}

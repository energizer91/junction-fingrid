import { H1 } from "../../components/Typography.tsx";
import { FeaturesTable } from "../../components/FeaturesTable.tsx";
import { Card } from "@tremor/react";
import { Feature } from "../../types.ts";

interface FeaturesListProps {
  features: Feature[];
}

export const FeaturesList = ({ features }: FeaturesListProps) => {
  return (
    <Card className="col-span-9 p-[5rem]">
      <H1>All feature requests</H1>
      <FeaturesTable features={features} />
    </Card>
  );
};

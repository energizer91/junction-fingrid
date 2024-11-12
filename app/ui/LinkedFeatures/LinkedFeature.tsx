import { Feature } from "../../types";
import { Badge, Card } from "@tremor/react";
import { getBadgeColor } from "../../utils";
import Link from "next/link";

interface LinkedFeatureProps {
  feature: Feature;
}

export const LinkedFeature = ({ feature }: LinkedFeatureProps) => {
  return (
    <Link href={`/features/${feature.id}`}>
      <Card
        key={feature.id}
        className="rounded-tremor-small bg-tremor-background-light p-4 flex flex-row justify-between"
      >
        <span>
          <span className="font-medium">{feature.name}</span>{" "}
          <span className="text-tremor-brand-light">ID {feature.id}</span>
        </span>
        <Badge
          style={{ boxShadow: "none" }}
          className={getBadgeColor(feature.status)}
        >
          {feature.status}
        </Badge>
      </Card>
    </Link>
  );
};

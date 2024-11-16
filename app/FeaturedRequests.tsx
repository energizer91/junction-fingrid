import { Feature } from "./types";
import { Badge, Card, Text } from "@tremor/react";
import { getBadgeColor } from "./utils";
import Link from "next/link";

interface RequestCardProps {
  feature: Feature;
}

const RequestCard = ({ feature }: RequestCardProps) => {
  return (
    <Link className="col-span-1" href={`/features/${feature.name}`}>
      <Card className="rounded-tremor-small">
        <div className="flex flex-col mb-3">
          <div className="flex justify-between flex-row items-center">
            <p className="text-lg font-bold">{feature.name}</p>
            <Badge
              style={{ boxShadow: "none" }}
              className={getBadgeColor(feature.status)}
            >
              {feature.status}
            </Badge>
          </div>
          <p className="text-sm" style={{ color: "#3B82F6" }}>
            {feature.id}
          </p>
        </div>
        <Text className="text-nowrap overflow-hidden text-ellipsis">
          {feature.description}
        </Text>
      </Card>
    </Link>
  );
};

interface FeaturedRequestsProps {
  features: Feature[];
}

export const FeaturedRequests = ({ features }: FeaturedRequestsProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Following feature requests</h2>
      <div className="grid grid-cols-2 gap-6 w-full">
        {features.map((feature) => (
          <RequestCard key={feature.name} feature={feature} />
        ))}
      </div>
    </>
  );
};

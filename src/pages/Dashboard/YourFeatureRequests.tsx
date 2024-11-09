import { Feature } from "../../types.ts";
import {
  mockFeatureBulkPermissions,
  mockFeaturePreferenceAnalytics,
} from "../../mocks.ts";
import { Badge } from "@tremor/react";
import { Link } from "react-router-dom";
import { getBadgeColor } from "../../utils.ts";

const features: Feature[] = [
  mockFeatureBulkPermissions,
  mockFeaturePreferenceAnalytics,
];

interface FeatureRequestProps {
  feature: Feature;
}

const FeatureRequest = ({ feature }: FeatureRequestProps) => {
  return (
    <Link
      to={`/features/${feature.id}`}
      className="col-span-1 flex flex-col mb-3"
    >
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
    </Link>
  );
};

export const YourFeatureRequests = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Your feature requests</h2>
      <div className="grid grid-cols-2 gap-6 w-full">
        {features.map((feature) => (
          <FeatureRequest key={feature.id} feature={feature} />
        ))}
      </div>
    </>
  );
};

import { Feature } from "../../types.ts";
import {
  mockFeatureBulkPermissions,
  mockFeatureEnhancementTracking,
  mockFeatureInteractiveDocs,
  mockFeaturePreferenceAnalytics,
  mockFeatureRealTimeNotifications,
} from "../../mocks.ts";
import { Badge, Card, Text } from "@tremor/react";
import { Link } from "react-router-dom";
import { getBadgeColor } from "../../utils.ts";

const basePath = import.meta.env.VITE_BASE_PATH || "";

const features: Feature[] = [
  mockFeatureBulkPermissions,
  mockFeatureEnhancementTracking,
  mockFeatureInteractiveDocs,
  mockFeatureRealTimeNotifications,
  mockFeaturePreferenceAnalytics,
];

interface RequestCardProps {
  feature: Feature;
}

const RequestCard = ({ feature }: RequestCardProps) => {
  return (
    <Link className="col-span-1" to={`${basePath}/features/${feature.id}`}>
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

export const FeaturedRequests = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Following feature requests</h2>
      <div className="grid grid-cols-2 gap-6 w-full">
        {features.map((feature) => (
          <RequestCard key={feature.id} feature={feature} />
        ))}
      </div>
    </>
  );
};

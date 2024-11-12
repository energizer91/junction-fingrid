import {
  mockFeaturePreferenceAnalytics,
  mockFeatureBulkPermissions,
  mockFeatureReleaseTimeline,
  mockFeatureRealTimeNotifications,
  mockFeatureEnhancementTracking,
  mockFeatureInteractiveDocs,
} from "../../mocks";

const features = [
  mockFeaturePreferenceAnalytics,
  mockFeatureBulkPermissions,
  mockFeatureReleaseTimeline,
  mockFeatureRealTimeNotifications,
  mockFeatureEnhancementTracking,
  mockFeatureInteractiveDocs,
];

export const getFeatures = async () => {
  "use server";
  return features;
};

export const getFeature = async (featureId: string | undefined) => {
  "use server";
  return features.find((r) => r.id === featureId);
};

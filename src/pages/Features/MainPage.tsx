import { Page } from "../../components/Page.tsx";
import { Button } from "@tremor/react";
import { Sidebar } from "../../components/Sidebar.tsx";
import { FeaturesList } from "./FeaturesList.tsx";
import { AddFeature } from "./AddFeature.tsx";
import { useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import { useParams, useNavigate } from "react-router-dom";
import { FeaturesView } from "./FeaturesView.tsx";
import { Feature } from "../../types.ts";
import {
  mockFeatureBulkPermissions,
  mockFeatureEnhancementTracking,
  mockFeatureInteractiveDocs,
  mockFeaturePreferenceAnalytics,
  mockFeatureRealTimeNotifications,
  mockFeatureReleaseTimeline,
} from "../../mocks.ts";

enum FILTERS {
  ALL,
  MY,
  FEATURE_VIEW,
}

const features: Feature[] = [
  mockFeatureBulkPermissions,
  mockFeatureEnhancementTracking,
  mockFeatureInteractiveDocs,
  mockFeaturePreferenceAnalytics,
  mockFeatureRealTimeNotifications,
  mockFeatureReleaseTimeline,
];

export const Features = () => {
  const navigate = useNavigate();
  const { featureId } = useParams<{ featureId: string }>();
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [filter, setFilter] = useState<FILTERS>(
    featureId ? FILTERS.FEATURE_VIEW : FILTERS.ALL,
  );

  const selectedFeature = featureId
    ? features.find((f) => f.id === featureId)
    : null;

  useEffect(() => {
    if (selectedFeature) {
      setFilter(FILTERS.FEATURE_VIEW);
    }
  }, [selectedFeature]);

  const handleAddNewFeature = useCallback(() => {
    navigate("/features");
    if (filter === FILTERS.FEATURE_VIEW) {
      setFilter(FILTERS.ALL);
    }
    setIsAddingNew(!isAddingNew);
  }, [navigate, filter, isAddingNew]);

  const handleChangeFilter = useCallback(
    (newFilter: FILTERS) => () => {
      navigate("/features");
      setIsAddingNew(false);
      setFilter(newFilter);
    },
    [navigate],
  );

  return (
    <Page>
      <div className="grid grid-cols-12 gap-6 w-full">
        <Sidebar>
          <ul className="flex flex-col gap-6 mb-8">
            <li>
              <Button
                variant="light"
                onClick={handleChangeFilter(FILTERS.ALL)}
                className={classnames("font-bold text-tremor-brand-primary", {
                  "text-tremor-brand": filter === FILTERS.ALL,
                })}
              >
                All
              </Button>
            </li>
            <li className="font-bold">
              <Button
                variant="light"
                onClick={handleChangeFilter(FILTERS.MY)}
                className={classnames(
                  "font-bold text-tremor-text-primary active:",
                  {
                    "text-tremor-brand": filter === FILTERS.MY,
                  },
                )}
              >
                My requests
              </Button>
            </li>
          </ul>
          <Button onClick={handleAddNewFeature}>Create request</Button>
        </Sidebar>
        {filter === FILTERS.FEATURE_VIEW && selectedFeature ? (
          <FeaturesView feature={selectedFeature} />
        ) : isAddingNew ? (
          <AddFeature />
        ) : (
          <FeaturesList features={features} />
        )}
      </div>
    </Page>
  );
};

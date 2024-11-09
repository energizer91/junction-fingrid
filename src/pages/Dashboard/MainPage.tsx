import { Card } from "@tremor/react";
import { Page } from "../../components/Page.tsx";
import { RelevantUpdates } from "./RelevantUpdates.tsx";
import { FeaturedRequests } from "./FeaturedRequests.tsx";
import { YourFeatureRequests } from "./YourFeatureRequests.tsx";
import timelineImg from "../../assets/timeline.png";

export const Dashboard = () => {
  return (
    <Page>
      <div className="grid grid-cols-12 gap-6 w-full">
        <div className="col-span-6 flex flex-col gap-6">
          <Card className="p-8">
            <RelevantUpdates />
          </Card>
          <Card className="p-8">
            <YourFeatureRequests />
          </Card>
        </div>
        <div className="col-span-6 flex flex-col gap-6">
          <Card className="p-8">
            <FeaturedRequests />
          </Card>
          <Card className="p-8">
            <img src={timelineImg} alt="timeline" />
          </Card>
        </div>
      </div>
    </Page>
  );
};

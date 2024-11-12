import { getReleases } from "./api/releases/action";
import { getFeatures } from "./api/features/action";
import { Card } from "@tremor/react";
import { RelevantUpdates } from "./RelevantUpdates";
import { YourFeatureRequests } from "./YourFeatureRequests";
import { FeaturedRequests } from "./FeaturedRequests";
import timelineImg from "../public/timeline.png";

export default async function MainPage() {
  const releases = await getReleases();
  const features = await getFeatures();
  const myFeatures = [];

  return (
    <div className="grid grid-cols-12 gap-6 w-full">
      <div className="col-span-6 flex flex-col gap-6">
        <Card className="p-8">
          <RelevantUpdates releases={releases} />
        </Card>
        <Card className="p-8">
          <YourFeatureRequests features={myFeatures} />
        </Card>
      </div>
      <div className="col-span-6 flex flex-col gap-6">
        <Card className="p-8">
          <FeaturedRequests features={features} />
        </Card>
        <Card className="p-8">
          <img src={timelineImg.src} alt="timeline" />
        </Card>
      </div>
    </div>
  );
}

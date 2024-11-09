import { Badge, Button, Card, Divider, Text } from "@tremor/react";
import { Feature } from "../../types.ts";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiNotification2Line,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";
import { Comment } from "../../components/Comment.tsx";
import { CommentForm } from "../../components/CommentForm.tsx";
import { useState } from "react";
import { LinkedFeature } from "../../components/LinkedFeature.tsx";
import { getBadgeColor } from "../../utils.ts";

interface FeaturesViewProps {
  feature: Feature;
}

export const FeaturesView = ({ feature }: FeaturesViewProps) => {
  const [openedFeatures, setOpenedFeatures] = useState(true);
  return (
    <Card className="col-span-9 p-[5rem]">
      <div className="mb-6">
        <div className="flex flex-row mb-6 gap-6">
          <h1 className="text-2xl font-bold">{feature.name}</h1>
          <div className="flex gap-1">
            <Button
              size="xs"
              variant="light"
              className="text-tremor-text-primary align-middle"
            >
              <RiThumbUpLine className="size-6" />
            </Button>
            <Button
              size="xs"
              variant="light"
              className="text-tremor-text-primary align-middle"
            >
              <RiThumbDownLine className="size-6" />
            </Button>
            <Button
              size="xs"
              variant="light"
              className="text-tremor-text-primary align-middle"
            >
              <RiNotification2Line className="size-6" />
            </Button>
          </div>
        </div>
        <Badge
          style={{ boxShadow: "none" }}
          className={getBadgeColor(feature.status)}
        >
          {feature.status}
        </Badge>
      </div>
      <Text className="font-medium text-md">{feature.description}</Text>
      <Divider />
      {feature.children.length > 0 && (
        <>
          <Button
            variant="light"
            className="text-tremor-tag-primary hover:text-tremor-brand-emphasis font-bold"
            onClick={() => setOpenedFeatures(!openedFeatures)}
            icon={openedFeatures ? RiArrowDownSLine : RiArrowUpSLine}
          >
            <span className="text-lg">Linked feature requests</span>
          </Button>
          {openedFeatures && (
            <div className="flex flex-col gap-3 mt-6">
              {feature.children.map((f) => (
                <LinkedFeature key={f.id} feature={f} />
              ))}
            </div>
          )}
          <Divider />
        </>
      )}
      {feature.comments && (
        <>
          <h3 className="font-bold text-xl mb-8">Comments</h3>
          <div className="flex flex-col gap-8 mb-6">
            {feature.comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </div>
        </>
      )}
      <CommentForm />
    </Card>
  );
};

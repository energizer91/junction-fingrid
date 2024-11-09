import { useState } from "react";
import { Release } from "../../types.ts";
import { Button, Card, Divider, Text } from "@tremor/react";
import { BadgeList } from "../../components/Release/BadgeList.tsx";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiNotification2Line,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";
import { Comment } from "../../components/Comment.tsx";
import { CommentForm } from "../../components/CommentForm.tsx";
import { LinkedFeature } from "../../components/LinkedFeature.tsx";

interface ReleaseViewPageProps {
  release: Release;
}

export const ReleaseViewPage = ({ release }: ReleaseViewPageProps) => {
  const [openedFeatures, setOpenedFeatures] = useState(true);
  return (
    <Card className="col-span-9 p-[5rem]">
      <div className="mb-6">
        <div className="flex flex-row mb-6 gap-6">
          <h1 className="text-2xl font-bold">{release.name}</h1>
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
        <BadgeList type={release.type} tags={release.tags} />
      </div>
      <Text className="font-medium text-md">{release.description}</Text>
      <Divider />
      {release.features && (
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
              {release.features.map((feature) => (
                <LinkedFeature key={feature.id} feature={feature} />
              ))}
            </div>
          )}
          <Divider />
        </>
      )}
      {release.comments && (
        <>
          <h3 className="font-bold text-xl mb-8">Comments</h3>
          <div className="flex flex-col gap-8 mb-6">
            {release.comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </div>
        </>
      )}
      <CommentForm />
    </Card>
  );
};

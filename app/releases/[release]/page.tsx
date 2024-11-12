import { getRelease } from "../../api/releases/action";
import { notFound } from "next/navigation";
import { Button, Card, Divider, Text } from "@tremor/react";
import {
  RiNotification2Line,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";
import { BadgeList } from "../BadgeList";
import { LinkedFeatures } from "../../ui/LinkedFeatures/LinkedFeatures";
import { CommentForm } from "../../ui/Comment/CommentForm";
import { CommentList } from "../../ui/Comment/CommentList";

export default async function Release({
  params,
}: {
  params: Promise<Record<string, string>>;
}) {
  const { release } = await params;
  const r = await getRelease(release);

  if (!r) notFound();

  return (
    <Card className="col-span-9 p-[5rem]">
      <div className="mb-6">
        <div className="flex flex-row mb-6 gap-6">
          <h1 className="text-2xl font-bold">{r.name}</h1>
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
        <BadgeList type={r.type} tags={r.tags} />
      </div>
      <Text className="font-medium text-md">{r.description}</Text>
      <Divider />
      <LinkedFeatures features={r.features} />
      <CommentList comments={r.comments} />
      <CommentForm />
    </Card>
  );
}

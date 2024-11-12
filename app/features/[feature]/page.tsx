import { notFound } from "next/navigation";
import { getFeature } from "../../api/features/action";
import { Badge, Button, Card, Divider, Text } from "@tremor/react";
import {
  RiNotification2Line,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";
import { getBadgeColor } from "../../utils";
import { LinkedFeatures } from "../../ui/LinkedFeatures/LinkedFeatures";
import { CommentForm } from "../../ui/Comment/CommentForm";
import { CommentList } from "../../ui/Comment/CommentList";

export default async function featurePage({
  params,
}: {
  params: Promise<Record<string, string>>;
}) {
  const { feature } = await params;
  const f = await getFeature(feature);

  if (!f) notFound();

  return (
    <Card className="col-span-9 p-[5rem]">
      <div className="mb-6">
        <div className="flex flex-row mb-6 gap-6">
          <h1 className="text-2xl font-bold">{f.name}</h1>
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
          className={getBadgeColor(f.status)}
        >
          {f.status}
        </Badge>
      </div>
      <Text className="font-medium text-md">{f.description}</Text>
      <Divider />
      <LinkedFeatures features={f.children} />
      <CommentList comments={f.comments} />
      <CommentForm />
    </Card>
  );
}

import { Release } from "../../types.ts";
import { H2 } from "../Typography.tsx";
import { Link } from "react-router-dom";
import { Button, Divider, Text } from "@tremor/react";
import { BadgeList } from "./BadgeList.tsx";

const basePath = import.meta.env.VITE_BASE_PATH || "";

interface ReleaseItemProps {
  release: Release;
}

export const ReleaseItem = ({ release }: ReleaseItemProps) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-start">
        <div className="mb-6">
          <Link to={`${basePath}/releases?releaseId=${release.id}`}>
            <H2>{release.name}</H2>
          </Link>
          <BadgeList type={release.type} tags={release.tags} />
        </div>
        <Button>Download</Button>
      </div>
      <Text className="font-medium text-md">{release.description}</Text>
      <Divider className="my-8" />
    </div>
  );
};

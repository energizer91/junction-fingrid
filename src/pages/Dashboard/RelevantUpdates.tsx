import * as React from "react";
import { Button, Card, Text } from "@tremor/react";
import { Release } from "../../types.ts";
import {
  mockRelease21,
  mockRelease22x,
  mockRelease23,
  mockRelease24,
} from "../../mocks.ts";
import { RiDownloadLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import classnames from "classnames";

const basePath = import.meta.env.VITE_BASE_PATH || "";

const releases: Release[] = [
  mockRelease24,
  mockRelease23,
  mockRelease22x,
  mockRelease21,
];

function formatMonthYear(date: Date) {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" }); // "November, 2024"
}

function groupByMonth(data: Release[]) {
  return data.reduce(
    (groups, item) => {
      const date = new Date(item.date);
      const monthYear = formatMonthYear(date);

      if (!groups[monthYear]) {
        groups[monthYear] = [];
      }

      groups[monthYear].push(item);

      return groups;
    },
    {} as { [key: string]: Release[] },
  );
}

interface UpdateProps {
  release: Release;
  relevant?: boolean | undefined;
}

const Update = ({ release, relevant }: UpdateProps) => {
  return (
    <Link to={`${basePath}/releases/?releaseId=${release.id}`}>
      <Card
        className={classnames(
          "flex flex-row justify-between px-6 py-3 rounded-tremor-small overflow-y-auto",
        )}
        decoration="top"
        decorationColor={relevant ? "red" : "none"}
      >
        <div>
          <p className="text-lg font-bold">{release.name}</p>
          <p className="text-sm overflow-hidden whitespace-nowrap max-w-[500px] text-ellipsis">
            {release.description}
          </p>
        </div>
        <Button variant="light" className="text-tremor-text-primary">
          <RiDownloadLine />
        </Button>
      </Card>
    </Link>
  );
};

export const RelevantUpdates = () => {
  const groupedReleases = React.useMemo(() => groupByMonth(releases), []);

  return (
    <>
      <h2 className="text-2xl font-bold mb-3">Relevant updates</h2>
      <div className="flex flex-col gap-6">
        {Object.keys(groupedReleases).map((key, index) => (
          <div key={key}>
            <Text
              className={classnames("font-bold mb-6", {
                "text-gray-400": index !== 0,
              })}
            >
              {key}
            </Text>
            <div className="flex flex-col gap-3">
              {groupedReleases[key].map((release, releaseIndex) => (
                <Update
                  key={key}
                  release={release}
                  relevant={releaseIndex === 0 && index === 0}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

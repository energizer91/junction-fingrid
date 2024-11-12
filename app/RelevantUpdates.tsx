import * as React from "react";
import { Button, Card, Text } from "@tremor/react";
import { Release } from "./types";
import { RiDownloadLine } from "@remixicon/react";
import classnames from "classnames";
import Link from "next/link";

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
    <Link href={`/releases/${release.id}`}>
      <Card
        className={classnames(
          "flex flex-row justify-between px-6 py-3 rounded-tremor-small overflow-y-auto",
        )}
        decoration="top"
        decorationColor={relevant ? "red" : "none"}
      >
        <div className="overflow-x-hidden">
          <p className="text-lg font-bold">{release.name}</p>
          <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
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

interface RelevantUpdatesProps {
  releases: Release[];
}

export const RelevantUpdates = ({ releases }: RelevantUpdatesProps) => {
  const groupedReleases = groupByMonth(releases);

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
                  key={release.id}
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

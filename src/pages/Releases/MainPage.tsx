import { Page } from "../../components/Page.tsx";
import { Button } from "@tremor/react";
import { Sidebar } from "../../components/Sidebar.tsx";
import classnames from "classnames";
import { Release } from "../../types.ts";
import {
  mockRelease21,
  mockRelease22x,
  mockRelease23,
  mockRelease24,
} from "../../mocks.ts";
import { ReleaseViewPage } from "./ReleaseViewPage.tsx";
import { ReleasesList } from "./ReleasesList.tsx";
import { Link, useSearchParams } from "react-router-dom";

const basePath = import.meta.env.VITE_BASE_PATH || "";

const releases: Release[] = [
  mockRelease24,
  mockRelease23,
  mockRelease22x,
  mockRelease21,
];

export const Releases = () => {
  const [searchParams] = useSearchParams();
  const releaseId = searchParams.get("releaseId");
  const release =
    releases.find((release: Release) => release.id === releaseId) || null;

  return (
    <Page>
      <div className="grid grid-cols-12 gap-6 w-full">
        <Sidebar>
          <ul className="flex flex-col gap-6 mb-8">
            <li>
              <Link to={`${basePath}/releases`}>
                <Button
                  variant="light"
                  className={classnames("font-bold text-tremor-brand-primary", {
                    "text-tremor-brand": release === null,
                  })}
                >
                  All
                </Button>
              </Link>
            </li>
            {releases.map((r: Release) => (
              <li key={r.id} className="font-bold">
                <Link to={`${basePath}/releases?releaseId=${r.id}`}>
                  <Button
                    variant="light"
                    className={classnames(
                      "font-bold text-tremor-text-primary active:",
                      {
                        "text-tremor-brand": release?.id === r.id,
                      },
                    )}
                  >
                    {r.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </Sidebar>
        {release ? (
          <ReleaseViewPage release={release} />
        ) : (
          <ReleasesList releases={releases} />
        )}
      </div>
    </Page>
  );
};

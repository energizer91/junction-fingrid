import { ReactNode } from "react";
import { Sidebar } from "../ui/Sidebar/Sidebar";
import Link from "next/link";
import { Button } from "@tremor/react";
import classnames from "classnames";
import { Release } from "../types";
import { getReleases } from "../api/releases/action";

export default async function ReleaseLayout({
  params,
  children,
}: {
  params: Promise<Record<string, unknown>>;
  children: ReactNode;
}) {
  const { release } = await params;
  const releases = await getReleases();
  return (
    <div className="grid grid-cols-12 gap-6 w-full">
      <Sidebar>
        <ul className="flex flex-col gap-6 mb-8">
          <li>
            <Link href="/releases">
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
              <Link href={`/releases/${r.id}`}>
                <Button
                  variant="light"
                  className={classnames(
                    "font-bold text-tremor-text-primary active:",
                    {
                      "text-tremor-brand": release === r.id,
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
      {children}
    </div>
  );
}

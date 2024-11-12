"use client";
import { useCallback } from "react";
import { Button } from "@tremor/react";
import classnames from "classnames";
import { useSearchParams, useRouter } from "next/navigation";

enum FILTERS {
  ALL,
  MY,
}

export const FeaturesFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filter =
    (searchParams?.get("filter") as never as FILTERS) ?? FILTERS.ALL;

  const handleChangeFilter = useCallback(
    (newFilter: FILTERS) => () => {
      router.push("/features?filter=" + newFilter);
    },
    [router],
  );

  return (
    <ul className="flex flex-col gap-6 mb-8">
      <li>
        <Button
          variant="light"
          onClick={handleChangeFilter(FILTERS.ALL)}
          className={classnames("font-bold text-tremor-brand-primary", {
            "text-tremor-brand": filter === FILTERS.ALL,
          })}
        >
          All
        </Button>
      </li>
      <li className="font-bold">
        <Button
          variant="light"
          onClick={handleChangeFilter(FILTERS.MY)}
          className={classnames("font-bold text-tremor-text-primary active:", {
            "text-tremor-brand": filter === FILTERS.MY,
          })}
        >
          My requests
        </Button>
      </li>
    </ul>
  );
};

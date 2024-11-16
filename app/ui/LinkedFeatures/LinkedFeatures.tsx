"use client";
import { Feature } from "../../types";
import { Button, Divider } from "@tremor/react";
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import { LinkedFeature } from "./LinkedFeature";
import { useState } from "react";

interface LinkedFeaturesProps {
  features: Feature[];
}

export const LinkedFeatures = ({ features = [] }: LinkedFeaturesProps) => {
  const [openedFeatures, setOpenedFeatures] = useState(true);

  if (!features.length) {
    return null;
  }

  return (
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
          {features.map((feature) => (
            <LinkedFeature key={feature.id} feature={feature} />
          ))}
        </div>
      )}
      <Divider />
    </>
  );
};

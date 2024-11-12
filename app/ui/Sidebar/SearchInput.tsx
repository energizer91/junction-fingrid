"use client";
import { Button, TextInput } from "@tremor/react";
import { RiEqualizerLine, RiSearchLine } from "@remixicon/react";

export const SearchInput = () => {
  return (
    <div className="flex flex-row relative mb-8">
      <TextInput className="rounded-tremor-input" icon={RiSearchLine} />
      <Button size="xs" variant="light" className="absolute right-4 top-[11px]">
        <RiEqualizerLine className="size-4" />
      </Button>
    </div>
  );
};

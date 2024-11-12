"use client";
import { Button } from "@tremor/react";
import { redirect } from "next/navigation";

export const NewFeature = () => {
  const handleAddNewFeature = () => {
    redirect("/features/new");
  };

  return <Button onClick={handleAddNewFeature}>Create request</Button>;
};

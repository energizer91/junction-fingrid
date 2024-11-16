import { H1 } from "../../ui/Typography";
import { AddFeatureForm } from "./AddFeatureForm";
import { Card } from "@tremor/react";

export default function Page() {
  return (
    <Card className="col-span-9 p-[5rem]">
      <H1>Create feature request</H1>
      <AddFeatureForm />
    </Card>
  );
}

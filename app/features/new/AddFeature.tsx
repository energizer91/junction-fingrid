import { Button, Card, Textarea, TextInput } from "@tremor/react";
import { H1 } from "../../ui/Typography";

export const AddFeature = () => {
  return (
    <Card className="col-span-9 p-[5rem]">
      <H1>Create feature request</H1>
      <form className="flex flex-col gap-3">
        <label>
          <span className="inline-block font-bold mb-3">Feature name</span>
          <TextInput className="rounded-tremor-small" name="name" />
        </label>
        <label>
          <span className="inline-block font-bold mb-3">Short description</span>
          <Textarea
            rows={4}
            className="rounded-tremor-small"
            name="description"
          />
        </label>
        <div className="flex flex-row justify-end gap-3">
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
          <Button type="submit">Create a request</Button>
        </div>
      </form>
    </Card>
  );
};

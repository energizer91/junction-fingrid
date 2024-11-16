"use client";

import { Button, Select, SelectItem, Textarea, TextInput } from "@tremor/react";
import { createFeature } from "../../api/features/action";
import { useCallback, useState } from "react";
import "./AddFeature.css";

export const AddFeatureForm = () => {
  const [error, setError] = useState<string>();
  const handleCreateFeature = useCallback(async (formData: FormData) => {
    const id = formData.get("id")?.toString();
    const priority = Number(formData.get("priority"));
    const description = formData.get("description")?.toString();
    const feature = await createFeature({ id, priority, description });

    if (feature.message) {
      setError(feature.message);
    }
  }, []);
  return (
    <form action={handleCreateFeature} className="flex flex-col gap-3">
      <label>
        <span className="inline-block font-bold mb-3">Feature ID</span>
        <TextInput
          className="rounded-tremor-small"
          placeholder="CSUSE0000000"
          name="id"
        />
      </label>
      <label>
        <span className="inline-block font-bold mb-3">Feature priority</span>
        <Select
          className="priority-select rounded-tremor-small"
          name="priority"
        >
          <SelectItem value="0">Lowest</SelectItem>
          <SelectItem value="1">Low</SelectItem>
          <SelectItem value="2">Medium</SelectItem>
          <SelectItem value="3">High</SelectItem>
          <SelectItem value="4">Highest</SelectItem>
        </Select>
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
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

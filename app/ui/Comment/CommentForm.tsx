"use client";
import { Button, Textarea } from "@tremor/react";
import { useCallback, useState } from "react";
import { addComment } from "../../api/comments/actions";
import { revalidatePath } from "next/cache";

interface CommentFormProps {
  entityType: string;
  entityId: string;
  slug: string;
}

export const CommentForm = ({
  entityType,
  entityId,
  slug,
}: CommentFormProps) => {
  const [error, setError] = useState<string>();

  const handleAddComment = useCallback(
    async (formData: FormData) => {
      const text = formData.get("text")?.toString();

      if (!text) return;

      const comment = await addComment(entityType, entityId, text);

      if (comment?.message) {
        setError(comment.message);
        return;
      }

      revalidatePath(`/${entityType}s/${slug}`);
    },
    [entityId, entityType, slug],
  );

  return (
    <>
      <h3 className="text-lg font-bold mb-3">Leave your comment</h3>
      <form action={handleAddComment}>
        <Textarea className="rounded-tremor-small mb-3" rows={4} name="text" />
        <div className="flex flex-row justify-end">
          <Button type="submit">Submit</Button>
        </div>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </>
  );
};

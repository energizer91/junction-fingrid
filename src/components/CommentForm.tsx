import { Button, Textarea } from "@tremor/react";

export const CommentForm = () => {
  return (
    <>
      <h3 className="text-lg font-bold mb-3">Leave your comment</h3>
      <form>
        <Textarea className="rounded-tremor-small mb-3" rows={4} name="text" />
        <div className="flex flex-row justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
};

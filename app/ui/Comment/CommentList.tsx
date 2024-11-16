import { Comment as CommentType } from "../../types";
import { Comment } from "./Comment";

interface CommentListProps {
  comments: CommentType[];
}

export const CommentList = ({ comments = [] }: CommentListProps) => {
  if (!comments.length) {
    return null;
  }

  return (
    <>
      <h3 className="font-bold text-xl mb-8">Comments</h3>
      <div className="flex flex-col gap-8 mb-6">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
};

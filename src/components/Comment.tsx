import { Comment as CommentType } from "../types.ts";
import { Text } from "@tremor/react";
import { formattedDate } from "../utils.ts";

interface CommentProps {
  comment: CommentType;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div>
      <span className="font-medium">{comment.author.name}</span>{" "}
      <span className="text-gray-400">{formattedDate(comment.date)}</span>
      <Text className="text-md">{comment.text}</Text>
    </div>
  );
};

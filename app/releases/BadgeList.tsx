import { Badge } from "@tremor/react";

interface BadgeListProps {
  type: string;
  tags: string[];
}

export const BadgeList = ({ type, tags }: BadgeListProps) => {
  return (
    <div className="flex gap-2 shadow-">
      <Badge
        className="font-medium rounded-tremor-default border-none bg-tremor-tag-primary text-white"
        style={{ boxShadow: "none" }}
      >
        {type}
      </Badge>
      {tags.slice(0, 4).map((tag) => (
        <Badge
          key={tag}
          className="font-medium rounded-tremor-default border-none bg-tremor-tag-secondary text-tremor-tag-primary"
          style={{ boxShadow: "none" }}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};

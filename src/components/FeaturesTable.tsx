import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { Feature } from "../types.ts";
import {
  RiMessage2Fill,
  RiNotification2Line,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import "./FeaturesTable.css";

const basePath = import.meta.env.VITE_BASE_PATH || "";

export interface FeaturesTableProps {
  features: Feature[];
}

export const FeaturesTable = ({ features }: FeaturesTableProps) => {
  const navigate = useNavigate();
  return (
    <Table className="features-table">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Author</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {features.map((feature) => (
          <TableRow
            key={feature.id}
            onClick={() => navigate(`${basePath}/features/${feature.id}`)}
            className="cursor-pointer"
          >
            <TableCell>{feature.name}</TableCell>
            <TableCell>{feature.author.name}</TableCell>
            <TableCell className="whitespace-nowrap overflow-ellipsis overflow-hidden max-w-[350px]">
              {feature.description}
            </TableCell>
            <TableCell className="min-w-[150px]">
              <div className="flex flex-nowrap gap-3 justify-end react-block">
                <div className="flex gap-1">
                  <Button
                    size="xs"
                    variant="light"
                    className="text-tremor-text-primary align-middle"
                  >
                    <RiThumbUpLine className="size-4" />
                  </Button>
                  <Button
                    size="xs"
                    variant="light"
                    className="text-tremor-text-primary align-middle"
                  >
                    <RiThumbDownLine className="size-4" />
                  </Button>
                </div>
                <div className="flex gap-1">
                  <Button
                    size="xs"
                    variant="light"
                    className="text-tremor-text-primary align-middle"
                  >
                    <RiNotification2Line className="size-4" />
                  </Button>
                  <Button
                    size="xs"
                    variant="light"
                    className="text-tremor-text-primary align-middle"
                  >
                    <RiMessage2Fill className="size-4" />
                  </Button>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

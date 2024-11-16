"use client";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { Feature } from "../types";
import {
  RiMessage2Fill,
  RiNotification2Line,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";
import { useRouter } from "next/navigation";
import "./FeaturesTable.css";

export interface FeaturesTableProps {
  features: Feature[];
}

export const FeaturesTable = ({ features }: FeaturesTableProps) => {
  const router = useRouter();

  return (
    <Table className="features-table">
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Author</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {features.map((feature) => (
          <TableRow
            key={feature.name}
            onClick={() => router.push(`/features/${feature.name}`)}
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

import { Release } from "../../types";
import { notFound } from "next/navigation";

export async function getReleases(): Promise<Release[]> {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/releases`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!result.ok) return [];

  return await result.json();
}

export async function getRelease(releaseId: string): Promise<Release> {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/features/${releaseId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!result.ok) return notFound();

  return await result.json();
}

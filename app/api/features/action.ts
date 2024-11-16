"use server";
import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { Feature as FeatureType } from "../../types";

export async function getFeatures() {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/features`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!result.ok) return [];

  return await result.json();
}

export async function getMyFeatures() {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/features/my`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!result.ok) return [];

  return await result.json();
}

export const getFeature = async (featureId: string | undefined) => {
  if (!featureId) {
    return null;
  }

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/features/${featureId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (result.status === 404) notFound();

  return await result.json();
};

export const createFeature = async (feature: Partial<FeatureType>) => {
  const cookieStorage = await cookies();

  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/features/`,
      {
        method: "POST",
        body: JSON.stringify(feature),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookieStorage.get("access_token")?.value}`,
        },
      },
    );

    if (!result.ok) return { message: result.statusText };
  } catch (error) {
    return { message: error.message };
  }

  revalidatePath("/features");
  redirect("/features");
};

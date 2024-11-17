"use server";
import { Comment } from "../../types";
import { cookies } from "next/headers";

export async function getComments(
  entityType: string,
  entityId: string,
): Promise<Comment[]> {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/comments/${entityType}/${entityId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!result.ok) return [];

  return await result.json();
}

export async function addComment(
  entityType: string,
  entityId: string,
  text: string,
) {
  if (!text) return { message: "Text can not be empty" };

  const cookieStorage = await cookies();
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/comments/${entityType}/${entityId}`,
      {
        method: "POST",
        body: JSON.stringify({ text }),
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
}

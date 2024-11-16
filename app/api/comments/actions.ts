import { Comment } from "../../types";

export async function getComments(postId: string): Promise<Comment[]> {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/comments/${postId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!result.ok) return [];

  return await result.json();
}

export async function addComment(postId: string, text: string) {
  if (!text) return { message: "Text can not be empty" };

  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/comments/${postId}`,
      {
        method: "POST",
        headers: {
          body: JSON.stringify({ text }),
          "Content-Type": "application/json",
        },
      },
    );

    if (!result.ok) return { message: result.statusText };
  } catch (error) {
    return { message: error.message };
  }
}

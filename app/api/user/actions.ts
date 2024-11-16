"use server";
import { User } from "../../types";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const login = async (email: string, password: string) => {
  if (!email || !password) {
    return { message: "Invalid credentials" };
  }

  const cookieStorage = await cookies();
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/auth/login`,
    {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStorage.get("access_token")?.value}`,
      },
    },
  );

  if (!result.ok) return { message: result.statusText };

  const { access_token } = await result.json();

  cookieStorage.set("access_token", access_token);

  redirect("/");
};

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  if (!name || !email || !password) {
    return { message: "Invalid credentials" };
  }

  const cookieStorage = await cookies();
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/auth/signup`,
    {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStorage.get("access_token")?.value}`,
      },
    },
  );

  if (!result.ok) return { message: result.statusText };

  const { access_token } = await result.json();

  cookieStorage.set("access_token", access_token);

  redirect("/");
};

export const getUser = async (): Promise<User | null> => {
  const cookieStorage = await cookies();
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_URL}/api/users/profile`,
    {
      headers: {
        Authorization: `Bearer ${cookieStorage.get("access_token")?.value}`,
      },
    },
  );

  if (!result.ok) {
    if (result.status === 401) return null;

    throw new Error(result.statusText);
  }

  const user = await result.json();

  if (!user) return null;

  return user;
};

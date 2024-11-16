"use client";
import { useCallback, useState } from "react";
import { Button, Card, TextInput } from "@tremor/react";
import { login } from "../api/user/actions";

export const LoginForm = () => {
  const [error, setError] = useState<string>();
  const handleLogin = useCallback(async (formData: FormData) => {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      setError("Invalid data");
      return;
    }

    const user = await login(email, password);

    if (user.message) {
      setError(user.message);
    }
  }, []);
  return (
    <div className="flex justify-center items-center w-full">
      <Card className="max-w-[500px]">
        <form action={handleLogin}>
          <label className="block mb-3">
            <span className="inline-block font-bold mb-3">Email</span>
            <TextInput
              className="rounded-tremor-small"
              name="email"
              type="email"
            />
          </label>
          <label className="block mb-3">
            <span className="inline-block font-bold mb-3">Password</span>
            <TextInput
              className="rounded-tremor-small"
              name="password"
              type="password"
            />
          </label>
          <Button type="submit" className="w-full">
            Login
          </Button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </Card>
    </div>
  );
};

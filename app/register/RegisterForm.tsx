"use client";
import { useCallback, useState } from "react";
import { Button, Card, TextInput } from "@tremor/react";
import { register } from "../api/user/actions";

export const RegisterForm = () => {
  const [error, setError] = useState<string>();
  const handleLogin = useCallback(async (formData: FormData) => {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password || !name) {
      setError("Invalid data");
      return;
    }

    const user = await register(name, email, password);

    if (user.message) {
      setError(user.message);
    }
  }, []);
  return (
    <div className="flex justify-center items-center w-full">
      <Card className="max-w-[500px]">
        <form action={handleLogin}>
          <label className="block mb-3">
            <span className="inline-block font-bold mb-3">Name</span>
            <TextInput className="rounded-tremor-small" name="name" />
          </label>
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
            Register
          </Button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </Card>
    </div>
  );
};

import * as React from "react";
import { Header } from "./Header/Header";
import { ChatBot } from "./ChatBot";
import { getUser } from "../api/user/actions";

interface PageProps {
  children?: React.ReactNode;
}

export const Page = async ({ children }: PageProps) => {
  const user = await getUser();

  return (
    <div className="px-20 py-10 min-h-[100vh] flex flex-col">
      <Header user={user} />
      <main className="flex flex-grow">{children}</main>
      <ChatBot />
    </div>
  );
};

import * as React from "react";
import { Header } from "./Header/Header";
import { ChatBot } from "./ChatBot";

interface PageProps {
  children?: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="px-20 py-10 min-h-[100vh] flex flex-col">
      <Header />
      <main className="flex flex-grow">{children}</main>
      <ChatBot />
    </div>
  );
};

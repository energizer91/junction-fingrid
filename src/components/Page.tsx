import { Header } from "./Header.tsx";
import { ChatBot } from "./ChatBot.tsx";

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

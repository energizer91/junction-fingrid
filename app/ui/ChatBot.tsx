"use client";
import * as React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  Button,
  Card,
  ButtonProps,
  TextInput,
  CardProps,
  Text,
} from "@tremor/react";
import classnames from "classnames";
import {
  RiArrowRightLine,
  RiRobot2Fill,
  RiSendPlane2Fill,
} from "@remixicon/react";
import { useState } from "react";
import Link from "next/link";
import { askBot } from "../api/chat/action";

const TriggerButton = ({ className, ...rest }: ButtonProps) => {
  return (
    <Button
      className={classnames(
        "fixed bottom-8 right-8 rounded-tremor-full p-4 border-none",
        className,
      )}
      {...rest}
    >
      <RiRobot2Fill className="size-[40px]" />
    </Button>
  );
};

enum AUTHOR {
  ME,
  BOT,
}

interface Message {
  text: string;
  author: AUTHOR;
  links?: Array<{
    url: string;
    title: string;
  }>;
}

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

const ChatBubble = ({ text, author, links }: Message) => {
  return (
    <div
      className={classnames("p-3 rounded-tremor-input min-w-[100px]", {
        "bg-tremor-brand text-white self-end": author === AUTHOR.ME,
      })}
    >
      <Text
        className={classnames("text-black", {
          "text-white": author === AUTHOR.ME,
        })}
      >
        {text}
      </Text>
      {links &&
        links.map((link) => (
          <Link
            href={link.url}
            className="mt-3 border p-4 border-gray-400 rounded-tremor-full flex justify-between flex-row items-center"
          >
            <Text>{link.title}</Text>
            <RiArrowRightLine />
          </Link>
        ))}
    </div>
  );
};

const ChatBotContent = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const sendMessage = React.useCallback(async (formData: FormData) => {
    const text = formData.get("text");

    if (!text) return;

    setLoading(true);

    const message = {
      text: text.toString(),
      author: AUTHOR.ME,
    };

    setMessages((prev) => prev.concat(message));

    try {
      const response = await askBot(text.toString());

      if (!response) return;

      setMessages((prev) =>
        prev.concat({ text: response, author: AUTHOR.BOT }),
      );
    } catch (err) {
      setMessages((prev) =>
        prev.concat({ text: err.message, author: AUTHOR.BOT }),
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <div className="bg-tremor-brand text-center -m-4 mb-0 p-4">
        <Text className="text-white text-xl font-bold">Fingrid Assistant</Text>
      </div>
      <div className="chat-field w-full flex flex-col-reverse flex-1 h-full flex-grow items-start overflow-y-auto gap-3 p-3">
        {loading && <Loader />}
        {messages
          .slice()
          .reverse()
          .map((message) => (
            <ChatBubble
              key={message.text}
              text={message.text}
              author={message.author}
              links={message.links}
            />
          ))}
      </div>
      <div>
        <form action={sendMessage} className="relative">
          <TextInput name="text" />
          <Button variant="light" className=" absolute right-4 top-[11px]">
            <RiSendPlane2Fill className="size-4" />
          </Button>
        </form>
      </div>
    </>
  );
};

const ChatBotWrapper = (props: CardProps) => {
  return <Card {...props} />;
};

export const ChatBot = () => {
  return (
    <Popover className="relative">
      <PopoverButton
        as={TriggerButton}
        style={{
          background: "linear-gradient(180deg, #D5121E 0%, #FF6F55 100%)",
        }}
      />
      <PopoverPanel
        as={ChatBotWrapper}
        className="fixed z-10 mt-2 bg-white p-4 rounded-tremor-small w-[400px] right-8 bottom-[115px] overflow-hidden h-[500px] flex flex-col "
      >
        <ChatBotContent />
      </PopoverPanel>
    </Popover>
  );
};

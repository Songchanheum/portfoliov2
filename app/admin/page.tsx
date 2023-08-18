"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { getChatAllMessage, getChatMessage, postChatReceive } from "./api";

const AdminPage = () => {
  const messageRef = useRef<HTMLInputElement>(null);
  const [chatKeys, setChatKeys] = useState<Array<string>>([]);
  const [chatData, setChatData] = useState<Array<ChatType>>([]);
  const [selNum, setSelNum] = useState<string>("");
  const [sendMessage, setSendMessage] = useState<string>("");
  const [isSendding, setIsSendding] = useState<boolean>(false);

  function setInputMessage(message: string) {
    setSendMessage(message);
  }
  function sendChat() {
    if (selNum === "" || sendMessage === "" || isSendding) {
      return;
    }
    setIsSendding(true);
    postChatReceive(selNum, sendMessage, () => {
      getChatMessage(selNum, setChatData);
      if (messageRef.current) {
        messageRef.current.value = "";
        setSendMessage("");
        setIsSendding(false);
      }
    });
  }
  useEffect(() => {
    getChatAllMessage(setChatKeys);
  }, []);
  useEffect(() => {
    getChatMessage(selNum, setChatData);
  }, [selNum]);
  function chatRefresh() {
    setChatKeys([]);
    setChatData([]);
    setSelNum("");
    setSendMessage("");
    setIsSendding(false);
    getChatAllMessage(setChatKeys);
  }
  function SendMessage({ text }: { text: Array<string> }) {
    return (
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-sm mx-2 order-1 items-end">
            {text.map((e, i) => {
              return (
                <div key={e + i}>
                  <span
                    className={`px-4 py-2 rounded-lg inline-block bg-violet-600 text-white ${
                      text.length === i + 1 ? "rounded-br-none" : ""
                    }`}
                  >
                    {e}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  function ReceiveMessage({ text }: { text: Array<string> }) {
    return (
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-sm mx-2 order-2 items-start">
            {text.map((e, i) => {
              return (
                <div key={e + i}>
                  <span
                    className={`px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600 ${
                      text.length === i + 1 ? "rounded-bl-none" : ""
                    }`}
                  >
                    {e}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  const ChatMessage = useMemo<React.ReactNode>(() => {
    let curType: string | null = null;
    const curList: Array<string> = [];
    return chatData.map((e, i) => {
      if (curType === null || curType === e.type) {
        curType = e.type;
        curList.push(e.text);
      }
      if (chatData.length === i + 1 || curType !== chatData[i + 1]?.type) {
        const temp = [...curList];
        curList.splice(0);
        if (curType === "send") {
          curType = null;
          return <SendMessage key={e.text + i} text={temp} />;
        } else if (curType === "receive") {
          curType = null;
          return <ReceiveMessage key={e.text + i} text={temp} />;
        }
      }
    });
  }, [chatData]);
  return (
    <div className="justify-between h-full w-full">
      <button onClick={() => chatRefresh()}>refresh</button>
      <ul>
        {chatKeys.map((e, i) => {
          return (
            <li key={e + i}>
              <button onClick={() => setSelNum(e.split("chat:")[1])}>
                {e}
              </button>
            </li>
          );
        })}
      </ul>
      <div
        id="messages"
        className="h-[65%] w-[50%] space-y-4 p-3 overflow-y scrollbar-thumb-violet scrollbar-thumb-rounded scrollbar-track-violet-lighter scrollbar-w-2 scrolling-touch"
      >
        {ChatMessage}
      </div>
      <div className="relative flex w-[50%]">
        <input
          type="text"
          ref={messageRef}
          onBlur={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            console.log(e);
            if (e.key === "Enter") {
              sendChat();
            }
          }}
          className="w-full focus:outline-none text-sm focus:placeholder-gray-400 dark:focus:placeholder-gray-100 text-gray-600 dark:text-gray-200 placeholder-gray-600 dark:placeholder-gray-200 bg-gray-200 dark:bg-gray-700 rounded-md pl-5 py-3"
        />
        <div className="absolute right-0 items-center inset-y-0 flex">
          <button
            type="button"
            onClick={() => sendChat()}
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 transition duration-500 ease-in-out text-white bg-violet-500 hover:bg-violet-400 focus:outline-none"
          >
            <span className="font-bold text-sm hidden md:block">Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 ml-2 transform rotate-90"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

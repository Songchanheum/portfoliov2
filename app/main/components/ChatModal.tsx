"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import LocalStorage from "@/common/class/LocalStorage";

interface chatType {
  type: string;
  text: string;
}

const MyImage = ({ size }: { size: String }) => {
  const imgSrc = "/images/main/main.png";
  let className = "rounded-full bg-gray-200";
  if (size === "lg") {
    className += " w-14 h-14";
  } else {
    className += " w-8 h-8";
  }
  return <img src={imgSrc} alt="" className={className} />;
};

function getChatMessage(
  chatNum: string,
  setChatData: React.Dispatch<React.SetStateAction<chatType[]>>
) {
  fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "https://songsintroduce.vercel.app/"
    }api/chat?num=${chatNum}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      setChatData(jsonData);
    });
}
function ChatModal({ isOpen }: { isOpen: boolean }) {
  const messageRef = useRef<HTMLInputElement>(null);
  const [chatData, setChatData] = useState<Array<chatType>>([]);
  const [chatNum, setChatNum] = useState<string>(
    LocalStorage.getItem("chatNum") || ""
  );
  const [sendMessage, setSendMessage] = useState<string>("");
  const [isSendding, setIsSendding] = useState<boolean>(false);
  let blurCheck = chatNum ? true : false;

  function changChatNum(chat: string) {
    LocalStorage.setItem("chatNum", chat);
    setChatNum(chat);
    blurCheck = chat ? true : false;
  }
  function setInputMessage(message: string) {
    setSendMessage(message);
  }
  function sendChat() {
    if (chatNum === "" || sendMessage === "" || isSendding) {
      return;
    }
    setIsSendding(true);
    fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "https://songsintroduce.vercel.app/"
      }api/chat`,
      {
        method: "POST",
        body: JSON.stringify({ num: chatNum, message: sendMessage }),
      }
    ).then(function (res) {
      console.log(res);
      if (res.ok) {
        getChatMessage(chatNum, setChatData);
        if (messageRef.current) {
          messageRef.current.value = "";
          setSendMessage("");
          setIsSendding(false);
        }
      }
    });
  }
  useEffect(() => {
    getChatMessage(chatNum, setChatData);
  }, [isOpen, chatNum]);

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
          <MyImage size={"sm"} />
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
    <div className="justify-between h-full w-full bg-white rounded-2xl p-5">
      <div className="h-[15%] justify-between py-3 border-b-2 border-gray-200">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <MyImage size={"lg"} />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-lg mt-1 flex items-center">
              <span className="text-gray-700 mr-3 font-bold">송찬흠</span>
            </div>
            <span className="text-sm text-gray-600">Front-end Developer</span>
          </div>
        </div>
      </div>
      <div
        id="messages"
        className="h-[65%] space-y-4 p-3 overflow-y-auto scrollbar-thumb-violet scrollbar-thumb-rounded scrollbar-track-violet-lighter scrollbar-w-2 scrolling-touch"
      >
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-sm mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600 rounded-bl-none">
                  {
                    "안녕하세요. 프론트엔드 개발자 송찬흠입니다. 궁금하신 사항이나 문의사항은 E-mail (bsk9212@gmail.com) 혹은 여기에 남겨주시면 답변드리겠습니다! 감사합니다."
                  }
                </span>
              </div>
            </div>
            <MyImage size={"sm"} />
          </div>
        </div>
        {ChatMessage}
      </div>
      <div className="h-[20%] border-t-2 border-gray-200 px-4 pt-4 mb-2">
        <div className="flex items-center">
          <div className="relative w-full">
            <input
              type="password"
              defaultValue={chatNum}
              onBlur={(e) => changChatNum(e.target.value)}
              placeholder="비밀번호를 입력해 주세요. (개인 식별 번호)"
              className="w-full focus:outline-none text-sm focus:placeholder-gray-400 text-gray-600 placeholder-gray-600  bg-gray-200 rounded-md pl-5 py-3 mb-1"
            />
            {blurCheck ? (
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                🫡
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="relative flex">
          <input
            type="text"
            placeholder="메시지를 남겨주세요."
            defaultValue={sendMessage}
            ref={messageRef}
            onBlur={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              console.log(e);
              if (e.key === "Enter") {
                sendChat();
              }
            }}
            className="w-full focus:outline-none text-sm focus:placeholder-gray-400 text-gray-600 placeholder-gray-600  bg-gray-200 rounded-md pl-5 py-3"
          />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button
              type="button"
              onClick={() => sendChat()}
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 transition duration-500 ease-in-out text-white bg-violet-500 hover:bg-violet-400 focus:outline-none"
            >
              <span className="font-bold text-sm">Send</span>
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
    </div>
  );
}

export default ChatModal;

import React from "react";
import LocalStorage from "./class/LocalStorage";

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
const ChatModal = () => {
  const chatNum = LocalStorage.getItem("chatNum") || "";
  let blurCheck = chatNum ? true : false;

  function changChatNum(chat: string) {
    LocalStorage.setItem("chatNum", chat);
    blurCheck = chat ? true : false;
  }
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
                    "안녕하세요. 프론트엔드 개발자 송찬흠입니다. 궁금하신 사항이나 문의사항이 있으시면 E-mail (bsk9212@gmail.com) 혹은 여기에 남겨주시면 답변드리겠습니다! 감사합니다."
                  }
                </span>
              </div>
            </div>
            <MyImage size={"sm"} />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-sm mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-violet-600 text-white ">
                  yes, I have a mac. I never had issues with root permission as
                  well, but this helped me to solve the problem
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-sm mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  I get the same error on Arch Linux (also with sudo)
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  I also have this issue, Here is what I was doing until now:
                  #1076
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  even i am facing
                </span>
              </div>
            </div>
            <MyImage size={"sm"} />
          </div>
        </div>
      </div>
      <div className="h-[20%] border-t-2 border-gray-200 px-4 pt-4 mb-2">
        <div className="flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              defaultValue={chatNum}
              onBlur={(e) => changChatNum(e.target.value)}
              placeholder="답변 받으실 연락처를 남겨주세요. (E-mail/Phone)"
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
            className="w-full focus:outline-none text-sm focus:placeholder-gray-400 text-gray-600 placeholder-gray-600  bg-gray-200 rounded-md pl-5 py-3"
          />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button
              type="button"
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
};

export default ChatModal;

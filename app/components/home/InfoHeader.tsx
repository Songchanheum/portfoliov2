"use client";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdBookmarkAdd, MdKeyboardCommandKey } from "react-icons/md";
import crypto from "crypto";
import { useMutationRequest } from "@/common/hooks/useRequest";
import CommonModalComponent from "../common/CommonModalComponent";
import { KeyIcon } from "@/common/utils/Icons";
import ChatModal from "@/app/components/common/ChatModalComponent";
import { useA2HS } from "@/common/hooks/useA2HS";

const InfoHeader = ({
  toggle,
  showModal,
  setModalComp,
}: {
  toggle: () => void;
  showModal: boolean;
  setModalComp: (comp: ReactNode) => void;
}) => {
  const { deferredPrompt, installApp, clearPrompt } = useA2HS();

  const { data, request } = useMutationRequest<any>({
    requestPath: "today",
    reactQueryKey: "TODAY_SET",
    requestMethod: "POST",
  });

  const { data: getData, request: getRequest } = useMutationRequest<any>({
    requestPath: "today",
    reactQueryKey: "TODAY_GET",
    requestMethod: "GET",
  });

  const [info, setInfo] = useState<InfoType>({});

  useEffect(() => {
    if (!sessionStorage.getItem("idKey")) {
      const key = crypto.randomBytes(8).toString("hex");
      sessionStorage.setItem("idKey", key);
      request({ key });
    } else {
      getRequest();
    }
  }, []);

  useEffect(() => {
    setInfo(getData ?? data);
  }, [data, getData]);

  return (
    <>
      <header className="flex w-full md:mb-[24px] gap-[30px] p-4">
        <div className="shrink-0 hidden md:flex md:w-[290px] items-center justify-center">
          <Image
            src="/images/main/main.png"
            width={300}
            height={300}
            className="w-[150px] h-[150px] rounded-full bg-slate-100"
            alt="profile"
          ></Image>
        </div>
        <section className="h-full w-full items-start flex-col md:gap-5 gap-2 text-sm  min-w-[350px]">
          <div className="flex gap-4 items-center order-3 md:order-1 w-full">
            <div className="flex gap-4 flex-col md:flex-row items-center w-full">
              <h2 className="font-jua text-lg font-bold hidden md:block">
                songch_
              </h2>
              <div className="flex gap-2 justify-between md:justify-start w-full md:w-auto text-sm">
                <Link
                  href="/main"
                  className="flex justify-center items-center grow bg-[#0095F6] rounded-md"
                >
                  <button className="text-white font-bold h-8 py-1 px-4">
                    팔로우
                  </button>
                </Link>
                <button
                  className="bg-[#efefef] py-1 px-4 rounded-md text-black  h-8 grow"
                  onClick={() => {
                    toggle();
                    setModalComp(
                      <CommonModalComponent
                        type="INFO"
                        title="메시지 보내기"
                        onSuccess={() => {}}
                        toggle={toggle}
                      >
                        <div className="h-[600px] mt-[-24px]">
                          <ChatModal isOpen={showModal} />
                        </div>
                      </CommonModalComponent>
                    );
                  }}
                >
                  메시지
                </button>
                <button
                  className="bg-[#efefef] py-1 px-2 rounded-md text-black flex items-center h-8 grow-0"
                  onClick={() => {
                    if (
                      navigator.userAgent.toLowerCase().indexOf("mobile") < 0
                    ) {
                      toggle();
                      setModalComp(
                        <CommonModalComponent
                          type="INFO"
                          title="북마크 추가"
                          onSuccess={() => {}}
                          toggle={toggle}
                        >
                          {navigator.userAgent.toLowerCase().indexOf("mac") >=
                          0 ? (
                            <>
                              <div className="flex items-center gap-1">
                                <KeyIcon type="icon">
                                  <MdKeyboardCommandKey />
                                </KeyIcon>
                                + <KeyIcon type="text">D</KeyIcon>{" "}
                                <span>키를 눌러주세요!</span>
                              </div>
                              북마크(즐겨찾기)에 등록하실 수 있습니다.
                            </>
                          ) : (
                            <>
                              <div className="flex items-center gap-1">
                                <KeyIcon type="text">Ctrl</KeyIcon>+{" "}
                                <KeyIcon type="text">D</KeyIcon>
                                <span>키를 눌러주세요!</span>
                              </div>
                              북마크(즐겨찾기)에 등록하실 수 있습니다.
                            </>
                          )}
                        </CommonModalComponent>
                      );
                    } else {
                      toggle();
                      setModalComp(
                        <CommonModalComponent
                          type="CONFIRM"
                          title="홈화면 추가"
                          onSuccess={() => {
                            installApp();
                          }}
                          toggle={toggle}
                        >
                          홈화면에 추가하시겠습니까?
                        </CommonModalComponent>
                      );
                    }
                  }}
                >
                  <MdBookmarkAdd size="18" />
                  <p className="hidden md:block">북마크 추가</p>
                </button>
              </div>
            </div>
          </div>
          <ul className="flex gap-9 order-1 md:order-2 w-full items-center md:justify-start text-base">
            <div className="shrink-0 w-[100px] md:hidden flex justify-center items-center">
              <Image
                src="/images/main/main.png"
                width={300}
                height={300}
                className="w-[88px] h-[88px] rounded-full bg-slate-100 outline-offset-2 outline-2"
                alt="profile"
              ></Image>
            </div>
            <li className="flex flex-col md:flex-row md:gap-2 w-[33%] md:w-auto items-center">
              <p className="order-2 md:order-1 text-sm">게시글</p>
              <strong className="font-sans font-semibold">
                {info?.post ?? 0}
              </strong>
            </li>
            <li className="flex flex-col md:flex-row md:gap-2 w-[33%] md:w-auto items-center">
              <p className="order-2 md:order-1 text-sm">투데이</p>
              <strong className="font-sans font-semibold">
                {info?.today ?? 0}
              </strong>
            </li>
            <li className="flex flex-col md:flex-row md:gap-2 w-[33%] md:w-auto items-center">
              <p className="order-2 md:order-1 text-sm">토탈</p>
              <strong className="font-sans font-semibold">
                {info?.total ?? 0}
              </strong>
            </li>
          </ul>
          <div className="flex flex-col order-2 md:order-3">
            <strong className="text-base">🖥 송찬흠 💻</strong>
            <p>
              <span className="font-d2">Daily Dev Post</span> 기록, 개발 성장
              일지
            </p>
          </div>
        </section>
      </header>
      <section className="flex items-center justify-start w-full min-h-[115px] h-[115px] md:min-h-[130px] md:h-[130px] px-[30px] md:px-[60px] mb-4 overflow-x-auto overflow-y-hidden">
        <div className="flex gap-7">
          <div className="w-[75px] md:w-[85px] flex flex-col items-center gap-2 relative">
            <button className="hover:animate-spin rounded-full z-10">
              <Link href={"/main"} target="_blank">
                <Image
                  src={"/images/common/highlight.png"}
                  width={100}
                  height={100}
                  alt="highlight"
                  className="md:w-[85px] md:h-[85px] h-[75px] w-[75px]"
                />
              </Link>
            </button>
            <div className="md:w-[75px] md:h-[75px] w-[67px] h-[67px] absolute top-[4px] left-[4px] md:top-[5px] md:left-[5px] rounded-full bg-gradient-to-tr to-blue-100 from-red-200 text-white text-xs font-insta items-center flex justify-center">
              Portfolio
            </div>
            <p className="text-sm">portfolio</p>
          </div>
          <div className="w-[75px] md:w-[85px] flex flex-col items-center gap-2 relative">
            <button className="hover:animate-spin rounded-full z-10">
              <Link href={"http://songsblog.vercel.app/"} target="_blank">
                <Image
                  src={"/images/common/highlight.png"}
                  width={100}
                  height={100}
                  alt="highlight"
                  className="md:w-[85px] md:h-[85px] h-[75px] w-[75px]"
                />
              </Link>
            </button>
            <div className="md:w-[75px] md:h-[75px] w-[67px] h-[67px] absolute top-[4px] left-[4px] md:top-[5px] md:left-[5px] rounded-full bg-gradient-to-l to-yellow-100 from-sky-300 text-white text-xs font-insta items-center flex justify-center">
              Dev Blog
            </div>
            <p className="text-sm ">blog</p>
          </div>
          <div className="w-[75px] md:w-[85px] flex flex-col items-center gap-2 relative">
            <button className="hover:animate-spin rounded-full z-10">
              <Link href={"/resume"} target="_blank">
                <Image
                  src={"/images/common/highlight.png"}
                  width={100}
                  height={100}
                  alt="highlight"
                  className="md:w-[85px] md:h-[85px] h-[75px] w-[75px]"
                />
              </Link>
            </button>
            <div className="md:w-[75px] md:h-[75px] w-[67px] h-[67px] absolute top-[4px] left-[4px] md:top-[5px] md:left-[5px] rounded-full bg-gradient-to-t to-violet-100 from-pink-300 text-white text-xs font-insta items-center flex justify-center">
              Resume
            </div>
            <p className="text-sm ">resume</p>
          </div>
          <div className="w-[75px] md:w-[85px] flex flex-col items-center gap-2 relative">
            <button className="hover:animate-spin rounded-full z-10">
              <Link href={"https://profile-mac-os.vercel.app"} target="_blank">
                <Image
                  src={"/images/common/highlight.png"}
                  width={100}
                  height={100}
                  alt="highlight"
                  className="md:w-[85px] md:h-[85px] h-[75px] w-[75px]"
                />
              </Link>
            </button>
            <div className="md:w-[75px] md:h-[75px] w-[67px] h-[67px] absolute top-[4px] left-[4px] md:top-[5px] md:left-[5px] rounded-full bg-gradient-to-tl to-sky-100 from-violet-300 text-white text-xs font-insta items-center flex justify-center">
              Profile OS
            </div>
            <p className="text-sm ">profile os</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoHeader;

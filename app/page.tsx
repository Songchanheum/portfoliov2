"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdBookmarkAdd } from "react-icons/md";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdOutlineGridOn } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function Home() {
  const [projectData, setProjectData] = useState<ProjectType[]>();
  useEffect(() => {
    fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "https://songsintroduce.vercel.app/"
      }api/project`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        setProjectData(jsonData);
      });
  }, []);

  return (
    <>
      <header className="flex md:hidden h-[44px] border-b-slate-300 justify-between items-center w-full px-4">
        <FaChevronLeft />
        <Image
          src="/images/common/mainlogo.png"
          width={260}
          height={90}
          className="w-[100px] h-[32px]"
          alt="mainlogo"
        ></Image>
        <BsThreeDots />
      </header>
      <div className="flex w-full font-insta">
        <aside className="z-50 md:shrink-0 w-full md:w-[72px] xl:w-[244px] fixed bottom-0 md:top-0 md:left-0 p-[12px] bg-white">
          <div className="hidden xl:block pt-[25px] pb-[16px] px-[12px] mb-[13px]">
            <Image
              src="/images/common/mainlogo.png"
              width={260}
              height={90}
              className="w-[120px] h-[40px]"
              alt="mainlogo"
            ></Image>
          </div>{" "}
          <div className="hidden md:block xl:hidden pt-[25px] pb-[16px] mb-[13px]">
            <Image
              src="/images/common/mainlogo_small.png"
              width={90}
              height={90}
              className="w-[40px] h-[40px]  mx-auto"
              alt="mainlogo"
            ></Image>
          </div>
          <ul className="flex flex-row md:flex-col justify-between px-10 md:justify-start md:px-0">
            <li>홈</li>
            <li>홈</li>
            <li>홈</li>
            <li>홈</li>
          </ul>
        </aside>
        <main className="w-full md:ml-[70px] xl:ml-[244px]">
          <section className="mx-auto max-w-[975px] h-screen bg-white md:p-4 justify-start flex-col">
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
              <section className="h-full w-full items-start flex-col gap-5 text-sm  min-w-[350px]">
                <div className="flex gap-4 items-center order-3 md:order-1 w-full">
                  <div className="flex gap-4 flex-col md:flex-row items-center w-full">
                    <h2 className="font-jua text-lg font-bold hidden md:block">
                      songch_
                    </h2>
                    <div className="flex gap-2 justify-between md:justify-start w-full md:w-auto text-sm">
                      <button className="bg-[#efefef] py-1 px-4 rounded-lg text-black md:h-8 h-10 grow">
                        팔로우
                      </button>
                      <button className="bg-[#efefef] py-1 px-4 rounded-md text-black md:h-8 h-10 grow">
                        메시지
                      </button>
                      <button className="bg-[#efefef] py-1 px-2 rounded-md text-black flex items-center md:h-8 h-10 grow-0">
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
                    <strong className="font-sans font-semibold">123</strong>
                  </li>
                  <li className="flex flex-col md:flex-row md:gap-2 w-[33%] md:w-auto items-center">
                    <p className="order-2 md:order-1 text-sm">투데이</p>
                    <strong className="font-sans font-semibold">123</strong>
                  </li>
                  <li className="flex flex-col md:flex-row md:gap-2 w-[33%] md:w-auto items-center">
                    <p className="order-2 md:order-1 text-sm">토탈</p>
                    <strong className="font-sans font-semibold">123</strong>
                  </li>
                </ul>
                <div className="flex flex-col order-2 md:order-3">
                  <strong className="text-base">🖥 송찬흠 💻</strong>
                  <p>
                    <span className="font-d2">Daily Dev Post</span> 기록, 개발
                    성장 일지
                  </p>
                  <p className="flex gap-3">
                    포트폴리오 <FaRegHandPointRight size={"18"} />
                    <Link
                      href="https://songsintroduce.vercel.app/main/"
                      target="_blank"
                      className="text-blue-700"
                    >
                      이동
                    </Link>
                  </p>
                  <p className="flex gap-3">
                    블로그 <FaRegHandPointRight size={"18"} />
                    <Link
                      href="https://songsblog.vercel.app/"
                      target="_blank"
                      className="text-blue-700"
                    >
                      이동
                    </Link>
                  </p>
                  <p className="flex gap-3">
                    경력기술
                    <FaRegHandPointRight size={"18"} />
                    <Link
                      href="https://songsintroduce.vercel.app/resume/"
                      target="_blank"
                      className="text-blue-700"
                    >
                      이동
                    </Link>
                  </p>
                </div>
              </section>
            </header>
            <section className="h-screen border-t-[1px] border-none md:border-t-gray-300 w-full flex-col item-center justify-start">
              <div className="flex md:gap-16 text-sm w-full justify-center mb-2">
                <a className="md:border-t-2 md:border-t-black md:border-b-0 border-b-2 border-b-black mt-[-2px] py-4  font-bold md:w-auto w-[33%] flex items-center justify-center gap-1">
                  <MdOutlineGridOn className="hidden md:block" />
                  <MdOutlineGridOn className="md:hidden" size="26" />
                  <span className="md:block hidden">개발글</span>
                </a>
                <a className="py-4 text-slate-700 md:w-auto w-[33%] flex items-center justify-center">
                  <MdOutlineLibraryBooks className="hidden md:block" />
                  <MdOutlineLibraryBooks className="md:hidden" size="26" />
                  <span className="md:block hidden">블로그</span>
                </a>
                <a className="py-4 text-slate-700 md:w-auto w-[33%] flex items-center justify-center">
                  <MdOutlineBookmarkBorder className="hidden md:block" />
                  <MdOutlineBookmarkBorder className="md:hidden" size="26" />
                  <span className="md:block hidden">포스트</span>
                </a>
              </div>
              <article className="grid grid-cols-3 w-full gap-1">
                {projectData ? (
                  projectData.map((e: ProjectType) => {
                    return (
                      <div
                        key={e.code}
                        className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"
                      >
                        {e.src ? (
                          <Image
                            src={`/images/project/${e.src}`}
                            width={500}
                            height={500}
                            alt={`${e.title}`}
                            className="object-cover h-full"
                          ></Image>
                        ) : (
                          <>No Image</>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </article>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

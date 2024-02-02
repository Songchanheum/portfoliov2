import Image from "next/image";
import Link from "next/link";
import { MdBookmarkAdd } from "react-icons/md";
import { FaRegHandPointRight } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <header className="flex md:hidden h-[44px] border-b-[1px] border-b-slate-300 justify-center items-center">
        <Image
          src="/images/common/mainlogo.png"
          width={260}
          height={90}
          className="w-[100px] h-[32px]"
          alt="mainlogo"
        ></Image>
      </header>
      <div className="flex w-full">
        <aside className="z-50 md:shrink-0 w-full md:w-[70px] xl:w-[244px] fixed bottom-0 md:top-0 md:left-0 bg-slate-50 p-[12px]">
          <menu>
            <div className="hidden xl:block pt-[25px] pb-[16px] px-[12px] mb-[13px]">
              <Image
                src="/images/common/mainlogo.png"
                width={260}
                height={90}
                className="w-[100px] h-[32px]"
                alt="mainlogo"
              ></Image>
            </div>
            <ul className="flex flex-row md:flex-col justify-between px-10 md:justify-start md:px-0">
              <li>홈</li>
              <li>홈</li>
              <li>홈</li>
              <li>홈</li>
            </ul>
          </menu>
        </aside>
        <main className="w-full bg-gray-200 font-jua md:ml-[70px] xl:ml-[244px]">
          <section className="mx-auto max-w-[975px] h-screen bg-white md:p-4 justify-start flex-col">
            <header className="flex w-full md:mb-[44px] gap-[30px] p-4">
              <div className="shrink-0 hidden md:block md:w-[290px]">
                <Image
                  src="/images/main/main.png"
                  width={300}
                  height={300}
                  className="w-[150px] h-[150px] mx-auto rounded-full bg-slate-100"
                  alt="profile"
                ></Image>
              </div>
              <section className="h-full w-full items-start flex-col gap-5 text-sm">
                <div className="flex gap-4 items-center order-1">
                  <div className="shrink-0 w-[77px] md:hidden">
                    <Image
                      src="/images/main/main.png"
                      width={300}
                      height={300}
                      className="w-[77px] h-[77px] rounded-full bg-slate-100"
                      alt="profile"
                    ></Image>
                  </div>
                  <div className="flex gap-4 flex-col md:flex-row">
                    <h2 className="text-lg font-bold">songch_</h2>
                    <div className="flex gap-2">
                      <button className="bg-gray-400 py-1 px-4 rounded-md text-white">
                        뭐할지
                      </button>
                      <button className="bg-gray-400 py-1 px-2 rounded-md text-white flex items-center md:gap-1">
                        <MdBookmarkAdd size="20" />
                        <p className="hidden md:block">북마크 추가</p>
                      </button>
                    </div>
                  </div>
                </div>
                <ul className="flex gap-9 order-3 md:order-2 w-full justify-between md:justify-start">
                  <li className="flex flex-col md:flex-row md:gap-2 w-[33%] md:w-auto items-center">
                    <p>게시글</p> <strong>123</strong>
                  </li>
                  <li className="flex flex-col md:flex-row md:gap-2 w-[33%] md:w-auto items-center">
                    <p>투데이</p> <strong>123</strong>
                  </li>
                  <li className="flex flex-col md:flex-row md:gap-2 w-[33%] md:w-auto items-center">
                    <p>토탈</p> <strong>123</strong>
                  </li>
                </ul>
                <div className="flex flex-col order-2 md:order-3">
                  <strong className="text-base">🖥송찬흠💻</strong>
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
            <section className="h-screen border-t-[1px] border-t-gray-300 w-full flex-col item-center justify-start">
              <div className="flex md:gap-16 text-sm w-full justify-center">
                <a className="border-t-[1.5px] mt-[-1.5px] py-4 border-t-black font-bold md:w-auto w-[33%] flex items-center justify-center">
                  개발글
                </a>
                <a className="py-4 text-slate-700 md:w-auto w-[33%] flex items-center justify-center">
                  블로그
                </a>
                <a className="py-4 text-slate-700 md:w-auto w-[33%] flex items-center justify-center">
                  포스트
                </a>
              </div>
              <article className="grid grid-cols-3 w-full gap-1">
                <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"></div>
                <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"></div>
                <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"></div>
                <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"></div>
                <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"></div>
                <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"></div>
                <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"></div>
                <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"></div>
                <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"></div>
                <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"></div>
              </article>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

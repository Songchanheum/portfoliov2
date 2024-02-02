import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <header className="block md:hidden bg-slate-300">123</header>
      <div className="flex w-full">
        <aside className="shrink-0 w-[244px] bg-slate-50 p-[12px]">
          <menu>
            <div>123</div>
            <ul>
              <li>홈</li>
              <li>홈</li>
              <li>홈</li>
              <li>홈</li>
            </ul>
          </menu>
        </aside>
        <main className="w-full bg-gray-200 font-jua">
          <section className="mx-auto w-[975px] h-screen bg-white p-4 justify-start flex-col">
            <header className="flex w-full h-[150px] mb-[44px] gap-[30px]">
              <div className="shrink-0 w-[300px]">
                <Image
                  src="/images/main/main.png"
                  width={300}
                  height={300}
                  className="w-[150px] h-[150px] mx-auto rounded-full bg-slate-100"
                  alt="profile"
                ></Image>
              </div>
              <section className="h-full w-full items-start flex-col gap-5 text-base">
                <div className="flex gap-4 items-center">
                  <h2 className="text-lg font-bold">songch_</h2>
                  <button className="bg-gray-400 py-1 px-4 rounded-md text-white">
                    뭐할지
                  </button>
                  <button className="bg-gray-400 py-1 px-4 rounded-md text-white">
                    생각하기
                  </button>
                </div>
                <ul className="flex gap-9">
                  <li>게시물 123</li>
                  <li>팔로워 123</li>
                  <li>팔로우 123</li>
                </ul>
                <div className="flex flex-col text-sm">
                  <strong>송찬흠</strong>
                  <p>뭐시기뭐시기설명</p>
                </div>
              </section>
            </header>
            <section className="h-full border-t-[1px] border-t-gray-300 w-full flex-col item-center justify-start">
              <div className="flex gap-16 text-sm">
                <a className="border-t-[1.5px] mt-[-1.5px] py-4 border-t-black font-bold">
                  개발글
                </a>
                <a className="pt-4 text-slate-700">블로그</a>
                <a className="pt-4 text-slate-700">???</a>
              </div>
              <article className="grid grid-cols-3 w-full gap-1">
                <div className="w-[311px] h-[311px] flex justify-center items-center bg-gray-100"></div>
                <div className="w-[311px] h-[311px] flex justify-center items-center bg-gray-100"></div>
                <div className="w-[311px] h-[311px] flex justify-center items-center bg-gray-100"></div>
                <div className="w-[311px] h-[311px] flex justify-center items-center bg-gray-100"></div>
                <div className="w-[311px] h-[311px] flex justify-center items-center bg-gray-100"></div>
                <div className="w-[311px] h-[311px] flex justify-center items-center bg-gray-100"></div>
                <div className="w-[311px] h-[311px] flex justify-center items-center bg-gray-100"></div>
                <div className="w-[311px] h-[311px] flex justify-center items-center bg-gray-100"></div>
              </article>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

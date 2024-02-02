import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <header className="flex md:hidden h-[44px] border-b-[1px] border-b-black  justify-between items-center">
        123
      </header>
      <div className="flex w-full">
        <aside className="z-50 md:shrink-0 w-full md:w-[70px] xl:w-[244px] md:static fixed bottom-0 bg-slate-50 p-[12px]">
          <menu>
            <div className="hidden md:block">123</div>
            <ul className="flex flex-row md:flex-col justify-between px-10 md:justify-start md:px-0">
              <li>홈</li>
              <li>홈</li>
              <li>홈</li>
              <li>홈</li>
            </ul>
          </menu>
        </aside>
        <main className="w-full bg-gray-200 font-jua">
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
                      <button className="bg-gray-400 py-1 px-4 rounded-md text-white">
                        생각하기
                      </button>
                    </div>
                  </div>
                </div>
                <ul className="flex gap-9 order-3 md:order-2 w-full justify-between md:justify-start">
                  <li className="flex flex-col md:flex-row md:gap-2 w-[33%] md:w-auto items-center">
                    <p>게시물</p> <strong>123</strong>
                  </li>
                  <li className="flex flex-col md:flex-row md:gap-2 w-[33%] md:w-auto items-center">
                    <p>게시물</p> <strong>123</strong>
                  </li>
                  <li className="flex flex-col md:flex-row md:gap-2 w-[33%] md:w-auto items-center">
                    <p>게시물</p> <strong>123</strong>
                  </li>
                </ul>
                <div className="flex flex-col order-2 md:order-3">
                  <strong>송찬흠</strong>
                  <p>뭐시기뭐시기설명</p>
                  <p>뭐시기뭐시기설명</p>
                  <p>뭐시기뭐시기설명</p>
                  <p>뭐시기뭐시기설명</p>
                </div>
              </section>
            </header>
            <section className="h-screen border-t-[1px] border-t-gray-300 w-full flex-col item-center justify-start">
              <div className="flex md:gap-16 text-sm w-full">
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

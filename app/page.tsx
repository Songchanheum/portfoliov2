import Link from "next/link";
import React from "react";

export default function Home() {
  const splash_html = `
<iframe id="splash_iframe" class="border-none w-[1000px] h-[500px]" src="/splash/main/index.html" scrolling="no" style="top: 0px;">
</iframe>
`;
  return (
    <>
      <div className="grid grid-row-3">
        <div className="grid place-items-center mt-10">
          <img
            className="block m-auto"
            src="/images/common/introduce.png"
          ></img>
        </div>
        <div
          className="grid place-items-center h-[500px]"
          dangerouslySetInnerHTML={{ __html: splash_html }}
        ></div>
        <div className="grid grid-cols-2 place-items-center">
          <Link
            href="https://songchanheum.github.io/portfolio/"
            target="_blank"
            className="place-self-end"
          >
            <button className="w-72 h-14 mt-5 mr-5 font-bold text-xl border-cyan-900 border-none hover:border-dotted border-8 rounded-lg bg-blue-400 hover:bg-cyan-700">
              <img
                className="block m-auto"
                src="/images/common/version.png"
              ></img>
            </button>
          </Link>

          <Link
            href="https://songchanheum.github.io/portfolio/"
            className="place-self-start"
          >
            <button className="w-72 h-14 mt-5 ml-5 font-bold text-xl border-orange-700 border-none hover:border-dotted border-8 rounded-lg bg-orange-200 hover:bg-orange-400">
              <img className="block m-auto" src="/images/common/skip.png"></img>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

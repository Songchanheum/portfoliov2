import React from "react";

export default function Home() {
  const splash_html = `
<iframe id="splash_iframe" class="border-none w-[1000px] h-[500px]" src="/splash/main/index.html" scrolling="no" style="top: 0px;">
</iframe>
`;
  return (
    <>
      <div className="grid grid-row-3">
        <div className="grid place-items-center">
          <img
            className="block m-auto"
            src="/images/common/introduce.png"
          ></img>
        </div>
        <div
          className="grid place-items-center h-[500px]"
          dangerouslySetInnerHTML={{ __html: splash_html }}
        ></div>
        <div className="grid place-items-center">
          <button className="w-52 h-14 mt-5 font-bold text-xl border-orange-700 border-none hover:border-dotted border-2 rounded-lg bg-orange-200 hover:bg-orange-400 text-center">
            <img className="block m-auto" src="/images/common/skip.png"></img>
          </button>
        </div>
      </div>
    </>
  );
}

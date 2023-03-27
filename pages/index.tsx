import dynamic from "next/dynamic";
import Link from "next/link";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Move,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

export default function Home() {
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div className="bg-gradient-to-b from-purple-400 to-violet-100 font-gamja scrollbar-hide">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <h1 className="text-9xl font-gamja">Hello!!! 👋🏻</h1>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator className="text-center" animation={batch(Sticky(), Fade())}>
            <h1 className="font-bold text-6xl mb-5">안녕하세요</h1>
            <span className="text-4xl text-center">송찬흠 입니다. 😀</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span></span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span className="text-5xl">✨ 7년차 WEB Developer</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span className="text-5xl">✨ 3년차 Front-end Developer</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span></span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className="mb-7">
              <span className="text-4xl">
                ✨ 전 - (주)카피앤패이스트 근무(미디어플랫폼팀 - 대리)
              </span>
            </div>
            <br />
            <div className="mb-7">
              <span className="text-4xl mb-7">
                ✨ 전 - (주)에코플래그 근무(플랫폼개발팀 - 대리)
              </span>
            </div>
            <br />
            <div className="mb-7">
              <span className="text-4xl mb-7">
                ✨ 현 - (주)알티모빌리티 근무중(플랫폼개발팀)
              </span>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span></span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <p className="text-6xl mb-10">
              Front-end 개발자 송찬흠을 소개합니다.
            </p>
            <Link href="/portfolio">
              <button className="hover:underline text-3xl font-sans font-bold text-slate-800">
                Portfolio Page로 넘어가기 ⏩️
              </button>
            </Link>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

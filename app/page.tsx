"use client";
import { ReactNode, Suspense, useEffect, useState } from "react";
import DevPostComponents from "./components/home/DevPostComponents";
import HomeHeader from "./components/home/HomeHeader";
import HomeSidebar from "./components/home/HomeSidebar";
import InfoHeader from "./components/home/InfoHeader";
import HomeTabList from "./components/home/HomeTabList";
import { useBooleanToggle } from "@/common/hooks/useBooleanToggle";
import PostSkeletonComponent from "./components/common/PostSkeletonComponent";

export default function Home() {
  const { data: showModal, toggle } = useBooleanToggle();
  const [modal, setModal] = useState<ReactNode>();

  const setModalComp = (comp: ReactNode) => {
    setModal(comp);
  };
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (regi) {
            console.log(regi.scope);
          },
          function (err) {
            console.log(err);
          }
        );
      });
    }
  }, []);
  return (
    <>
      <HomeHeader />
      <div className={"flex w-full font-insta bg-white"}>
        <HomeSidebar />
        <main className="w-full md:ml-[70px] xl:ml-[244px]">
          <section className="mx-auto max-w-[975px] h-screen bg-white md:p-4 justify-start flex-col">
            <InfoHeader
              toggle={toggle}
              showModal={showModal}
              setModalComp={setModalComp}
            />
            <section className="h-screen border-t-[1px] border-none md:border-t-gray-300 w-full flex-col item-center justify-start">
              <Suspense fallback={<>Loading...</>}>
                <HomeTabList />
              </Suspense>
              <article className="grid grid-cols-3 w-full gap-1 pb-40">
                <Suspense fallback={<PostSkeletonComponent />}>
                  <DevPostComponents
                    toggle={toggle}
                    showModal={showModal}
                    setModalComp={setModalComp}
                  />
                </Suspense>
              </article>
            </section>
          </section>
          {showModal ? modal : ""}
        </main>
      </div>
    </>
  );
}

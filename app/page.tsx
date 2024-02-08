"use client";
import { Suspense, useEffect, useState } from "react";
import DevPostComponents from "./components/home/DevPostComponents";
import HomeHeader from "./components/home/HomeHeader";
import HomeSidebar from "./components/home/HomeSidebar";
import InfoHeader from "./components/home/InfoHeader";
import HomeTabList from "./components/home/HomeTabList";
import crypto from "crypto";
import { useMutationRequest } from "@/common/hooks/useRequest";

interface InfoType {
  today?: number;
  total?: number;
}
export default function Home() {
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
      <HomeHeader />
      <div className="flex w-full font-insta">
        <HomeSidebar />
        <main className="w-full md:ml-[70px] xl:ml-[244px]">
          <section className="mx-auto max-w-[975px] h-screen bg-white md:p-4 justify-start flex-col">
            <InfoHeader data={info} />
            <section className="h-screen border-t-[1px] border-none md:border-t-gray-300 w-full flex-col item-center justify-start">
              <Suspense fallback={<>Loading...</>}>
                <HomeTabList />
              </Suspense>
              <article className="grid grid-cols-3 w-full gap-1 pb-40">
                <Suspense fallback={<>Loading...</>}>
                  <DevPostComponents />
                </Suspense>
              </article>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

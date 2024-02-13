"use client";
import {
  encodeParam,
  getURL,
  useSearchParam,
} from "@/common/hooks/useSearchParam";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  MdOutlineBookmarkBorder,
  MdOutlineGridOn,
  MdOutlineLibraryBooks,
} from "react-icons/md";

const HomeTabList = () => {
  const router = useRouter();
  const searchParam = useSearchParam();

  const selTabClass =
    "md:border-t-2 md:border-t-black md:border-b-0 border-b-2 border-b-black md:mt-[-2px] md:mb-0 mb-[-2px] mt-0 py-4  font-bold md:w-auto w-[33%] flex items-center justify-center gap-1";
  const defTabClass =
    "py-4 text-slate-700 md:w-auto w-[33%] flex items-center justify-center gap-1";

  const selectTab = searchParam.getData("selectTab");

  useEffect(() => {
    if (!selectTab) {
      searchParam.set("selectTab", "post").replace();
    }
  }, [selectTab]);

  const PathRedirect = (path: string) => {
    const url = getURL("/", encodeParam({ selectTab: path }));

    router.push(url);
    // searchParam.set('selectTab', path).push();
  };
  return (
    <div className="flex md:gap-16 text-sm w-full justify-center mb-2">
      <button
        onClick={() => PathRedirect("post")}
        className={selectTab === "post" ? selTabClass : defTabClass}
      >
        <MdOutlineBookmarkBorder className="hidden md:block" />
        <MdOutlineBookmarkBorder className="md:hidden" size="26" />
        <span className="md:block hidden">포스트</span>
      </button>
      <button
        onClick={() => PathRedirect("dev")}
        className={selectTab === "dev" ? selTabClass : defTabClass}
      >
        <MdOutlineGridOn className="hidden md:block" />
        <MdOutlineGridOn className="md:hidden" size="26" />
        <span className="md:block hidden">개발글</span>
      </button>
      <button
        onClick={() => PathRedirect("blog")}
        className={selectTab === "blog" ? selTabClass : defTabClass}
      >
        <MdOutlineLibraryBooks className="hidden md:block" />
        <MdOutlineLibraryBooks className="md:hidden" size="26" />
        <span className="md:block hidden">블로그</span>
      </button>
    </div>
  );
};

export default HomeTabList;

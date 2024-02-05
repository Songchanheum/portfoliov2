import { ChatIcon } from "@/common/utils/Icons";
import Image from "next/image";

const HomeSidebar = () => {
  return (
    <aside className="z-50 md:shrink-0 w-full md:w-[72px] 2xl:w-[336px] fixed bottom-0 md:top-0 md:left-0 p-[8px] md:p-[12px] bg-white dark:bg-gray-800">
      <div className="hidden 2xl:block pt-[25px] pb-[16px] px-[12px] mb-[13px]">
        <Image
          src="/images/common/mainlogo.png"
          width={260}
          height={90}
          className="w-[120px] h-[40px]"
          alt="mainlogo"
        ></Image>
      </div>
      <div className="hidden md:block 2xl:hidden pt-[25px] pb-[16px] mb-[13px]">
        <Image
          src="/images/common/mainlogo_small.png"
          width={90}
          height={90}
          className="w-[40px] h-[40px]  mx-auto"
          alt="mainlogo"
        ></Image>
      </div>
      <ul className="flex flex-row md:flex-col justify-between px-2 md:justify-start md:px-0">
        <li className="h-[56px] hover:bg-slate-50 flex items-center my-1 gap-4 rounded-md justify-center 2xl:justify-start 2xl:pl-[12px] p-4 md:p-0 cursor-pointer">
          <Image
            src="/images/icon/ico_home.svg"
            width={300}
            height={300}
            className="w-[24px] h-[24px]"
            alt="home"
          ></Image>
          <span className="hidden 2xl:block text-[18px] leading-6">홈</span>
        </li>{" "}
        <li className="h-[56px] hover:bg-slate-50 flex items-center my-1 gap-4 rounded-md justify-center 2xl:justify-start 2xl:pl-[12px] p-4 md:p-0 cursor-pointer">
          <Image
            src="/images/icon/ico_search.svg"
            width={300}
            height={300}
            className="w-[24px] h-[24px] "
            alt="search"
          ></Image>
          <span className="hidden 2xl:block text-[18px] leading-6">검색</span>
        </li>{" "}
        <li className="h-[56px] hover:bg-slate-50 flex items-center my-1 gap-4 rounded-md justify-center 2xl:justify-start 2xl:pl-[12px] p-4 md:p-0 cursor-pointer">
          <Image
            src="/images/icon/ico_edit.svg"
            width={300}
            height={300}
            className="w-[24px] h-[24px] "
            alt="edit"
          ></Image>
          <span className="hidden 2xl:block text-[18px] leading-6">추가</span>
        </li>
        <li className="h-[56px] hover:bg-slate-50 flex items-center my-1 gap-4 rounded-md justify-center 2xl:justify-start 2xl:pl-[12px] p-4 md:p-0 cursor-pointer">
          <ChatIcon size={24} className="font-bold" />
          <span className="hidden 2xl:block text-[18px] leading-6">메시지</span>
        </li>
        <li className="h-[56px] hover:bg-slate-50 flex items-center my-1 gap-4 rounded-md justify-center 2xl:justify-start 2xl:pl-[12px] p-4 md:p-0 cursor-pointer">
          <Image
            src="/images/main/main.png"
            width={300}
            height={300}
            className="w-[24px] h-[24px] rounded-full bg-slate-100 outline outline-black outline-2 outline-offset-2"
            alt="profile"
          ></Image>
          <span className="hidden 2xl:block text-[18px] leading-6">더보기</span>
        </li>
      </ul>
    </aside>
  );
};

export default HomeSidebar;

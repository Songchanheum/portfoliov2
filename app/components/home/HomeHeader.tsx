import Image from "next/image";

const HomeHeader = () => {
  return (
    <header className="flex md:hidden h-[44px] border-b-slate-300 justify-center items-end w-full px-4">
      <Image
        src="/images/common/mainlogo.png"
        width={260}
        height={90}
        className="w-[100px] h-[32px]"
        alt="mainlogo"
      ></Image>
    </header>
  );
};

export default HomeHeader;

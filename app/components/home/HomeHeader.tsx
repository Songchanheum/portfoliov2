import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";

const HomeHeader = () => {
  return (
    <header className="flex md:hidden h-[44px] border-b-slate-300 justify-between items-center w-full px-4">
      <FaChevronLeft />
      <Image
        src="/images/common/mainlogo.png"
        width={260}
        height={90}
        className="w-[100px] h-[32px]"
        alt="mainlogo"
      ></Image>
      <BsThreeDots />
    </header>
  );
};

export default HomeHeader;

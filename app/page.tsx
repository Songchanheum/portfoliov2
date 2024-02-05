import { MdOutlineBookmarkBorder } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdOutlineGridOn } from "react-icons/md";
import DevPostComponents from "./components/home/DevPostComponents";
import HomeHeader from "./components/home/HomeHeader";
import HomeSidebar from "./components/home/HomeSidebar";
import InfoHeader from "./components/home/InfoHeader";
import HomeTabList from "./components/home/HomeTabList";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex w-full font-insta">
        <HomeSidebar />
        <main className="w-full md:ml-[70px] xl:ml-[244px]">
          <section className="mx-auto max-w-[975px] h-screen bg-white md:p-4 justify-start flex-col">
            <InfoHeader />
            <section className="h-screen border-t-[1px] border-none md:border-t-gray-300 w-full flex-col item-center justify-start">
              <HomeTabList />
              <article className="grid grid-cols-3 w-full gap-1">
                <DevPostComponents />
              </article>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

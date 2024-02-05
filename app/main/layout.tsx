import Providers from "./components/theme/Provider";

import { usePathname } from "next/navigation";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ScrollToTop from "@/common/utils/ScrollToTop";
export const metadata = {
  title: "소개합니다!",
  description: "Daily Dev Post",
};

function BgImg() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-[-99]">
      <div className="bg-gradient-to-r from-white via-orange-200 to-orange-100 dark:from-slate-900 dark:via-purple-800 dark:to-violet-600 opacity-40 w-full h-full absolute top-0 left-0 "></div>
      <div className="bg-gradient-to-b from-white via-transparent to-white dark:from-transparent dark:to-slate-900 z-[1] w-full h-full absolute top-0 left-0"></div>
    </div>
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white dark:bg-slate-900">
        <BgImg />
        <Providers>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

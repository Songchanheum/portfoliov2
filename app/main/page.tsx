import React from "react";
import MainDiv from "@/app/main/components/MainDiv";
import ThemeSwitcher from "./components/theme/ThemeSwitcher";

async function Main() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="absolute top-3 right-10 z-50">
        <ThemeSwitcher />
      </div>
      <MainDiv />
    </div>
  );
}

export default Main;

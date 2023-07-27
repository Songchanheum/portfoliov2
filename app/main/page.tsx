import React from "react";
import { GET } from "../api/user/route";
import MainDiv from "@/components/MainDiv";

async function Main() {
  // const getData = await GET();
  // console.log(getData);
  return (
    <div className="w-full h-screen grid place-items-center">
      <MainDiv />
    </div>
  );
}

export default Main;

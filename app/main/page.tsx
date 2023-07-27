import React from "react";
import { GET } from "../api/user/route";
import MainDiv from "@/components/MainDiv";

async function getUser() {
  const res = await fetch("http://localhost:5001/api/user");
  return res.json();
}
async function Main() {
  const getData = await getUser();
  console.log(getData);
  return (
    <div className="w-full h-screen grid place-items-center">
      <MainDiv />
    </div>
  );
}

export default Main;

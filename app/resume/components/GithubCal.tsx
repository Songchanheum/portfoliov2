"use client";
import { Github } from "@/common/utils/Icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import GitHubCalendar from "react-github-calendar";
interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const GithubCal = ({ id }: { id: string }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  // 최근 5개월만 return하는 함수
  const selectLastHalfYear = (contributions: Day[]) => {
    // 현재 연/월
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    // 노출할 기간(달)
    const shownMonths = 5;

    return contributions.filter((day: Day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      // 현재 날짜가 6월~12월 사이인 경우
      if (currentMonth >= 5)
        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );

      // 현재 날짜가 1월~5월인 경우
      return (
        // 올해
        (date.getFullYear() === currentYear && monthOfDay <= currentMonth) ||
        // 작년
        (date.getFullYear() === currentYear - 1 &&
          monthOfDay > currentMonth + 11 - shownMonths)
      );
    });
  };
  return (
    <div>
      <div className="flex justify-start items-center my-2">
        <Link
          className="hidden lg:block mr-4"
          href={"https://github.com/Songchanheum"}
          target="_blank"
        >
          <Github size={"35"} />
        </Link>
        <p className="font-light text-gray-600 text-sm">
          <span className="font-bold text-black text-lg lg:text-xl">{`${id}`}</span>
          {`'s GitHub Calendar`}
        </p>
      </div>
      {isMounted && (
        <>
          <div className="hidden lg:block">
            <GitHubCalendar
              username={id}
              blockSize={12}
              transformData={selectLastHalfYear}
              hideTotalCount={true}
              weekStart={0}
              colorScheme="light"
              style={{
                height: "14.4rem",
                width: "72rem",
              }}
            />
          </div>
          <div className="block lg:hidden mr-2">
            <GitHubCalendar
              username={id}
              blockSize={10}
              transformData={selectLastHalfYear}
              hideTotalCount={true}
              weekStart={0}
              colorScheme="light"
              style={{
                height: "12rem",
                width: "66rem",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GithubCal;

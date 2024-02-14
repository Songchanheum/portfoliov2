import React from "react";
import GithubCal from "./GithubCal";
import Image from "next/image";

const MeInfo = () => {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto scrollbar-hide bg-gray-50 dark:bg-gray-800 flex flex-col justify-start items-center pt-15 lg:pt-10">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-center flex-row lg:flex-col">
          <Image
            src="/images/resume/profile.jpeg"
            width={"1000"}
            height={"1000"}
            alt=""
            className="rounded-full h-36 w-36 lg:h-64 lg:w-64"
          />
          <div className="flex-col justify-center items-center ms-3 lg:ms-0">
            <h2 className="text-4xl font-do font-bold text-slate-800 my-2 text-center">
              송 찬 흠
            </h2>
            <p className="text-sm text-gray-700 lg:mb-10 lg:text-xl max-w-[140px] lg:max-w-sm text-center lg:text-left">
              디자인을 배우는 프론트엔드 개발자
            </p>
          </div>
        </div>
        <GithubCal id="Songchanheum" />
      </div>
      <div className="w-[90%] ms-3 divide-y divide-gray-200 mb-10">
        <p className="text-lg font-do font-bold ps-2 mb-3 ">프로필</p>
        <dl className="text-gray-900">
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 text-base">이메일</dt>
            <dd className="text-base font-semibold">bsk9212@gmail.com</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 text-base">전화번호</dt>
            <dd className="text-base font-semibold">010-4100-7802</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 text-base">지역</dt>
            <dd className="text-base font-semibold">
              대한민국 인천광역시 동구
            </dd>
          </div>
        </dl>
      </div>
      <div className="w-[90%] ms-3 divide-y divide-gray-200">
        <p className="text-lg font-do font-bold ps-2 mb-3 ">보유 스킬</p>
        <div className="grid grid-cols-4 place-items-center py-2 gap-2">
          <div>
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=black" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=Typescript&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/css-1572B6?style=flat&logo=css3&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/antdesign-339AF0?style=flat&logo=antdesign&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/styled-DB7093?style=flat&logo=styled-components&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/jquery-0769AD?style=flat&logo=jquery&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/angular.js-DD0031?style=flat-square&logo=angularjs&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/node.js-339933?style=flat&logo=Node.js&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/gitlab-F05032?style=flat&logo=gitlab&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/java-007396?style=flat&logo=java&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/spring-6DB33F?style=flat&logo=spring&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/express-000000?style=flat&logo=express&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/jquery-0769AD?style=flat&logo=jquery&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/oracle-F80000?style=flat&logo=oracle&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/mysql-4479A1?style=flat&logo=mysql&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/mariaDB-003545?style=flat&logo=mariaDB&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/mongoDB-47A248?style=flat&logo=MongoDB&logoColor=white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeInfo;

import React from "react";

interface CarrerType {
  title: string;
  due: string;
  children: React.ReactNode;
}

const Carrer = (props: CarrerType) => {
  return (
    <li className="relative mb-6 sm:mb-0">
      <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white sm:ring-8  shrink-0">
          <svg
            className="w-2.5 h-2.5 text-slate-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <div className="flex w-full bg-gray-200 h-0.5"></div>
      </div>
      <div className="mt-3 sm:pr-8">
        <h3 className="text-lg font-semibold text-gray-900">{props.title}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
          {props.due}
        </time>
        <p className="text-base font-normal text-gray-500 ">{props.children}</p>
      </div>
    </li>
  );
};

const Timeline = () => {
  const TIME_LINE = [
    {
      title: "(주)카피앤패이스트",
      due: "2016.11.02 - 2020.11.19",
      info: (
        <span>
          {`(주)KT 고객사 SI업체`} <br />
          {`Matrix view 스트리머 서버 개발`}
          <br />
          {`Olleh TV WEB Service APP 개발`}
        </span>
      ),
    },
    {
      title: "(주)에코플래그",
      due: "2020.11.23 - 2021.11.30",
      info: (
        <span>
          {`물, 수도 관련 SI 프로젝트 진행`} <br />
          {`오염원배출분석 웹 프로그램 유지보수`}
        </span>
      ),
    },
    {
      title: "(주)알티모빌리티",
      due: "2021.12.01 - 재직중",
      info: (
        <span>
          {`RAiDEA 서비스 Admin Page 개발`}
          <br />
          {`Mobility Service SI 프로젝트 진행`}
        </span>
      ),
    },
  ];
  return (
    <div className="mt-3">
      <ol className="items-start sm:flex">
        {TIME_LINE.map((e, i) => {
          return (
            <Carrer key={e.title + i} title={e.title} due={e.due}>
              {e.info}
            </Carrer>
          );
        })}
      </ol>
    </div>
  );
};

export default Timeline;

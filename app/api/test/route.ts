import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const num = req.nextUrl.searchParams.get("num");
  console.log(num);
  const user = await kv.lrange(`project`, 0, -1);
  console.log(user);
  return NextResponse.json(user);
}

// export async function GET(req: NextRequest) {
//   const messageKV = await kv.rpush(
//     `project`,
//     `{
//         "color": "#000000",
//         "src": "pwpv2.png",
//         "code": "P0000",
//         "due": "2023",
//         "title": "포트폴리오 V2",
//         "description": "Portfolio WEB Page Development",
//         "skill": ["React", "Next.js", "Tailwind CSS", "Framer"],
//         "info": [
//           "포트폴리오 웹 페이지 개발 Ver.2",
//           "Parallax scroll 구현",
//           "인터렉티브 웹 디지안을 위한 설계"
//         ],
//         "link": [
//           "https://songsintroduce.vercel.app/main",
//           "https://github.com/Songchanheum/portfoliov2"
//         ]
//       }`,
//     `{
//         "color": "#8C8C8C",
//         "src": "dbv2.png",
//         "code": "P0001",
//         "due": "2022",
//         "title": "개발 블로그 V2",
//         "description": "Nextjs 이용한 Blog Page 개발",
//         "skill": ["React", "Next.js", "Tailwind CSS"],
//         "info": [
//           "개발 블로그 웹 페이지 개발 Ver.2",
//           "Tailwind CSS를 이용 Atomic Components 구조화 하여 페이지개발",
//           "MD 파일 이용한 블로그 내용 작성"
//         ],
//         "purpose": [
//           "MD > DB (Redis or Notion md) 이용하여 데이터 표출하도록 수정(진행중)",
//           "menu 추가 및 카테고리 설정",
//           "widget 이용하여 간편하게 사용하도록 수정"
//         ],
//         "link": [
//           "https://songsblog.vercel.app/",
//           "https://github.com/Songchanheum/songsblog"
//         ]
//       }`,
//     `{
//         "color": "#EFE8D3",
//         "src": "resume.png",
//         "code": "P0002",
//         "due": "2023",
//         "title": "RESUME",
//         "description": "간편 제출용 이력서 페이지 개발",
//         "skill": ["React", "Next.js", "Tailwind CSS", "Framer"],
//         "info": [
//           "외부 사이트 및 워드파일이 아닌 개별 이력서 개발",
//           "간단 이력을 보여주기 위해 제작",
//           "Next App Route 이용한 페이지 라우팅"
//         ],
//         "purpose": ["내용을 pdf로 저장할 수 있는 기능 개발 (진행중)"],
//         "link": ["https://songsintroduce.vercel.app/resume/"]
//       }`,
//     `{
//         "color": "#706D63",
//         "src": "pwpv1.png",
//         "code": "P0003",
//         "due": "2021",
//         "title": "포트폴리오 V1",
//         "skill": ["React", "Next.js", "Tailwind CSS", "Framer"],
//         "info": ["제작"]
//       }`,
//     `{
//         "color": "#000000",
//         "src": "aptinfo.png",
//         "code": "P0004",
//         "due": "2021",
//         "title": "아파트 홍보 페이지",
//         "skill": ["React", "Next.js", "Tailwind CSS", "Framer"],
//         "info": ["제작"]
//       }`,
//     `{
//         "color": "#8C8C8C",
//         "src": "mern.png",
//         "code": "P0005",
//         "due": "2021",
//         "title": "개발 블로그 V1",
//         "skill": ["React", "Next.js", "Tailwind CSS", "Framer"],
//         "info": ["제작"]
//       }`,
//     `{
//         "color": "#EFE8D3",
//         "src": "auto.png",
//         "code": "P0006",
//         "due": "2020",
//         "title": "코인 오토트레이딩 프로그램",
//         "skill": ["React", "Next.js", "Tailwind CSS", "Framer"],
//         "info": ["제작"]
//       }`,
//     `{
//         "color": "#706D63",
//         "src": "chat.png",
//         "code": "P0007",
//         "due": "2020",
//         "title": "Vue Chat Page",
//         "skill": ["React", "Next.js", "Tailwind CSS", "Framer"],
//         "info": ["제작"]
//       }`,
//     `{
//         "color": "#000000",
//         "src": "",
//         "code": "P0008",
//         "due": "2019",
//         "title": "OIPF STB WEB Page",
//         "skill": ["React", "Next.js", "Tailwind CSS", "Framer"],
//         "info": ["제작"]
//       }`,
//     `{
//         "color": "#8C8C8C",
//         "src": "check.png",
//         "code": "P0009",
//         "due": "2018",
//         "title": "출석체크 프로그램",
//         "skill": ["React", "Next.js", "Tailwind CSS", "Framer"],
//         "info": ["제작"]
//       }`
//   );
//   return NextResponse.json(messageKV);
// }

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { GrShare } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import { useMutationRequest } from "@/common/hooks/useRequest";
import { styled } from "styled-components";

function Comment({
  idKey,
  comment,
  date,
}: {
  idKey: string;
  comment: string;
  date: string;
}) {
  const idPassBy6 = idKey.substring(0, 6);
  const idPassBy1 = idKey.substring(0, 1);
  const passkey1HextoNum = parseInt(idPassBy1, 16) % 8;

  const CircleDiv = styled.div`
    background: linear-gradient(
      ${passkey1HextoNum * 45}deg,
      #dddddd 10%,
      #${idPassBy6} 70%,
      #e5e7eb 100%
    );
  `;
  return (
    <li className="flex items-center gap-4 my-3 mx-2">
      <CircleDiv className="w-8 h-8 rounded-full text-center leading-8 shrink-0 outline outline-3 outline-gray-400 outline-offset-2">
        {idPassBy1}
      </CircleDiv>
      <div className="flex flex-col">
        <p className="text-base text-gray-600 break-words">
          <span className="font-bold mr-2 text-black">{idPassBy6}</span>
          {comment}
        </p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </li>
  );
}
function CommentComponent({
  classes,
  code,
}: {
  classes: string;
  code: string;
}) {
  const messageRef = useRef<HTMLInputElement>(null);
  const [sendComment, setSendComment] = useState<string>("");
  const [comment, setComment] = useState<any>();
  const idKey = sessionStorage.getItem("idKey");

  const classNames =
    "w-full md:w-[35%] h-[60%] md:h-full flex flex-col flex-nowrap px-3 justify-between " +
    classes;
  const { data: postData, request: postRequest } = useMutationRequest<any>({
    requestPath: "comment",
    reactQueryKey: "COMMENT_ADD",
    requestMethod: "POST",
  });
  const { data: getData, request: getRequest } = useMutationRequest<any>({
    requestPath: "comment",
    reactQueryKey: "COMMENT_GET",
    requestMethod: "GET",
  });
  useEffect(() => {
    getRequest({ code });
  }, []);
  useEffect(() => {
    if (getData) {
      setComment(getData);
    }
  }, [getData]);
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.value = "";
      setSendComment("");
    }
    getRequest({ code });
  }, [postData]);

  function setInputComment(comment: string) {
    setSendComment(comment);
  }
  function sendChat() {
    if (sendComment === "") {
      return;
    }
    postRequest({ code, idKey, comment: sendComment });
  }
  return (
    <div className={classNames}>
      <ul className="h-[80%] overflow-auto">
        {comment && comment.length > 0 ? (
          comment.map((e: any, i: number) => {
            return (
              <Comment
                key={e.id + i}
                idKey={e.idKey}
                comment={e.comment}
                date={e.date ?? ""}
              />
            );
          })
        ) : (
          <></>
        )}
      </ul>
      <div className="w-full my-4">
        {/* <div>하트 코멘트</div> */}
        <div className="relative">
          <input
            type="text"
            ref={messageRef}
            className="w-full h-[52px] text-base rounded-xl bg-gray-50 p-4 pr-12"
            placeholder="댓글 달기..."
            onBlur={(e) => setInputComment(e.target.value)}
          ></input>
          <button
            onClick={() => sendChat()}
            className="absolute bottom-0 right-0 h-[52px] text-sm w-12 text-blue-800"
          >
            게시
          </button>
        </div>
      </div>
    </div>
  );
}
export function DevDetailPost({
  view,
  setView,
  title,
  image,
  desc,
  url,
  code,
}: {
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
  title?: string | null;
  image?: string | null;
  desc?: string | null;
  url?: string | null;
  code?: string | null;
}) {
  return (
    <>
      {view ? (
        <>
          <button
            className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-30 cursor-default overflow-hidden"
            onClick={() => setView(false)}
          ></button>
          <div className="fixed top-0 left-0 md:top-12 md:left-[calc(50%+35px)] 2xl:left-[calc(50%+122px)] md:translate-x-[-50%] w-full h-full md:w-[90%] md:h-[80%] 2xl:w-[75%] max-w-[1018px] bg-white z-50 rounded-xl">
            <header className="h-16 border-b-2 flex justify-end gap-4 items-center mb-8 px-3">
              <Link href={url ?? ""} target="_blank">
                <button className="text-lg bg-slate-200 rounded-xl px-4 h-10 flex justify-center items-center gap-2 hover:bg-slate-300">
                  <span>Read post</span> <GrShare />
                </button>
              </Link>
              <button
                className="p-2 rounded-full"
                onClick={() => setView(false)}
              >
                <MdClose size={30} />
              </button>
            </header>
            <div className="flex flex-col md:flex-row h-[calc(100%-110px)] box-border">
              <div className="flex flex-col flex-nowrap gap-10 max-w-[678px] md:w-[65%] w-full px-10 overflow-auto box-border">
                <h2 className="font-d2 font-bold text-3xl">{title}</h2>
                <p className="text-base">{desc}</p>
                {image ? (
                  <Image
                    src={image}
                    width={1000}
                    height={1000}
                    alt={title ?? ""}
                    unoptimized={true}
                    className="w-[100%] rounded-xl"
                  />
                ) : (
                  <></>
                )}
                <CommentComponent
                  classes={"md:hidden flex"}
                  code={code ?? ""}
                />
              </div>
              <CommentComponent classes={"md:flex hidden"} code={code ?? ""} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
export function DevPost(props: {
  key: string;
  title?: string | null;
  image?: string | null;
  desc?: string | null;
  url?: string | null;
  code?: string | null;
  showPostModal: (e: any) => void;
}) {
  return (
    <>
      <button
        key={props.key}
        className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 cursor-pointer"
        onClick={() => props.showPostModal({ ...props })}
      >
        {props?.image ? (
          <motion.img
            src={`${props?.image}`}
            alt={`${props?.title}`}
            className="object-cover h-full group-hover:grayscale"
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 0.2 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ opacity: 0.5 }}
          ></motion.img>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 0.2 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ opacity: 0.5 }}
          >
            {props?.title}
          </motion.div>
        )}
      </button>
    </>
  );
}

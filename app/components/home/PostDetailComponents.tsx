import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { GrShare } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

export function DevDetailPost({
  view,
  setView,
  title,
  image,
  desc,
  url,
}: {
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
  title?: string | null;
  image?: string | null;
  desc?: string | null;
  url?: string | null;
}) {
  function CommentComponent({ visible }: { visible: string }) {
    const classNames = "h-full " + visible;
    return (
      <div className={classNames}>
        comment
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    );
  }
  return (
    <>
      {view ? (
        <>
          <button
            className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-30 cursor-default overflow-hidden"
            onClick={() => setView(false)}
          ></button>
          <div className="fixed top-0 left-0 md:top-12 md:left-[calc(50%+35px)] 2xl:left-[calc(50%+122px)] md:translate-x-[-50%] w-full h-full md:w-[90%] md:h-[80%] 2xl:w-[75%] max-w-[1018px] bg-white z-40 rounded-xl">
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
                <CommentComponent visible={"md:hidden block"} />
              </div>
              <CommentComponent visible={"md:block hidden"} />
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

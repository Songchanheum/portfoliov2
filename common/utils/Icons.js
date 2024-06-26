import Image from "next/image";
import { BsArrowDownCircleFill, BsGithub, BsInstagram } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";
export const CircularText = ({ className, ...rest }) => (
  <Image
    className={className}
    src="/images/main/bottom.png"
    alt="img"
    fill
    {...rest}
  ></Image>
);
export const DownArrow = ({ ...rest }) => <BsArrowDownCircleFill {...rest} />;
export const Github = ({ ...rest }) => <BsGithub {...rest} />;
export const Instagram = ({ size, ...rest }) => (
  <div className="w-fit bg-gradient-to-bl to-yellow-500 via-pink-500 from-purple-500 p-2 rounded-2xl ">
    <BsInstagram fill="white" size={size} {...rest} />
  </div>
);
export const Gmail = ({ size, ...rest }) => (
  <Image
    src="/images/main/gmail.png"
    alt="img"
    width={size}
    height={size}
    {...rest}
  ></Image>
);
export const Programmers = ({ size, ...rest }) => (
  <Image
    src="/images/main/programmers.png"
    alt="img"
    width={size}
    height={size}
    {...rest}
  ></Image>
);
export const Me = ({ size, ...rest }) => (
  <Image
    src="/images/main/main.png"
    alt="img"
    width={size}
    height={size}
    {...rest}
  ></Image>
);
export const ChatIcon = ({ size, ...rest }) => (
  <Image
    src="/images/icon/ico_message.svg"
    alt="img"
    width={size}
    height={size}
    {...rest}
  ></Image>
);
export const KeyIcon = ({ type, children }) => {
  return (
    <>
      {type === "text" ? (
        <span
          className={
            "rounded-xl bg-gray-100 border-2 border-black w-fit py-1 px-2 text-sm"
          }
        >
          {children}
        </span>
      ) : (
        <div
          className={
            "rounded-xl bg-gray-100 border-2 border-black w-fit p-1 inline-block"
          }
        >
          {children}
        </div>
      )}
    </>
  );
};

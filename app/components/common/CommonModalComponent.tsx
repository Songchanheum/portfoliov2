import { useModalDefaultSetting } from "@/common/hooks/useModalDefaultSetting";
import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface ModalType {
  type: "INFO" | "ERROR" | "CONFIRM";
  title: string;
  onSuccess: () => void;
  onCancel?: () => void;
  toggle: () => void;
  children: ReactNode;
}

const CommonModalComponent = ({
  type,
  title,
  onSuccess,
  onCancel,
  toggle,
  children,
}: ModalType) => {
  useModalDefaultSetting(toggle);
  return (
    <>
      <button
        className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-30 cursor-default"
        onClick={toggle}
      ></button>
      <div className="fixed top-[50%] left-[50%] md:left-[calc(50%+35px)] 2xl:left-[calc(50%+122px)] translate-x-[-50%] translate-y-[-50%] w-full h-fit md:w-[90%] 2xl:w-[75%] max-w-[600px] bg-white z-50 rounded-xl">
        <header className="h-16 border-b-2 flex justify-between gap-4 items-center px-3">
          <p className="p-2 font-bold">{title}</p>
          <button className="p-2 rounded-full" onClick={toggle}>
            <MdClose size={30} />
          </button>
        </header>
        <main className="p-8 leading-10">{children}</main>
        {type === "INFO" ? (
          <></>
        ) : (
          <footer className="h-16 border-t-2 flex justify-end px-4 gap-4">
            <button
              onClick={() => {
                onSuccess();
                toggle();
              }}
            >
              OK
            </button>
            <button
              onClick={() => {
                if (onCancel) {
                  onCancel();
                }
                toggle();
              }}
            >
              Cancel
            </button>
          </footer>
        )}
      </div>
    </>
  );
};

export default CommonModalComponent;

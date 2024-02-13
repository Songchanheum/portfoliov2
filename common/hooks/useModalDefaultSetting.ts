import { useEffect } from "react";

export const useModalDefaultSetting = (_toggle: () => void) => {
  useEffect(() => {
    history.pushState(null, "", location.href);
    window.addEventListener("popstate", _toggle);
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      window.removeEventListener("popstate", _toggle);
    };
  }, []);
};

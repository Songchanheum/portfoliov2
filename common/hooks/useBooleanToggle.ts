import { useCallback, useState } from "react";

export const useBooleanToggle = () => {
  const [data, setData] = useState<boolean>(false);

  const initSetting = useCallback((init: boolean) => setData, []);

  const toggle = useCallback(() => {
    setData((x) => !x);
  }, []);

  return { data, init: (e: boolean) => initSetting(e), toggle };
};

import { getURL } from "@/common/hooks/useSearchParam";
import { RequestMethodType } from "@/common/types";

export async function requestHandler<T>(paramData: {
  param?: T;
  path: string;
  method: RequestMethodType;
}) {
  const { path, param, method } = paramData;
  let url = "";
  const options: { method?: RequestMethodType; body?: string } = { method };

  if (method === "GET") {
    url = getURL(`/api/${path}`, param);
  } else {
    url = `/api/${path}`;
    options.body = JSON.stringify(param);
  }

  const response = await fetch(url, options);

  let resData;

  if (
    (response.headers?.get("content-type") ?? "")?.includes("application/json")
  ) {
    resData = await response.json();
  } else if ((response.headers?.get("content-type") ?? "")?.includes("text")) {
    resData = await response.text();
  } else if (
    (response.headers?.get("content-type") ?? "")?.includes(
      "application/octet-stream"
    )
  ) {
    resData = await response.blob();
  } else {
    resData = "unknown content-type";
  }

  return resData;
}

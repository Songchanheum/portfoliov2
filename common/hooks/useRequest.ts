import { useRef } from "react";

import { requestHandler } from "@/common/services/clientToApiRouteModule";

import {
  Params,
  UseGetRequestProps,
  UseGetRequestReturn,
  UseMutationRequestProps,
  UseMutationRequestReturn,
} from "../types";
import { useMutation, useQuery } from "@tanstack/react-query";

type RouteApiErrorRes = {
  routeApiResultCode?: string;
  routeApiResultMessage?: string;
  routeApiResultData?: Record<string, any>;
};

export function useGetRequest<T>({
  reactQueryKey,
  requestAction = requestHandler,
  requestPath,
  autoStatusHandling = true,
}: UseGetRequestProps): UseGetRequestReturn<T & RouteApiErrorRes> {
  const params = useRef<Params>(null);

  const {
    data,
    error,
    isFetching,
    isLoading,
    isSuccess,
    isError,
    refetch,
    ...rest
  } = useQuery<any, any, T & RouteApiErrorRes, any>({
    queryKey: [reactQueryKey],
    queryFn: () => (params.current ? requestAction(params.current) : null),
    refetchOnWindowFocus: false,
    enabled: false,
    retry: false,
    onSuccess: (value: T) => {},
    // cacheTime: 0,
  });

  return {
    ...rest,
    data,
    error,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    refetch,
    request: (values) => {
      params.current = requestPath
        ? { param: values ?? {}, path: requestPath, method: "GET" }
        : values ?? {};
      refetch();
    },
  };
}

export function useMutationRequest<T>({
  reactQueryKey,
  requestAction = requestHandler,
  requestPath,
  requestMethod,
  autoStatusHandling = true,
}: UseMutationRequestProps): UseMutationRequestReturn<T> {
  const { data, error, isLoading, isError, isSuccess, mutate, ...rest } =
    useMutation<T, any, any, any>({
      mutationKey: [reactQueryKey],
      mutationFn: requestAction,
      onError: (value: Error) => {},
      onSuccess: (value: T) => {},
    });

  return {
    ...rest,
    data,
    error,
    isLoading,
    isSuccess,
    isError,
    request: (values) => {
      mutate(
        requestPath
          ? { param: values, path: requestPath, method: requestMethod }
          : values
      );
    },
  };
}

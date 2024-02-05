import { MutationObserverBaseResult, QueryFunction, QueryObserverBaseResult } from '@tanstack/react-query';

export type Params = Record<string, any> | null;

export type UseGetRequestProps = {
  reactQueryKey: string;
  requestAction?: (params?: any) => any;
  requestPath?: string;
  autoStatusHandling?: boolean;
};

export type RequestMethodType = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export type UseMutationRequestProps = {
  reactQueryKey: string;
  requestAction?: (params?: any) => any;
  requestPath?: string;
  requestMethod?: RequestMethodType;
  autoStatusHandling?: boolean;
};

// export type UseGetRequestReturn = QueryObserverBaseResult & {
//   request: (values: any) => void;
// };

export type UseMutationRequestReturn<DataType> = Omit<MutationObserverBaseResult<DataType>, 'mutate'> & {
  request: (values?: any) => void;
};

export type UseGetRequestReturn<DataType> = QueryObserverBaseResult<DataType> & {
  request: (values?: any) => void;
};

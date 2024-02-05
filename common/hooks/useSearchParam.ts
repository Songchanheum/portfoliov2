import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const isNullOrUndefined = (value: any): boolean => value === null || value === undefined;

const decode = (param: string) => {
  try {
    return JSON.parse(decodeURIComponent(param));
  } catch {
    return decodeURIComponent(param);
  }
};

const toQuery = (paramData: any): string => {
  const params = new URLSearchParams(paramData);

  return params.toString();
};

export const getURL = (pathname: string, paramData: any): string => {
  let url = '';
  const query = toQuery(paramData);

  if (pathname) url += pathname;

  if (query) {
    url += '?';
    url += query;
  }

  return url;
};

export const encodeParam = (param: Record<string, any>) => {
  const compParam: Record<string, any> = {};

  Object.keys(param).forEach((e: string) => {
    if (!isNullOrUndefined(param[e])) {
      compParam[e] = encodeURIComponent(JSON.stringify(param[e]));
    }
  });

  return compParam;
};

const setPageOne = (searchParam: URLSearchParams) => {
  searchParam.set('page', encodeURIComponent(JSON.stringify('1')));
};

// TODO: any type
interface SearchParam {
  replace: () => void;
  push: () => void;
  reset: () => void;
  initReset: (param: any) => void;
  has: (name: string) => boolean;
  get: (name: string) => string | null;
  getData: (name: string) => any;
  set: (name: string, value: any) => SearchParam;
  delete: (name: string) => SearchParam;
  toString: () => string;
}

export function useSearchParam(): SearchParam {
  const pathname = usePathname();
  const searchParams = new URLSearchParams(useSearchParams().toString());
  const router = useRouter();

  return {
    replace: () => {
      router.replace(getURL(pathname, searchParams.toString()));
    },
    push: () => {
      router.push(getURL(pathname, searchParams.toString()));
    },
    reset: () => {
      // [TODO]: initial params
      router.push(pathname);
    },
    initReset: (param: any) => {
      router.push(getURL(pathname, param));
    },
    has(name: string) {
      return searchParams.has(name);
    },
    getData(name: string) {
      return decode(searchParams.get(name) || '');
    },
    get(name: string) {
      return searchParams.get(name);
    },
    set<T>(name: string, value: T) {
      if (!isNullOrUndefined(value)) {
        searchParams.set(name, encodeURIComponent(JSON.stringify(value)));
      }

      return this;
    },
    delete(name: string) {
      searchParams.delete(name);

      return this;
    },
  };
}

interface FilterSearchParam {
  setPush: (value: any) => void;
  setReplace: (value: any) => void;
  reset: () => void;
  getData: (name: string) => any;
  getFilterData: (name?: string) => any;
  toString: () => string;
}

/*
 * filter 전용 searchParam
 * getData 기준은 searchParam 기준 그외 전부 filter 기준
 */
export function useFilterSearchParam(): FilterSearchParam {
  const pathname = usePathname();
  const searchParams = new URLSearchParams(useSearchParams().toString());
  const router = useRouter();

  return {
    // value(record) set filter, page param set 1(init) and router push
    setPush(value) {
      if (!isNullOrUndefined(value)) {
        const filter = this.getData('filter');

        setPageOne(searchParams);
        searchParams.set('filter', encodeURIComponent(JSON.stringify({ ...filter, ...value })));
      }

      router.push(getURL(pathname, searchParams.toString()));
    },
    // value(record) set filter, page param set 1(init) and router replace (not append history....)
    setReplace(value) {
      if (!isNullOrUndefined(value)) {
        const filter = this.getData('filter');

        setPageOne(searchParams);
        searchParams.set('filter', encodeURIComponent(JSON.stringify({ ...filter, ...value })));
      }

      router.replace(getURL(pathname, searchParams.toString()));
    },
    // filter value delete, page set 1 (init) >>> 초기화
    reset: () => {
      searchParams.delete('filter');
      setPageOne(searchParams);
      router.push(getURL(pathname, searchParams.toString()));
    },
    // searchParam 기준으로 get data
    // filter 기준이 아니기 때문에 searchParam.get('filter')로 filter 데이터 가져올 수 있음
    getData(name) {
      return decode(searchParams.get(name) || '');
    },
    //get('filter')하기 귀찮아서 추가
    getFilterData(name) {
      const data: Record<string, any> = decode(searchParams.get('filter') || '');

      return name === undefined ? data : data[name];
    },
  };
}

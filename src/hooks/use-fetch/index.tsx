import { useEffect, useState } from "react";

type Props<T> = {
  fetchFunction: () => Promise<T | void>;
  deps?: any[];
  enabled?: boolean;
};

export const useFetch = <T,>(props: Props<T>) => {
  const { fetchFunction, deps = [], enabled = true } = props;

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (!enabled) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const data = (await fetchFunction()) as T;
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [...deps]);

  return {
    data,
    isLoading,
    refetch: fetchData,
  };
};

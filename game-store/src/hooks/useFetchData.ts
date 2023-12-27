import { useEffect, useState } from "react";
import api from "../services/api";
import { CanceledError } from "axios";

interface fetchData<T> {
  count: number;
  results: T[];
}
const useFetchData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    api
      .get<fetchData<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })

      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [endpoint]);
  return { data, error, isLoading };
};

export default useFetchData;

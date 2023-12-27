import { useEffect, useState } from "react";
import api from "../services/api";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface genreData {
  count: number;
  results: Genre[];
}
const useFetchGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    api
      .get<genreData>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setIsLoading(false);
      })

      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useFetchGenres;
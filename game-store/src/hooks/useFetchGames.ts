import { useEffect, useState } from "react";
import api from "../services/api";
import { CanceledError } from "axios";
export interface Game {
  id: number;
  name: string;
  background_image: string;
}
interface gameData {
  count: number;
  results: Game[];
}
const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    api
      .get<gameData>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useFetchGames;
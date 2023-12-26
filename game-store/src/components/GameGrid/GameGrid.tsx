import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Text } from "@chakra-ui/react";
interface Game {
  id: number;
  name: string;
}
interface gameData {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<gameData>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
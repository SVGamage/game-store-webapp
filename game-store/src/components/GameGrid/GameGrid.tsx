import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../../hooks/useFetchGames";
import GameCard from "../GameCard/GameCard";
const GameGrid = () => {
  const { games, error } = useFetchGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        margin={5}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

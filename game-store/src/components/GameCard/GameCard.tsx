import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useFetchGames";
import PlatformIconRenderer from "../PlatformIconRenderer/PlatformIconRenderer";
import GameScore from "../GameScore/GameScore";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconRenderer
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize="14px"
      paddingX="8px"
      borderRadius="4px"
      colorScheme={score >= 75 ? "green" : score >= 60 ? "yellow" : "red"}
    >
      {score}
    </Badge>
  );
};

export default GameScore;

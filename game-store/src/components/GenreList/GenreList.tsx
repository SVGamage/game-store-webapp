import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useFetchGenres, { Genre } from "../../hooks/useFetchGenres";
import GenreSkeleton from "../GenreSkeleton/GenreSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading } = useFetchGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <List marginTop={4}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY="5px">
            <GenreSkeleton />
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack spacing={2}>
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

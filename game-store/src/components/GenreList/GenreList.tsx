import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useFetchGenres from "../../hooks/useFetchGenres";
import GenreSkeleton from "../GenreSkeleton/GenreSkeleton";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

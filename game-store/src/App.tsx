import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useFetchGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"} paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

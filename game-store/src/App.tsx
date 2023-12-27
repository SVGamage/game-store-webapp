import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import GameGrid from "./components/GameGrid/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          aside
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

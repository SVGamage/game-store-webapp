import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";

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
        <GridItem pl="2" bg="green.300" area={"aside"}>
          aside
        </GridItem>
      </Show>
      <GridItem pl="2" bg="blue.300" area={"main"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;

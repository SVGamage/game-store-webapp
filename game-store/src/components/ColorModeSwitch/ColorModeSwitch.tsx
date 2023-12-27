import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>{colorMode === "dark" ? <MdDarkMode /> : <MdLightMode />}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;

import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assests/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

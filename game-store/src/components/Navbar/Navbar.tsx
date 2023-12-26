import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assests/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} />
    </HStack>
  );
};

export default Navbar;

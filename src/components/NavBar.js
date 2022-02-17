import { useState } from "react";
import { Box, CloseButton, Flex, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from "../Logo";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prev => !prev);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="40px"
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseButton /> : <GiHamburgerMenu />}
    </Box>
  );
};

const NavLinkStyles = ({isActive}) => {
  return {
    color: isActive ? 'teal' : 'inherit',
    textDecoration: isActive ? 'none': 'underline'
  }
}


const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={6}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavLink style={NavLinkStyles} to="/">Home</NavLink>
        <NavLink style={NavLinkStyles} to="/speakers">Speakers</NavLink>
        <NavLink style={NavLinkStyles} to="/schedule">Schedule</NavLink> 
        <NavLink style={NavLinkStyles} to="/venue">Venue</NavLink>
        <NavLink style={NavLinkStyles} to="/sponsors">Sponsors</NavLink> 
        <ColorModeSwitcher />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
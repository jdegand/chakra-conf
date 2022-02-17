/*
import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

*/
import { ChakraProvider, HStack, theme, Flex } from '@chakra-ui/react';
//import { ColorModeSwitcher } from './ColorModeSwitcher';
//import { Logo } from './Logo';

import { Outlet, Link} from "react-router-dom";
import NavBar from './components/NavBar';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <NavBar />
        
        <Outlet />
        
        <HStack spacing={10} mt={8}>
          <Link to="/conduct">Conduct</Link> 
          <p>2022 copyright</p>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
}

/*
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={4}
            p={8}
            lineHeight="40px"
          >
          <HStack spacing={8}>
            <Logo h="40px" pointerEvents="none" />
            <Text>Chakra-Con</Text>
          </HStack>
          <Flex>
            <HStack spacing={8}>
            <Link to="/">Home</Link>
            <Link to="/speakers">Speakers</Link>
            <Link to="/schedule">Schedule</Link> 
            <Link to="/venue">Venue</Link>
            <Link to="/sponsors">Sponsors</Link> 
            <ColorModeSwitcher />
            </HStack>
          </Flex>
        </Flex>
        */
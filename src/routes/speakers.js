import {useEffect, useState} from 'react';
import { Box, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { RiGithubFill } from "react-icons/ri";

export default function Speakers() {

  const [speakers, setSpeakers] = useState([]);

  useEffect(()=> {
    fetch("https://randomuser.me/api/?results=12")
    .then(response => response.json())
    .then(data => setSpeakers(data.results))
  }, [])

    return (
      <Container maxW='container.xl'>
        <Heading as="h1" mb={8}>Speakers</Heading>
        <SimpleGrid minChildWidth='200px' spacing='40px' mb={8}>

          {speakers.map(speaker => (
          <Box key={speaker.login.uuid}>
          <Box>
            <Image src={speaker.picture.large} alt={`${speaker.name.first} ${speaker.name.last}`} />
          </Box>
          <Box>
            <Heading as="h2" size="md">{`${speaker.name.first} ${speaker.name.last}`}</Heading>
            <Flex align="center"><RiGithubFill size="30px" /><Text>{speaker.login.username}</Text></Flex> 
          </Box>
          </Box>
        ))}
      </SimpleGrid>
      </Container>
    );
}
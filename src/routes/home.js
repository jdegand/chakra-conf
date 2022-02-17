import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate()
  
    return (
      <Container maxW='container.lg' minH="70vh">
        <VStack spacing={8} align="left">
          <Heading as="h1" fontSize="4xl">
            See the future of Chakra at Chakra-Con 2022 in Dubai!
          </Heading>
          <Heading as="h2" fontSize="5xl">
            March 19-20
          </Heading>
          <Text>Join us for a 2 day conference where experts break down Chakra's best features and design patterns. You'll hear from 12 members of our ever-expanding community.</Text>
          <Text>We'll recap Chakra's journey to now and glimpse its future.</Text>
          <Text>Reserve you place now and get ready to meet some of the most important and influential members of the Chakra community.</Text>
          <Button colorScheme='teal' size='lg' maxW="200px" onClick={()=> navigate('form')}>
            Reserve Now
          </Button>
      </VStack>
      </Container>
    );
}
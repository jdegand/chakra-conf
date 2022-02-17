import { Box, Heading, List, ListItem, ListIcon, Tooltip } from '@chakra-ui/react'

import { RiMedal2Line } from 'react-icons/ri'

export default function Sponsors() {
    return (
        <Box minH="70vh">
        <Heading as="h1" mb={8}>Sponsors of Chakra and Chakra-Con 2022</Heading>        
          <List spacing={3}>
            <ListItem>
              <Tooltip label="Platinum"><span><ListIcon fontSize='4xl' as={RiMedal2Line} color='#E5E4E2' /></span></Tooltip>
              Chakra UI Pro
            </ListItem>
            <ListItem>
            <Tooltip label="Gold"><span><ListIcon fontSize='4xl' as={RiMedal2Line} color='#FFD700' /></span></Tooltip>
              Scribe, Trustpage
            </ListItem>
            <ListItem>
            <Tooltip label="Silver"><span><ListIcon fontSize='4xl' as={RiMedal2Line} color='silver' /></span></Tooltip>
              BRINKL, Usuability Hub, Echobind, IFIXIT, Touchless
            </ListItem>
            <ListItem>
            <Tooltip label="Bronze"><span><ListIcon fontSize='4xl' as={RiMedal2Line} color='#CD7F32' /></span></Tooltip>
              Shogun Labs, Lattice
            </ListItem>
          </List>
        </Box>
    );
  }
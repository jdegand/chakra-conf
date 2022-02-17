import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//import { Icon } from "leaflet";
import { Box, Link, Stack, Heading, Text } from "@chakra-ui/react";

export default function Venue() {

    return (
      <Stack       
        direction={["column", "column", "row", "row"]}  
        minH="70vh">
        <Box minW="400px" mr={8}>
          <MapContainer style={{ height: '400px', width: '400px'}} center={[25.204849, 55.270782]} zoom={9} scrollWheelZoom={false}>
            
          <TileLayer
              url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          <Marker position={[24.961339688644387, 55.15122309089239]}>
            <Popup>
                Rove Hotel
            </Popup>
          </Marker>
          </MapContainer>
        </Box>
        <Stack spacing={8} maxW="60vh" textAlign="left">
          <Heading as="h1">Rove Expo 2020 Hotel</Heading>
          <Text>Regroup, recharge and re-think the future with all of your Rove favourites under one roof at Rove Expo 2020 Hotel. Find yourself at the epicentre in the main square for the perfect launchpad to 192 country pavilions, or as far as your feet will take you.</Text>

          <Text>For adventures further afield, there is a metro station linking you to The Dubai Marina, JBR beach, The Dubai Mall and beyond.</Text>
          <Link color='teal.500' href="https://www.rovehotels.com/en/" isExternal>Book Here</Link>
        </Stack>

      </Stack>
    );
  }
import { Link, VStack, Text, Heading } from "@chakra-ui/react";

export default function Conduct() {
    return (
      <VStack spacing={4} align="left" minH="70vh">
        <Heading as='h1' size='3xl' align="center">Code of Conduct</Heading>
        <Text>Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</Text>
        <Text>Participants asked to stop any harassing behavior are expected to comply immediately.</Text>
        <Text>Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment.</Text>
        <Text>If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.</Text>
        <Text>If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they'll be wearing branded clothing and/or badges.</Text>
        <Text>Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.</Text>
        <Text>We expect participants to follow these rules at conference and workshop venues and conference-related social events.</Text>
        <Text>
          This is borrowed from {" "}
          <Link color='teal.500' href='https://confcodeofconduct.com/' isExternal>
          ConfCodeofConduct.com
          </Link>
        </Text>
      </VStack>
    );
}
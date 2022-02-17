import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react'

export default function Schedule(){
    return(
        <>
        <Table size='lg' colorScheme='teal' mb={8}>
        <TableCaption>End of Conference</TableCaption>
        <Thead>
            <Tr>
            <Th>Start Time</Th>
            <Th>Topic</Th>
            <Th>Location</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
            <Td>9:00 - 10:30</Td>
            <Td>Opening Keynote</Td>
            <Td>Conference Room 3 - 36th Floor</Td>
            </Tr>
            <Tr>
            <Td>10:45 - 11:45</Td>
            <Td>Building a Reusable Chakra Component</Td>
            <Td>Conference Room 3 - 36th Floor</Td>
            </Tr>
            <Tr>
            <Td>12:00 - 1:00</Td>
            <Td>Theming Api</Td>
            <Td>Conference Room 3 - 36th Floor</Td>
            </Tr>
            <Tr>
            <Td>2:00 - 3:30</Td>
            <Td>Runtime Limitations</Td>
            <Td>Conference Room 3 - 36th Floor</Td>
            </Tr>
            <Tr>
            <Td>4:00 - 5:00</Td>
            <Td>Converting to TypeScript</Td>
            <Td>Conference Room 3 - 36th Floor</Td>
            </Tr>
            <Tr>
            <Td></Td>
            <Td>End of Day 1</Td>
            <Td></Td>
            </Tr>
            <Tr>
            <Td>9:00 - 10:30</Td>
            <Td>Storybook & Chakra</Td>
            <Td>Conference Room 5 - 38th Floor</Td>
            </Tr>
            <Tr>
            <Td>10:45 - 11:45</Td>
            <Td>RTL Support and Design</Td>
            <Td>Conference Room 5 - 38th Floor</Td>
            </Tr>
            <Tr>
            <Td>12:00 - 1:00</Td>
            <Td>Chakra Hooks</Td>
            <Td>Conference Room 5 - 38th Floor</Td>
            </Tr>
            <Tr>
            <Td>2:00 - 3:45</Td>
            <Td>Chakra Templates</Td>
            <Td>Conference Room 5 - 38th Floor</Td>
            </Tr>
            <Tr>
            <Td>4:00 - 5:00</Td>
            <Td>Chakra Showcase</Td>
            <Td>Conference Room 5 - 38th Floor</Td>
            </Tr>
            <Tr>
            <Td>5:15 - 6:00</Td>
            <Td>Closing Keynote</Td>
            <Td>Conference Room 5 - 38th Floor</Td>
            </Tr>
        </Tbody>
        </Table>
        </>
    )
}
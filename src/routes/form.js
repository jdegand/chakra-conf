import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function Form(){

    const navigate = useNavigate();

    // make inputs controlled 
    // useState with object 
    // add name property
    // handleChange that matches e.target.name: e.target.value 

    return (
    <Stack spacing={3} minH="70vh">
        <FormControl isRequired>
            <FormLabel htmlFor='firstName'>First Name</FormLabel>
            <Input id='firstName' type='text' />
        </FormControl>
        <FormControl isRequired>
            <FormLabel htmlFor='lastName'>Last Name</FormLabel>
            <Input id='lastName' type='text' />
        </FormControl>
        <FormControl isRequired>
            <FormLabel htmlFor="email">Business Email</FormLabel>
            <InputGroup>
                <InputLeftAddon children='https://' />
                <Input id="email" type="email" />
                <InputRightAddon children='.com' />
            </InputGroup>
        </FormControl>
        <FormControl isRequired>
            <FormLabel htmlFor='companyName'>Company Name</FormLabel>
            <Input id='companyName' type='text' />
        </FormControl>
        <Button onClick={()=> navigate("/reserved", { replace: true })}>Claim my Spot</Button>
      </Stack>
    )
}

/*
    return (
    <Stack spacing={3} minH="70vh">
        <Input placeholder='First Name' />
        <Input placeholder='Last Name' />
        <InputGroup>
            <InputLeftAddon children='https://' />
            <Input placeholder='Business Email'  />
            <InputRightAddon children='.com' />
        </InputGroup>
        <Input placeholder='Company Name' />
        <Button onClick={()=> navigate("/reserved", { replace: true })}>Claim my Spot</Button>
      </Stack>
    )
*/
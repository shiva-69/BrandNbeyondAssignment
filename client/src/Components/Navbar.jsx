import { Box, Flex, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Navbar = () => {
    return <>
        <Flex ml="15%" mr="15%" mt="1%" minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='lg'>My App</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
            <Button ><Link to={"/register"}>Sign Up</Link></Button>
            <Button ><Link to={"/login"}>Login</Link></Button>
            <Button ><Link to={"/admin/login"}>Login As Admin</Link></Button>
            </ButtonGroup>
        </Flex>
    </>
}
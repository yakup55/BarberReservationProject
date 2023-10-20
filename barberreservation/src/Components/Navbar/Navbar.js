import { Box, Button, ButtonGroup, Flex, Heading, IconButton, Spacer, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignUp from '../SignUp/SignUp';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Login from '../Login/Login';

function Navbar() {
  const navigate=useNavigate();
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div>
        <Flex bg="" mt={2} minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading onClick={()=>navigate("/")} colorScheme='cyan' size='lg'>Berber Mahir</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='1' marginRight={5}>
    <IconButton
          aria-label="toggle theme"
          rounded="full"
          size="lg"
          position="absolute"
          bottom={4}
        right={10}
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        />
    <Button colorScheme='teal' ><SignUp></SignUp></Button>
    <Button colorScheme='teal' ><Login></Login></Button>
    
  </ButtonGroup>
</Flex>
    </div>
  )
}
export default Navbar;
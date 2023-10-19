import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignUp from '../SignUp/SignUp';

function Navbar() {
  const navigate=useNavigate();
  return (
    <div>
        <Flex bg="" mt={2} minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading onClick={()=>navigate("/")} colorScheme='cyan' size='lg'>Berber Mahir</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal' ><SignUp></SignUp></Button>
    <Button colorScheme='teal' onClick={()=>navigate("/login")} >Giriş Yap</Button>
  </ButtonGroup>
</Flex>
    </div>
  )
}
export default Navbar;
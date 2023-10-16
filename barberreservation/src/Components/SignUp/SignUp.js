import { PhoneIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Input, InputGroup, InputLeftElement, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'

 function SignUp() {
  return (
    <Container>
      <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>
  <Box  height='60px'>
  <Input  placeholder='Adınız' />
  </Box>
  <Box  height='60px'>
  <Input  placeholder='Soyadınız' />
  </Box>
  <Box  height='60px'>
  <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <PhoneIcon color='gray.300' />
    </InputLeftElement>
    <Input  type='tel' placeholder='Telefon Numaranız' />
  </InputGroup>
</Stack>
  </Box>
  <Box  height='80px'>
    <Button>Kayıt Ol</Button>
  </Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
    </Container>
  )
}
export default SignUp

import { Box, Button, Container, Input, InputGroup, InputLeftElement, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react'
import { PhoneIcon } from '@chakra-ui/icons'
 function Login() {
  return (
    <Container mt={150}>
      <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>
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
    <Button textAlign={'center'}>Giriş Yap</Button>
  </Box>
</SimpleGrid>
    </Container>
  )
}
export default Login;
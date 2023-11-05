import {  Box, Button, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Page404() {
    const navigate=useNavigate();
  return (
   <Container mt={20} maxW={1000}>
     <SimpleGrid columns={2} spacing={10}>
    <Box  height='80px'>
    <Image src='https://st4.depositphotos.com/1001070/20123/v/450/depositphotos_201234330-stock-illustration-the-stop-hand-sign-flat.jpg' alt='Dan Abramov' />
    </Box>
    <Box height='100px'   mt={20}>
      <Heading textAlign={'center'} as='h2' size='3xl' noOfLines={1} textColor={"purple"}>Yetkili Değilsiniz</Heading>
      <Heading mt={3} textAlign={'center'} as='h1' size='4xl'  noOfLines={1} textColor={"red"}>403</Heading>
      <Text fontSize='2xl' width={700} mt={5}  textColor={"purple"}>Bu Sayfayı Görmeye Yetkiniz Bulunmamaktadır Lüften Ana Sayfaya Dönün</Text>
      <Button margin="auto" display="flex" mt={5} onClick={()=>navigate("/")} colorScheme='red'>Ana Sayfaya Dönün</Button>
    </Box>
  </SimpleGrid>
   </Container>
  )
}

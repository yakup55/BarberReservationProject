import { Avatar, Badge, Box, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList2 } from "../../Redux/actions/barberActions";

export default function Barber() {
  const dispacth = useDispatch();
  const { barbers } = useSelector((state) => state.barber);
  useEffect(() => {
    dispacth(getList2());
  }, [dispacth,barbers]);
 
  return (
    <Container maxW={1000}>
        <Heading mb={10} textAlign={"center"}>Berberlerimiz</Heading>
      <SimpleGrid columns={3} spacing={10}>
        {barbers.map((barber)=>(
   <Box  height="80px">
   <Flex>
<Avatar src={`${barber.image}`}/>
<Box ml='3'>
<Text fontWeight='bold'>
{barber.name} {barber.surName}
 <Badge  ml='1' colorScheme='green'>
{barber.experience} Yıl Deneyimli
 </Badge>
</Text>
<Text fontSize='sm'>{barber.phoneNumber}</Text>
</Box>
</Flex>
   </Box>
        ))}
     
      </SimpleGrid>
    </Container>
  );
}

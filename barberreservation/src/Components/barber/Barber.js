import {
  Avatar,
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList2 } from "../../Redux/actions/barberActions";
import { PhoneIcon } from "@chakra-ui/icons";

export default function Barber() {
  const dispacth = useDispatch();
  const { barbers } = useSelector((state) => state.barber);
  useEffect(() => {
    dispacth(getList2());
  }, [dispacth, barbers]);

  return (
    <Container maxW={1000}>
      <Heading
        mb={10}
        textAlign={"center"}
        fontSize={"2xl"}
        fontStyle={"italic"}
      >
        Berberlerimiz
      </Heading>
      <SimpleGrid columns={3} spacing={10}>
        {barbers.map((barber) => (
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                borderRadius="full"
                boxSize="150px"
                src={`${barber.image}`}
                alt={`${barber.name}`}
              />
            </div>

            <CardHeader>
              <Heading textAlign={"center"} fontSize={"2xl"} fontStyle={"italic"}>
                {barber.name} {barber.surName}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign={"center"}>

              <Badge variant="outline" colorScheme="green">
                  {barber.experience} Yıl Deneyimli
                </Badge>
              </Text>
                
              <Text textAlign={"center"}>

<Badge variant="outline" colorScheme="green">
   <PhoneIcon></PhoneIcon> {barber.phoneNumber}
  </Badge>
</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../Redux/actions/aboutActions";

export default function About() {
  const dispacth = useDispatch();
  const { abouts } = useSelector((state) => state.about);
  useEffect(() => {
    dispacth(getList());
  }, [dispacth]);
  console.log(abouts)
  return (
    <Container maxW={1000}>
      <Heading textAlign={"center"}>Berberlerimiz</Heading>
      <SimpleGrid columns={3} spacing={10}>
        {abouts.map((about)=>(
          <Box  mt={10} height="250px">
          <Card maxW="sm">
            <CardBody>
              <Image
                src={`${about.image}`}
                alt={`${about.name}`}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{`${about.name}`}</Heading>
                <Text>
                {`${about.description}`}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Box>
        ))}
        
      </SimpleGrid>
    </Container>
  );
}

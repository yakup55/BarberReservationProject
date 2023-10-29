import {
  AspectRatio,
  Card,
  CardBody,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../Redux/actions/aboutActions";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Iframe from "react-iframe";
export default function About() {
  const dispacth = useDispatch();
  const { abouts } = useSelector((state) => state.about);
  useEffect(() => {
    dispacth(getList());
  }, [dispacth]);

  return (
    <Container maxW={1000} mt={10} mb={10}>
      <SimpleGrid columns={1} spacing={10}>
        {abouts.map((about) => (
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Iframe
              url={`${about.map}`}
              width="640px"
              height="320px"
              id=""
              className=""
              display="block"
              position="relative"
            />
            <Stack spacing={10}>
              <CardBody>
                <Heading size="md">İletişim Bilgilerimiz</Heading>
                <Heading size="sm">{about.name}</Heading>
                <Text py="3">
                  <LocationOnIcon fontSize="medium"></LocationOnIcon>{" "}
                  {about.location}
                </Text>
                <Text py="3">
                  <PhoneIcon fontSize={"2xl"}></PhoneIcon> {about.phoneNumber}
                </Text>
                <Text py="3">
                  <EmailIcon fontSize={"2xl"}></EmailIcon> {about.eposta}
                </Text>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

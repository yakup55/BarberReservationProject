import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getList } from "../../Redux/actions/aboutActions";
import { getList2 } from "../../Redux/actions/barberActions";
import { getList4 } from "../../Redux/actions/hourActions";
import { getList3 } from "../../Redux/actions/experienceActions";
import { getList5 } from "../../Redux/actions/reservationActions";
import { getList6 } from "../../Redux/actions/userActions";

export default function AdminHome() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { barbers } = useSelector((state) => state.barber);
  const { hours } = useSelector((state) => state.hour);
  const { experiences } = useSelector((state) => state.experience);
  const { users } = useSelector((state) => state.user);
  const { reservations } = useSelector((state) => state.reservation);
  const { abouts } = useSelector((state) => state.about);

  useEffect(() => {
    dispacth(getList());
    dispacth(getList2());
    dispacth(getList3());
    dispacth(getList4());
    dispacth(getList5());
    dispacth(getList6());
  }, []);
  return (
    <Container mt="50" maxW={1000}>
      <SimpleGrid columns={3} spacing={10}>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md"> Berberler</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam berberci sayısı <Badge>{barbers.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button  onClick={() => navigate("/admin/barberslist")}>
              Detay
            </Button>
          </CardFooter>
        </Card>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md"> Saatler</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam Saat sayısı <Badge>{hours.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => navigate("/admin/hourslist")}>Detay</Button>
          </CardFooter>
        </Card>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md"> Kullanıcı</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam kullanıcı sayısı <Badge>{users.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => navigate("/admin/userslist")}>Detay</Button>
          </CardFooter>
        </Card>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md"> Deneyim</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam Deneyim sayısı <Badge>{experiences.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => navigate("/admin/experienceslist")}>
              Detay
            </Button>
          </CardFooter>
        </Card>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md"> Hakkında</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam hakkında sayısı <Badge>{abouts.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => navigate("/admin/aboutslist")}>Detay</Button>
          </CardFooter>
        </Card>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md"> Rezervason</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam Rezervasyon sayısı <Badge>{reservations.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => navigate("/admin/barberslist")}>
              Detay
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Container>
  );
}

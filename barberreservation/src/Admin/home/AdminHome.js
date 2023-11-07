import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getList } from "../../Redux/actions/aboutActions";
import { getList2 } from "../../Redux/actions/barberActions";
import { getList4 } from "../../Redux/actions/hourActions";
import { getList5 } from "../../Redux/actions/reservationActions";
import { getList6 } from "../../Redux/actions/userActions";
import { getList3 } from "../../Redux/actions/calendarActions";
import { getList7 } from "../../Redux/actions/contactActions";
import { getList8 } from "../../Redux/actions/quentionsActions";
import { getImagesList } from "../../Redux/actions/imageActions";
export default function AdminHome() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { barbers } = useSelector((state) => state.barber);
  const { hours } = useSelector((state) => state.hour);
  const { users } = useSelector((state) => state.user);
  const { reservations } = useSelector((state) => state.reservation);
  const { abouts } = useSelector((state) => state.about);
  const { calendars } = useSelector((state) => state.calendar);
  const { contacts } = useSelector((state) => state.contact);
  const { quentions } = useSelector((state) => state.quention);
  const { images } = useSelector((state) => state.image);

  useEffect(() => {
    dispacth(getList());
    dispacth(getList2());
    dispacth(getList3());
    dispacth(getList4());
    dispacth(getList5());
    dispacth(getList6());
    dispacth(getList7());
    dispacth(getList8());
    dispacth(getImagesList());
  }, [dispacth]);
  return (
    <Container mt="50" mb={20} maxW={1000}>
      <SimpleGrid columns={3} spacing={10}>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md"> Berberler</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam berberci sayısı{" "}
              <Badge bgColor={"lightgreen"}>{barbers.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="purple"
              onClick={() => navigate("/admin/barberslist")}
            >
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
              Toplam Saat sayısı{" "}
              <Badge bgColor={"lightgreen"}>{hours.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="purple"
              onClick={() => navigate("/admin/hourslist")}
            >
              Detay
            </Button>
          </CardFooter>
        </Card>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md"> Kullanıcı</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam kullanıcı sayısı{" "}
              <Badge bgColor={"lightgreen"}>{users.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="purple"
              onClick={() => navigate("/admin/userslist")}
            >
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
              Toplam hakkında sayısı{" "}
              <Badge bgColor={"lightgreen"}>{abouts.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="purple"
              onClick={() => navigate("/admin/aboutslist")}
            >
              Detay
            </Button>
          </CardFooter>
        </Card>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md"> Rezervason</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam Rezervasyon sayısı{" "}
              <Badge bgColor={"lightgreen"}>{reservations.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="purple"
              onClick={() => navigate("/admin/reservationslist")}
            >
              Detay
            </Button>
          </CardFooter>
        </Card>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md"> Günler</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam Gün sayısı{" "}
              <Badge bgColor={"lightgreen"}>{calendars.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="purple"
              onClick={() => navigate("/admin/calendarslist")}
            >
              Detay
            </Button>
          </CardFooter>
        </Card>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md"> İletişim</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam İletişim sayısı{" "}
              <Badge bgColor={"lightgreen"}>{contacts.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="purple"
              onClick={() => navigate("/admin/contactslist")}
            >
              Detay
            </Button>
          </CardFooter>
        </Card>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md">Sıkça Sorulan Sorular</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam Soru sayısı{" "}
              <Badge bgColor={"lightgreen"}>{quentions.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="purple"
              onClick={() => navigate("/admin/quentionslist")}
            >
              Detay
            </Button>
          </CardFooter>
        </Card>
        <Card bgColor="aqua">
          <CardHeader>
            <Heading size="md">Berber Avatarları</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Toplam Avatar sayısı{" "}
              <Badge bgColor={"lightgreen"}>{images.length}</Badge>
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="purple"
              onClick={() => navigate("/admin/imageslist")}
            >
              Detay
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Container>
  );
}

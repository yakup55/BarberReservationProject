import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleted, getBarberId } from "../../Redux/actions/reservationActions";
import { getByCalendarId } from "../../Redux/actions/calendarActions";
import { getByHourId } from "../../Redux/actions/hourActions";
import { DeleteIcon } from "@chakra-ui/icons";
import { getByUserId } from "../../Redux/actions/userActions";
export default function AdminProfile() {
  const dispacth = useDispatch();
  const { reservation } = useSelector((state) => state.reservation);
  const { user } = useSelector((state) => state.user);
  const { calendar } = useSelector((state) => state.calendar);
  const { hour } = useSelector((state) => state.hour);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  useEffect(() => {
    dispacth(getBarberId(localStorage.barberId));
    dispacth(getByUserId(reservation.userId));
    dispacth(getByCalendarId(reservation.calendarId));
    dispacth(getByHourId(reservation.hourId));
  }, [
    dispacth,
    reservation.barberId,
    reservation.calendarId,
    reservation.hourId,
    reservation.userId,
  ]);
  console.log(reservation);
  return (
    <Grid
      h="300px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
      ml={10}
      mt={10}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <Card>
          <CardHeader>
            <Heading size="md">Bilgilerim</Heading>
            <Avatar src={localStorage.getItem("image")} mt={5} mb={-8}></Avatar>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="sm">Adınız Soyadınız</Heading>
                <Text pt="2" fontSize="sm">
                  {localStorage.getItem("userName")}{" "}
                  {localStorage.getItem("surName")}
                </Text>
              </Box>
              <Box>
                <Heading size="sm">Telefon Numaranız</Heading>
                <Text pt="2" fontSize="sm">
                  {localStorage.getItem("phoneNumber")}
                </Text>
              </Box>
              <Box>
                <Heading size="sm">Deneyim Yılı</Heading>
                <Text pt="2" fontSize="sm">
                  {localStorage.getItem("expriences")}-Yıl
                </Text>
              </Box>

            </Stack>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem colSpan={4}>
        {reservation.barberId === undefined && (
          <Heading textAlign={"center"}>Randevunuz Bulunmamaktadır</Heading>
        )}

        {reservation.barberId !== undefined && (
          <Container maxW={1000}>
            <Heading
              mb={10}
              textAlign={"center"}
              fontSize={"2xl"}
              fontStyle={"italic"}
            >
              Randevularım
            </Heading>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>Kullanıcı</Th>
                    <Th>Gün</Th>
                    <Th>Saat</Th>
                    <Th>Açıklama</Th>
                    <Th>İptal Et</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {reservation.length === 0 && (
                    <Heading>Randevunuz Bulunmamaktadır</Heading>
                  )}

                  {reservation.length !== 0 && (
                    <Tr>
                      <Td>
                        {user.name} {user.surName}
                      </Td>
                      <Td>{calendar.dates}</Td>
                      <Td>{hour.hour}</Td>
                      <Td>{reservation.description}</Td>
                      <Td>
                        <Button
                          leftIcon={<DeleteIcon></DeleteIcon>}
                          colorScheme="red"
                          onClick={onOpen}
                        >
                          İptal Et
                        </Button>

                        <AlertDialog
                          isOpen={isOpen}
                          leastDestructiveRef={cancelRef}
                          onClose={onClose}
                        >
                          <AlertDialogOverlay>
                            <AlertDialogContent>
                              <AlertDialogHeader
                                fontSize="lg"
                                fontWeight="bold"
                              >
                                Randevuyu İptal Et
                              </AlertDialogHeader>

                              <AlertDialogBody>
                                Randevunuzu İptal Etmek İstediğinize Emin
                                misiniz ?
                              </AlertDialogBody>

                              <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                  Hayır
                                </Button>
                                <Button
                                  colorScheme="red"
                                  onClick={
                                    onClose &&
                                    (() => handleDeleted(calendar.id))
                                  }
                                  ml={3}
                                >
                                  İptal Et
                                </Button>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialogOverlay>
                        </AlertDialog>
                      </Td>
                    </Tr>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Container>
        )}
      </GridItem>
    </Grid>
  );
}

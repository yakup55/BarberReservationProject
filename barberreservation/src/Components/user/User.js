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
import { deleted, getUserId } from "../../Redux/actions/reservationActions";
import { CheckCircleIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import { userDeleted } from "../../Redux/actions/userActions";
export default function User() {
  const dispacth = useDispatch();
  const { reservations } = useSelector((state) => state.reservation);
  const { barber } = useSelector((state) => state.barber);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  const handleUserDeleted = (id) => {
    dispacth(userDeleted(id));
  };
  useEffect(() => {
    dispacth(getUserId(localStorage.userId));
  }, [dispacth]);
 
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
            <Avatar mt={5} mb={-8}></Avatar>
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
                <Heading size="sm">Üyelik Sil</Heading>
                <Text pt="2" fontSize="sm">
                  <Button
                    leftIcon={<DeleteIcon></DeleteIcon>}
                    colorScheme="red"
                    onClick={() => handleUserDeleted(barber.id)}
                  >
                    SİL
                  </Button>
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem colSpan={4}>
        {reservations.length === 0 && (
          <Heading textAlign={"center"}>Randevunuz Bulunmamaktadır</Heading>
        )}
        {reservations.length !== 0 && (
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
                    <Th>Berber</Th>
                    <Th>Gün</Th>
                    <Th>Saat</Th>
                    <Th>Açıklama</Th>
                    <Th>ONAYLANMA DURUMU</Th>
                    <Th>İptal Et</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {reservations.map((r) => (
                    <Tr>
                      <Td>
                        {r.barbarName} {r.barberSurName}
                      </Td>
                      <Td>{r?.reservationDate}</Td>
                      <Td>{r?.hour}</Td>
                      <Td>{r?.description}</Td>
                      {r?.status === true && (
                        <Td>
                          <CheckCircleIcon ml={10}></CheckCircleIcon>
                        </Td>
                      )}
                      {r?.status === false && (
                        <Td>
                          <CloseIcon ml={10}></CloseIcon>
                        </Td>
                      )}
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
                                    onClose && (() => handleDeleted(r.id))
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
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Container>
        )}
      </GridItem>
    </Grid>
  );
}

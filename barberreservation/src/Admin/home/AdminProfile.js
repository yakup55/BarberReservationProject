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
import {
  deleted,
  getBarberId,
  reservationActive,
} from "../../Redux/actions/reservationActions";
import { CheckCircleIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
export default function AdminProfile() {
  const dispacth = useDispatch();
  const { reservations } = useSelector((state) => state.reservation);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  const handleActive = (id) => {
    dispacth(reservationActive(id));
  };
  useEffect(() => {
    dispacth(getBarberId(localStorage.barberId));
  }, [dispacth]);
  console.log(reservations.length);
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
        <Card bg={"darkgrey"}>
          <CardHeader>
            <Heading size="md" textColor={"white"}>
              Bilgilerim
            </Heading>
            <Avatar src={localStorage.getItem("image")} mt={5} mb={-8}></Avatar>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="sm" textColor={"white"}>
                  Adınız Soyadınız
                </Heading>
                <Text textColor={"white"} pt="2" fontSize="sm">
                  {localStorage.getItem("userName")}{" "}
                  {localStorage.getItem("surName")}
                </Text>
              </Box>
              <Box>
                <Heading size="sm" textColor={"white"}>
                  Telefon Numaranız
                </Heading>
                <Text textColor={"white"} pt="2" fontSize="sm">
                  {localStorage.getItem("phoneNumber")}
                </Text>
              </Box>
              <Box>
                <Heading size="sm" textColor={"white"}>
                  Deneyim Yılı
                </Heading>
                <Text textColor={"white"} pt="2" fontSize="sm">
                  {localStorage.getItem("expriences")}-Yıl
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem colSpan={4}>
        {reservations.length === 0  && (
            <Heading textAlign={"center"}>Randevunuz Bulunmamaktadır</Heading>
          )}

        {reservations.length !== 0  && (
             <Container maxW={1100}>
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
                     <Th>KULLANICI</Th>
                     <Th>Gün</Th>
                     <Th>Saat</Th>
                     <Th>Açıklama</Th>
                     <Th>ONAYLANMA DURUMU</Th>
                     <Th>ONAYLA</Th>
                     <Th>İptal Et</Th>
                   </Tr>
                 </Thead>
                 <Tbody>
                   {reservations.map((r) => (
                     <Tr>
                       <Td>
                         {r.userName} {r.userSurName}
                       </Td>
                       <Td>{r?.calendar}</Td>
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
                           leftIcon={<CheckCircleIcon></CheckCircleIcon>}
                           colorScheme="whatsapp"
                           onClick={() => handleActive(r.id)}
                         >
                           Onayla
                         </Button>
                       </Td>
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
                               <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                 Randevuyu İptal Et
                               </AlertDialogHeader>
   
                               <AlertDialogBody>
                                 Randevunuzu İptal Etmek İstediğinize Emin misiniz
                                 ?
                               </AlertDialogBody>
   
                               <AlertDialogFooter>
                                 <Button ref={cancelRef} onClick={onClose}>
                                   Hayır
                                 </Button>
                                 <Button
                                   colorScheme="red"
                                   onClick={onClose && (() => handleDeleted(r.id))}
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

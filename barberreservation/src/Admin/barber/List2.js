import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Container,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleted, getList2 } from "../../Redux/actions/barberActions";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Add2 from "./Add2";

export default function List2() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { barbers } = useSelector((state) => state.barber);
  useEffect(() => {
    dispacth(getList2());
  }, [dispacth]);
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  return (
    <Container mt="10" maxW={1400}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            <Add2>EKLE</Add2>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>BERBER İSMİ</Th>
              <Th>BERBER SOY İSMİ</Th>
              <Th>TELEFON NumaraSI</Th>
              <Th>KAÇ YIL DENEYİMLİ</Th>
              <Th>RESMİ</Th>
              <Th>KAYIT TARİHİ</Th>
              <Th>GÜNCELLE</Th>
              <Th>SİL</Th>
            </Tr>
          </Thead>
          <Tbody>
            {barbers.map((barber) => (
              <Tr>
                <Td>{barber.id}</Td>
                <Td>{barber.name}</Td>
                <Td>{barber.surName}</Td>
                <Td>{barber.phoneNumber}</Td>
                <Td>{barber.experience}</Td>
                <Td>
                  <Image
                    boxSize="80px"
                    objectFit="cover"
                    src={`${barber.image}`}
                    alt={barber.name}
                  />
                </Td>
                <Td>{barber.date}</Td>
                <Td>
                  <Button
                    leftIcon={<EditIcon></EditIcon>}
                    colorScheme="whatsapp"
                    onClick={() => navigate(`/admin/barberupdate/${barber.id}`)}
                  >
                    GÜNCELLE
                  </Button>
                </Td>
                <Td>
                  <Button
                    leftIcon={<DeleteIcon></DeleteIcon>}
                    colorScheme="red"
                    onClick={onOpen}
                  >
                    SİL
                  </Button>

                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          Sil
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Silmek İstediğinize Emin misiniz ?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            İPTAL
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={
                              onClose && (() => handleDeleted(barber.id))
                            }
                            ml={3}
                          >
                            SİL
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
  );
}

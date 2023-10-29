import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Container,
  Table,
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
import { getList6, userDeleted } from "../../Redux/actions/userActions";
import { DeleteIcon } from "@chakra-ui/icons";

export default function List6() {
  const dispacth = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { users } = useSelector((state) => state.user);
  const handleDeleted = (id) => {
    dispacth(userDeleted(id));
  };
  useEffect(() => {
    dispacth(getList6());
  }, [dispacth]);
  return (
    <Container maxW={1000}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>KULLANICI İSMİ</Th>
              <Th>KULLANICI SOY İSMİ</Th>
              <Th>KULLANICI TELEFON NUMARASI</Th>
              <Th>KAYIT TARİHİ</Th>
              <Th>SİL</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.surName}</Td>
                <Td>{user.phoneNumber}</Td>
                <Td>{user.date}</Td>
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
                            onClick={onClose && (() => handleDeleted(user.id))}
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

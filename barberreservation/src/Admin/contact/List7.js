import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import { deleted, getList7 } from "../../Redux/actions/contactActions";
import { DeleteIcon } from "@chakra-ui/icons";
export default function List7() {
  const dispacth = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  const { contacts } = useSelector((state) => state.contact);
  useEffect(() => {
    dispacth(getList7());
  }, [dispacth]);
  console.log(contacts);
  return (
    <div>
      <Container mt="10" maxW={1400}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>İSİMLER</Th>
                <Th>TELEFON NUMARALARI</Th>
                <Th>AÇIKLAMA</Th>
                <Th>TARİH</Th>
                <Th>DELETE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contacts.map((contact) => (
                <Tr>
                  <Td>{contact.id}</Td>
                  <Td>{contact.name}</Td>
                  <Td>{contact.phoneNumber}</Td>
                  <Td>{contact.description}</Td>
                  <Td>{contact.date}</Td>

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
                                onClose && (() => handleDeleted(contact.id))
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
    </div>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import Add8 from "./Add8";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleted, getList8 } from "../../Redux/actions/quentionsActions";
export default function List7() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  const { quentions } = useSelector((state) => state.quention);
  useEffect(() => {
    dispacth(getList8());
  }, [dispacth]);
  console.log(quentions);
  return (
    <div>
      <Container mt="10" maxW={1500}>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>
              <Add8>ADD</Add8>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>İSİMLER</Th>
                <Th>AÇIKLAMA</Th>
                <Th>TARİH</Th>
                <Th>UPDATE</Th>
                <Th>DELETE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {quentions.map((quention) => (
                <Tr>
                  <Td>{quention.id}</Td>
                  <Td>{quention.name}</Td>
                  <Td>{quention.description}</Td>
                  <Td>{quention.date}</Td>
                  <Td>
                    <Button
                      leftIcon={<EditIcon></EditIcon>}
                      colorScheme="whatsapp"
                      onClick={() =>
                        navigate(`/admin/quentionupdate/${quention.id}`)
                      }
                    >
                      GÜNCELLE
                    </Button>
                  </Td>
                  <Td>
                    {" "}
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
                              onClose && (() => handleDeleted(quention.id))
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

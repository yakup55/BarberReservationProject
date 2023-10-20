import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleted, getList3 } from "../../Redux/actions/calendarActions";
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
import Add3 from "./Add3"
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export default function List3() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  const { calendars } = useSelector((state) => state.calendar);
  useEffect(() => {
    dispacth(getList3());
  }, [dispacth]);
  console.log(calendars)
  return (
    <div>
      <Container mt="10" maxW={1400}>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>
             
              <Add3>ADD</Add3>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>GÜNLER</Th>
                <Th>TARİH</Th>
                <Th>UPDATE</Th>
                <Th>DELETE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {calendars.map((calendar) => (
                <Tr>
                  <Td>{calendar.id}</Td>
                  <Td>{calendar.dates}</Td>
                  <Td>{calendar.date}</Td>
                  <Td>
                    <Button
                      leftIcon={<EditIcon></EditIcon>}
                      colorScheme="whatsapp"
                      onClick={() =>
                        navigate(`/admin/calendarupdate/${calendar.id}`)
                      }
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
                              onClose && (() => handleDeleted(calendar.id))
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

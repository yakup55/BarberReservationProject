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
import { deleted, getList } from "../../Redux/actions/aboutActions";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Add from "./Add";
import Iframe from "react-iframe";

export default function List() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { abouts } = useSelector((state) => state.about);
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  useEffect(() => {
    dispacth(getList());
  }, [dispacth]);

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            {" "}
            <Add>ADD</Add>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>İSİM</Th>
              <Th>KONUM TARİFİ</Th>
              <Th>TELEFON NUMARANIZ</Th>
              <Th>E-POSTA ADRESİNİZ</Th>
              <Th>HARİTA UZANTINIZ</Th>
              <Th>CREATED DATE</Th>
              <Th>UPDATE</Th>
              <Th>DELETED</Th>
            </Tr>
          </Thead>

          <Tbody>
            {abouts.map((about) => (
              <Tr>
                <Td>{about.id}</Td>
                <Td>{about.name}</Td>
                <Td>{about.location}</Td>
                <Td>{about.phoneNumber}</Td>
                <Td>{about.eposta}</Td>
                <Td>
                  <Iframe
                    url={`${about.map}`}
                    width="300px"
                    height="200px"
                    id=""
                    className=""
                    display="block"
                    position="relative"
                  />
                </Td>
                <Td>{about.date}</Td>

                <Td>
                  {" "}
                  <Button
                    leftIcon={<EditIcon></EditIcon>}
                    colorScheme="whatsapp"
                    onClick={() => navigate(`/admin/aboutupdate/${about.id}`)}
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
                            onClick={onClose && (()=>handleDeleted(about.id))}
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
    </>
  );
}

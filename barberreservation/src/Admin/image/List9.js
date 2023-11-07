import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {} from "../../Redux/actions/barberActions";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleted, getImagesList } from "../../Redux/actions/imageActions";
import Add9 from "./Add9";
import { openSnacbar } from "../../Redux/actions/appActions";

export default function List9() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { images } = useSelector((state) => state.image);
  useEffect(() => {
    dispacth(getImagesList());
  }, [dispacth]);
  const handleDeleted = (id) => {
    dispacth(deleted(id));
    dispacth(
      openSnacbar({
        message: "Başarılı Bir Şekilde Silindi",
        severity: "success",
      })
    );
  };
  return (
    <Container mt="10" maxW={1400}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            <Add9>EKLE</Add9>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>RESİM URLSİ</Th>
              <Th>KAYIT TARİHİ</Th>
              <Th>GÜNCELLE</Th>
              <Th>SİL</Th>
            </Tr>
          </Thead>
          <Tbody>
            {images.map((image) => (
              <Tr>
                <Td>{image.id}</Td>
                <Td>
                  <Avatar w={100} h={100} src={`${image.imageUrl}`}></Avatar>
                </Td>
                <Td>{image.date}</Td>
                <Td>
                  <Button
                    leftIcon={<EditIcon></EditIcon>}
                    colorScheme="whatsapp"
                    onClick={() => navigate(`/admin/imageupdate/${image.id}`)}
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
                            onClick={onClose && (() => handleDeleted(image.id))}
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

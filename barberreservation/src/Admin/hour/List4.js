import {
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
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleted, getList4 } from "../../Redux/actions/hourActions";
import { CheckCircleIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Add4 from "./Add4";

export default function List4() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { hours } = useSelector((state) => state.hour);
  useEffect(() => {
    dispacth(getList4());
  }, [dispacth]);
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  return (
    <Container mt="10" maxW={1200}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            {" "}
            <Add4>EKLE</Add4>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>SAATLER</Th>
              <Th>BERBERCİ</Th>
              <Th>ONAYLANMA DURUMU</Th>
              <Th>KAYIT TARİHİ</Th>
              <Th>GÜNCELLE</Th>
              <Th>SİL</Th>
            </Tr>
          </Thead>
          <Tbody>
            {hours.map((hour) => (
              <Tr>
                <Td>{hour.id}</Td>
                <Td>{hour.hour}</Td>
                <Td>{hour.barberId}</Td>
                {
hour.status===true&&(
                <Td>
  <CheckCircleIcon></CheckCircleIcon>
                </Td>
                )
              }
                    {
hour.status===false&&(
                <Td>
  <CloseIcon></CloseIcon>
                </Td>
                )
              }
                <Td>{hour.date}</Td>
                <Td>
                  <Button
                    leftIcon={<EditIcon></EditIcon>}
                    colorScheme="whatsapp"
                    onClick={() => navigate(`/admin/hourupdate/${hour.id}`)}
                  >
                    GÜNCELLE
                  </Button>
                </Td>
                <Td>
                  {" "}
                  <Button
                    leftIcon={<DeleteIcon></DeleteIcon>}
                    colorScheme="red"
                    onClick={() => handleDeleted(hour.id)}
                  >
                    SİL
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}

import {
  Button,
  Container,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleted, getList6 } from "../../Redux/actions/userActions";
import { DeleteIcon } from "@chakra-ui/icons";

export default function List6() {
  const dispacth = useDispatch();
  const { users } = useSelector((state) => state.user);
  const handleDeleted = (id) => {
    dispacth(deleted(id));
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
                    onClick={() => handleDeleted(user.id)}
                    colorScheme="red"
                    leftIcon={<DeleteIcon></DeleteIcon>}
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

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
import { deleted, getList5 } from "../../Redux/actions/reservationActions";
import { DeleteIcon } from "@chakra-ui/icons";
export default function List5() {
  const dispacth = useDispatch();
  const { reservations } = useSelector((state) => state.reservation);
  useEffect(() => {
    dispacth(getList5());
  }, [dispacth]);
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  return (
    <Container maxW={1000}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>DESCRIPTION</Th>
              <Th>BERBER ID</Th>
              <Th>HOUR ID</Th>
              <Th>CREATED DATE</Th>
              <Th>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reservations.map((reservation) => (
              <Tr>
                <Td>{reservation.id}</Td>
                <Td>{reservation.barberId}</Td>
                <Td>{reservation.hourId}</Td>
                <Td>{reservation.description}</Td>
                <Td>{reservation.date}</Td>
                <Td>
                  <Button
                    colorScheme="red"
                    leftIcon={<DeleteIcon></DeleteIcon>}
                    onClick={() => handleDeleted(reservation.id)}
                  >
                    DELETE
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

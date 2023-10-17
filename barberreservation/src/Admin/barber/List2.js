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
import { deleted, getList2 } from "../../Redux/actions/barberActions";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Add2 from "./Add2";
import Update2 from "./Update2";

export default function List2() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { barbers } = useSelector((state) => state.barber);
  useEffect(() => {
    dispacth(getList2());
  }, []);
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  return (
    <Container mt="10" maxW={1200}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption> <Add2
                  >
                    ADD
                  </Add2></TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>NAME</Th>
              <Th>SURNAME</Th>
              <Th>PHONE NUMBER</Th>
              <Th>CREATED DATE</Th>
              <Th>EXPERIENCE ID</Th>
              <Th>UPDATE</Th>
              <Th>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {barbers.map((barber) => (
              <Tr>
                <Td>{barber.id}</Td>
                <Td>{barber.name}</Td>
                <Td>{barber.surName}</Td>
                <Td>{barber.phoneNumber}</Td>
                <Td>Tarih Gelicek</Td>
                <Td>{barber.experienceId}</Td>
                <Td>
                  {" "}
                 < > <Update2></Update2></>
                </Td>
                <Td>
                  {" "}
                  <Button
                    leftIcon={<DeleteIcon></DeleteIcon>}
                    colorScheme="red"
                    onClick={() => handleDeleted(barber.id)}
                  >
                    DELETE
                  </Button>
                </Td>
                <Td>
                 
                 
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}

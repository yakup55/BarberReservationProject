import {
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
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleted, getList } from "../../Redux/actions/aboutActions";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Add from "./Add";

export default function List() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { abouts } = useSelector((state) => state.about);
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  useEffect(() => {
    dispacth(getList());
  }, [dispacth]);

  return (
    <Container maxW={1500}>
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
                <Td>{about.map}</Td>
                <Td>{about.date}</Td>

                <Td>
                  {" "}
                  <Button
                    leftIcon={<EditIcon></EditIcon>}
                    colorScheme="whatsapp"
                    onClick={() => navigate(`/admin/aboutupdate/${about.id}`)}
                  >
                    UPDATE
                  </Button>
                </Td>
                <Td>
                  {" "}
                  <Button
                    leftIcon={<DeleteIcon></DeleteIcon>}
                    colorScheme="red"
                    onClick={() => handleDeleted(about.id)}
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

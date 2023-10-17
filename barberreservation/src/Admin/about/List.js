import {
  Box,
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

export default function List() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { abouts } = useSelector((state) => state.about);
  const handleDeleted = (id) => {
    dispacth(deleted(id));
  };
  useEffect(() => {
    dispacth(getList());
  }, []);
  console.log(abouts);
  return (
    <Container maxW={1000}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Admin About List</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>NAME</Th>
              <Th>IMAGE</Th>
              <Th>DESCRIPTION</Th>
              <Th>CREATED DATE</Th>
              <Th>UPDATE</Th>
              <Th>DELETED</Th>
            </Tr>
          </Thead>

          <Tbody>
            {abouts.map((about)=>(
 <Tr>
 <Td>{about.id}</Td>
 <Td>{about.name}</Td>
 <Td>
  <Image   boxSize='100px' src={`${about.image}`} alt={`${about.name}`} />
</Td>
 <Td>{about.description}</Td>
 <Td>Tarih gelicek</Td>
 
 <Td> <Button leftIcon={<EditIcon></EditIcon>} colorScheme='whatsapp' onClick={()=>navigate(`/admin/aboutupdate/${about.id}`)}>
    UPDATE
  </Button></Td>
 <Td> <Button leftIcon={<DeleteIcon></DeleteIcon>} colorScheme='red' onClick={()=>handleDeleted(about.id)}>
    DELETE
  </Button></Td>
</Tr>
            ))}
           
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}

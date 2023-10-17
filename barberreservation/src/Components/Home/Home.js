import React from "react";
import {
  Button,
  Container,
  Select,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
export default function Home() {
  const dispacth=useDispatch();
  
  return (
    <Container maxW={1000} marginTop={10}>
      <SimpleGrid columns={1} spacingX="20px" spacingY="20px">
        <Box height="60px">
          <Select placeholder="Berber Seçiniz">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box height="60px">
          <Select placeholder="Saat Seçiniz">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box height="90px">
          <Textarea placeholder="Not Ekleyebilirsiniz..." />
        </Box>
        <Box height="60px">
          <Button alignItems="center">Randevu Al</Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

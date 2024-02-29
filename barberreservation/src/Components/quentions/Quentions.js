import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList8 } from "../../Redux/actions/quentionsActions";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export default function Quentions() {
  const dispacth = useDispatch();
  const { quentions } = useSelector((state) => state.quention);
  useEffect(() => {
    dispacth(getList8());
  }, [dispacth]);

  return (
    <Container maxW={800}>
      <Heading mt={12} textAlign={"center"} fontSize={"2xl"} fontStyle={"italic"}>
        Sıkça Sorulan Sorular
      </Heading>
      <Box   color='black' pt={5} position="relative" mb="10">
        <Accordion  allowMultiple>
          {quentions.map((quention) => (
      <AccordionItem >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left'>
              {quention.name}
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize='12px' />
                ) : (
                  <AddIcon fontSize='12px' />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {quention.description}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Container>
  );
}

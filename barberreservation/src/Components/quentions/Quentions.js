import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getList8 } from '../../Redux/actions/quentionsActions'

export default function Quentions() {
  const dispacth=useDispatch()
  const {quentions}=useSelector((state)=>state.quention)
  useEffect(()=>{
    dispacth(getList8())
  },[dispacth])
  return (
    <Container mb={10} maxW={1000}>
        <Accordion defaultIndex={[0]} allowMultiple>
            <Heading textAlign={'center'} mt={10} mb={10}>Sıkça Sorulan Sorular</Heading>
            {quentions.map((que)=>(
              <AccordionItem mb={10}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          {que.name}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     {que.description}
    </AccordionPanel>
  </AccordionItem>
            ))}
  

 
</Accordion>
    </Container>
  )
}

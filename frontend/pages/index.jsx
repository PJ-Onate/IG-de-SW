import React, {Fragment} from 'react'
import InputStack from '../components/InputStack'
import {Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Box } from "@chakra-ui/react"

const index = () => {

  const router = useRouter()

  return (

    <>
    <Container maxW="100%">
     <Box mt="200px">
     <Stack spacing={4} direction='column' align='center'>
      <Heading as="H1" textAlign={"center"} size="2xl" color={"blue"}>Sistema de administrador de gastos condominio</Heading>
      <Heading as="H2" textAlign={"center"} size="md" color={"blue"}>Esta es la pagina principal del programa de administrador</Heading>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./menuPrincipal')}>Ingresar</Button>
      </Stack>
     </Box>
    </Container>
    </>
  )
}

export default index

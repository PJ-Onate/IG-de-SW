import React, {Fragment} from 'react'
import InputStack from '../components/InputStack'
import {Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const index = () => {

  const imprimir = (msg) => {
    console.log(msg)
  }

  const router = useRouter()

  return (
    <>
    <Container maxW="container.md">
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./menuPrincipal')}>Ingresar</Button>
      <Heading as="H1" textAlign={"center"} size="2xl" color={"blue"}>Sistema de administrador de gastos condominio</Heading>
      <Heading as="H2" textAlign={"center"} size="md" color={"blue"}>Esta es la pagina principal del programa de administrador</Heading>
    </Container>
    </>
  )
}

export default index

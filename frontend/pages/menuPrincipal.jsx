import React, {Fragment} from 'react'
import InputStack from '../components/InputStack'
import {Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const menuPrincipal = () => {

const router = useRouter()

  return (
    <>
    <Container maxW="container.md">

    <Heading as="H1" textAlign={"center"} size="2xl" color={"blue"}>Menu de opciones</Heading>
    <Heading as="H2" textAlign={"center"} size="md" color={"blue"}>Seleccione la opcion que desea utilizar</Heading>

      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./Emails')}>Listado de Clientes</Button>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./enviarEmail')}>Enviar Email</Button>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./menuPrincipal')}>Boton pal Pedro</Button>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./')}>Volver atras</Button>

    </Container>
    </>
  )
}



export default menuPrincipal
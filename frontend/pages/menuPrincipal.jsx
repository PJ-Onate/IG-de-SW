import React, {Fragment} from 'react'
import InputStack from '../components/InputStack'
import {Button, Flex, Spacer, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody, ButtonGroup } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const menuPrincipal = () => {

const router = useRouter()

  return (
    <>
<Stack spacing={4} direction='column' align='center'>
    <Heading as="H1" textAlign={"center"} size="2xl" color={"blue"}>Menu de opciones</Heading>
    <Heading as="H2" textAlign={"center"} size="md" color={"blue"}>Seleccione la opcion que desea utilizar</Heading>
      <ButtonGroup gap="2" >
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./Emails')}>Listado de Clientes</Button>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./enviarEmail')}>Enviar Email</Button>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./crearBoleta')}>Crear Boleta</Button>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./')}>Volver atras</Button>
      </ButtonGroup>
      </Stack>
    </>
  )
}



export default menuPrincipal
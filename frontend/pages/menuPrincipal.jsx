import React from 'react'
import {Button, Stack, ButtonGroup, Grid, Heading } from '@chakra-ui/react'
import router from 'next/router'

const menuPrincipal = () => {

  return (
    <Grid background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(0,212,255,1) 65%, rgba(0,212,255,1) 82%)">
    <Stack spacing={4} direction='column' align='center'>
    <Heading as="H1" textAlign={"center"} size="2xl" color={"orange"}>Menu de opciones</Heading>
    <Heading as="H2" textAlign={"center"} size="md" color={"orange"}>Seleccione la opcion que desea utilizar</Heading>
      <ButtonGroup gap="2" >
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./Emails')}>Listado de Clientes</Button>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./enviarEmail')}>Enviar Email</Button>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./crearBoleta')}>Crear Boleta</Button>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./listaBoletas')}>Lista de Boletas</Button>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./listaGastosComunes')}>Ver Gastos de Vecinos</Button>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./')}>Volver atras</Button>
      </ButtonGroup>
      </Stack>
    </Grid>
  )
}



export default menuPrincipal
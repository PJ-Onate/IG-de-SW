import React, {Fragment} from 'react'
import InputStack from '../components/InputStack'
import {Button, Container, Grid,Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Box } from "@chakra-ui/react"

const index = () => {

  const router = useRouter()

  return (

    <Grid background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(0,212,255,1) 65%, rgba(0,212,255,1) 82%)">
    <Container maxW="100%">
     <Box mt="200px">
     <Stack spacing={4} direction='column' align='center'>
      <Heading as="H1" textAlign={"center"} size="2xl" color={"orange"}>Sistema de administrador de gastos condominio</Heading>
      <Heading as="H2" textAlign={"center"} size="md" color={"orange"}>Esta es la pagina principal del programa de administrador</Heading>
      <Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./menuPrincipal')}>Ingresar</Button>
      </Stack>
     </Box>
    </Container>
    </Grid>
  )
}

export default index

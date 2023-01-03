import {useState as state, useEffect as effect} from 'react'
import {Button, Box, Grid, Container, Heading, Stack, Table, Thead, Tr, Td} from '@chakra-ui/react'
import { getGastosComunes }  from '../data/boleta'
import router from 'next/router'

const listaGastosComunes = () => {


  const [gastos, setGastos] = state([{
    id: '',
    nombreGastoComun: '',
    montoGastoComun: '',
    vecino: ''
  }])


  const contentTable = () => {
    return gastos.map(gasto => {
        return (
            <Tr key = { gasto._id }>
                <Td> {gasto.nombreGastoComun} </Td>
                <Td> {gasto.montoGastoComun} </Td>
                <Td> {gasto.vecino} </Td>
            </Tr>
        )
    })
  }

  effect(() => {
    getGastosComunes().then (res => {
        setGastos(res.data)
    })
  }, [])

  return (
    <>
    <Grid background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(0,212,255,1) 65%, rgba(0,212,255,1) 82%)">
    <Container maxW="container.x1">
      <Heading as="H1" textAlign={"center"} size="2xl" color={"orange"}>Listado de Gastos Vecino</Heading>
      <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/menuPrincipal')}>Volver</Button>
      <Stack spacing = {4} mt = "10">
      <Box bg="white" mt="5" w='100%' p={4} borderRadius='lg' borderWidth='1px'>
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Td>Tipo de Gasto</Td>
                    <Td>Monto de Gasto</Td>
                    <Td>ID del vecino</Td>
                </Tr>
            </Thead>
            <tBody>
                {contentTable()}
            </tBody>
        </Table>
        </Box>
      </Stack>
    </Container>
    </Grid>
    </>
  )}

export default listaGastosComunes
import {useState, useEffect} from 'react'
import InputStack from '../components/InputStack'
import {Button, Box, Grid, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import axios from 'axios'
import { getGastosComunes }  from '../data/boleta'
import { useRouter } from 'next/router'

const listaGastosComunes = () => {

  const router = useRouter()

  const [gastos, setGastos] = useState([{
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

  useEffect(() => {
    getGastosComunes().then (res => {
        setGastos(res.data)
    })
  }, [])

  return (
    <>
    <Grid background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(0,212,255,1) 65%, rgba(0,212,255,1) 82%)">
    <Container maxW="container.x1">
      <Heading as="H1" textAlign={"center"} size="2xl" color={"orange"}>Listado de gastos de cada vecino</Heading>
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
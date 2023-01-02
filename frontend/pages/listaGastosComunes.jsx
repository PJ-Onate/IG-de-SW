import {useState, useEffect} from 'react'
import InputStack from '../components/InputStack'
import {Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
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
    <Container maxW="container.x1">
      <Heading as="H1" textAlign={"center"} size="2xl" color={"blue"}>Listado de gastos de cada vecino</Heading>
      <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/menuPrincipal')}>Volver</Button>
      <Stack spacing = {4} mt = "10">
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
      </Stack>
    </Container>
    </>
  )}

export default listaGastosComunes
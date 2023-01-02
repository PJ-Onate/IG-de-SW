import {useState, useEffect} from 'react'
import InputStack from '../components/InputStack'
import {Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import axios from 'axios'
import { getBoletas }  from '../data/boleta'
import { useRouter } from 'next/router'

const listaBoletas = () => {

  const router = useRouter()

  const [boletas, setBoleta] = useState([{
    id: '',
    tipoBoleta: '',
    montoBoleta: '',
    fechaBoleta: ''
  }])
   

  const contentTable = () => {
    return boletas.map(boleta => {
        return (
            <Tr key = { boleta._id }>
                <Td> {boleta.tipoBoleta} </Td>
                <Td> {boleta.montoBoleta} </Td>
                <Td> {boleta.fechaBoleta} </Td>
            </Tr>
        )
    })
  }

  useEffect(() => {
    getBoletas().then (res => {
        setBoleta(res.data)
    })
  }, [])

  return (
    <>
    <Container maxW="container.x1">
      <Heading as="H1" textAlign={"center"} size="2xl" color={"blue"}>Listado de boletas</Heading>
      <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/menuPrincipal')}>Volver</Button>
      <Stack spacing = {4} mt = "10">
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Td>Tipo de Boleta</Td>
                    <Td>Monto de Boleta</Td>
                    <Td>Mes y Año</Td>
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

export default listaBoletas
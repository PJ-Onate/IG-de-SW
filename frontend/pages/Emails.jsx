import { useState, useEffect } from 'react'
import { Button, Grid, Box, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getProducts } from '../data/products'
import { useRouter } from 'next/router'

const listado = () => {

    const [vecinos, setProducts] = useState([{
    }])
    const router = useRouter()

    const contentTable = () => {
        return vecinos.map(vecinos => {
            return (
                <Tr key={vecinos._id}>
                    <Td>{vecinos.nombre}</Td>
                    <Td>{vecinos.apellido}</Td>
                    <Td>{vecinos.rut}</Td>
                    <Td>{vecinos.telefono}</Td>
                    <Td>{vecinos.email}</Td>
                    <Td>
                        <HStack>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getProducts().then(res => {
            setProducts(res.data)
        })
    }, [])


    return (
        <Grid background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(0,212,255,1) 65%, rgba(0,212,255,1) 82%)">
        <Container maxW="lx">
                <Heading as="h1" size="2xl" color="orange" textAlign="center"> Listado de Clientes </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/menuPrincipal')}>Volver</Button>
                <Stack spacing={4} mt="10">
                <Box bg="white" w='100%' p={4} borderRadius='lg' borderWidth='1px'>
                    <Table variant="striped" size='md'>
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>
                                <Td>Apellido</Td>
                                <Td>Rut</Td>
                                <Td>Telefono</Td>
                                <Td>Email</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {contentTable()}
                        </Tbody>
                    </Table>
                    </Box>
                </Stack>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/ingresarVecino')}>Ingresar Vecino</Button>
        </Container>
        </Grid>
    )
}

export default listado
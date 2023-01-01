import { useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
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
        <>
            <Container maxW="container.md">
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de Clientes </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/menuPrincipal')}>Volver</Button>
                <Stack spacing={4} mt="10">
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
                </Stack>
            </Container>
        </>

    )
}

export default listado
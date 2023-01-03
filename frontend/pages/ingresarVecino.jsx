import { Button, Box, Grid, Container, Heading, Stack, Input, FormControl, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'
import { ingresarVecino } from '../data/products'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const postVecino = () => {

    const router = useRouter()

    const [vecino, setVecino] = useState({
        nombre: '',
        apellido: '',
        rut: '',
        telefono: '',
        email: '',
        deuda: ''
    })

    const handleChange = (e) => {
        setVecino({
            ...vecino,
            [e.target.name]: e.target.value
        })
        console.log(vecino)
    }

    const submitVecino = (e) => {
        e.preventDefault()
        ingresarVecino(vecino).then(res=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: 'Vecino ingresado',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }

return (
<Grid background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(0,212,255,1) 65%, rgba(0,212,255,1) 82%)">
<Container maxW="sm" mt={1}>

    <Heading as="H1" textAlign={"center"} size="2xl" color={"orange"}>Ingresar Vecino</Heading>
    <Button colorScheme="blue" mt="10" mb="5" onClick={() => router.push('/menuPrincipal')}>Volver</Button>
    <Box bg="white" mt="5" w='100%' p={4} borderRadius='lg' borderWidth='1px'>
    <Stack spacing = {4} mt = {1}>
        <FormControl id = "nombre">
            <FormLabel>Nombres</FormLabel>
            <Input type = "text" placeHolder = "Nombre" name = "nombre" onChange={handleChange}></Input>
        </FormControl>
        <FormControl id = "apellido">
            <FormLabel>Apellidos</FormLabel>
            <Input type = "text" placeHolder = "Apellidos" name = "apellido" onChange={handleChange}></Input>
        </FormControl>
        <FormControl id = "rut">
            <FormLabel>Rut</FormLabel>
            <Input type = "text" placeHolder = "RUT" name = "rut" onChange={handleChange}></Input>
        </FormControl>
        <FormControl id = "telefono">
            <FormLabel>Telefono</FormLabel>
            <Input type = "text" placeHolder = "+56912345678" name = "telefono" onChange={handleChange}></Input>
        </FormControl>
        <FormControl id = "email">
            <FormLabel>E-mail</FormLabel>
            <Input type = "email" placeHolder = "ejemplo@gmail.com" name = "email" onChange={handleChange}></Input>
        </FormControl>
        <FormControl id = "deuda">
            <FormLabel>Deuda</FormLabel>
            <Input type = "number" placeHolder = "Deuda" name = "deuda" onChange={handleChange}></Input>
        </FormControl>
        <Button colorScheme="blue" mt = {10} mb = {10} onClick = {submitVecino}>Ingresar Vecino</Button>
    </Stack>
    </Box>
</Container>
</Grid>
)}

export default postVecino
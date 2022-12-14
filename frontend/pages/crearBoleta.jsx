import { Button, Box, Container, Grid, Heading, Stack, Input, FormControl, FormLabel } from '@chakra-ui/react'
import { useState as state } from 'react'
import { createBoletas } from '../data/boleta'
import  router  from 'next/router'
import Swal from 'sweetalert2'

const crearBoleta = () => {


    const [boletas, setBoleta] = state({
        tipoBoleta: '',
        montoBoleta: '',
        fechaBoleta: ''
    })

    const handleChange = (e) => {
        setBoleta({
            ...boletas,
            [e.target.name]: e.target.value
        })
    }

    const submitBoleta = (e) => {
        e.preventDefault()
        createBoletas(boletas).then(res=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: 'Boleta Creada',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }

return (
<Grid background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(0,212,255,1) 65%, rgba(0,212,255,1) 82%)">
<Container maxW="sm" mt={10}>
    <Heading as="H1" textAlign={"center"} size="2xl" color={"orange"}>Crear Boleta</Heading>
    <Button colorScheme="blue" mt="10" mb="5" onClick={() => router.push('/menuPrincipal')}>Volver</Button>
    <Box bg="white" mt="5" w='100%' p={4} borderRadius='lg' borderWidth='1px'>
    <Stack spacing = {4} mt = {4}>
        <FormControl id = "tipoBoleta">
            <FormLabel>Tipo Boleta</FormLabel>
            <Input type = "text" placeHolder = "Nombre" name = "tipoBoleta" onChange={handleChange}></Input>
        </FormControl>
        <FormControl id = "montoBoleta">
            <FormLabel>Monto de Boleta</FormLabel>
            <Input type = "int" placeHolder = "Monto" name = "montoBoleta" onChange={handleChange}></Input>
        </FormControl>
        <FormControl id = "fechaBoleta">
            <FormLabel>Mes y Año</FormLabel>

            <Input type = "text" placeHolder = "DD/MM/YYYY" name = "fechaBoleta" onChange={handleChange}></Input>
        </FormControl>
        <Button colorScheme="blue" mt = {10} mb = {10} onClick = {submitBoleta}>Crear</Button>
    </Stack>
</Box>
</Container>
</Grid>
)}

export default crearBoleta
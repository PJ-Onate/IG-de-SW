import { Button, Container, Heading, HStack, Stack, Input, FormControl, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'
import { createBoletas } from '../data/boleta'

const crearBoleta = () => {
    const [boletas, setBoleta] = useState({
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
            console.log(res)
        })
    }

return (

<Container maxW="container.x1" mt={10}>

    <Heading as="H1" textAlign={"center"} size="2xl" color={"blue"}>Crear Boleta</Heading>
    <Stack spacing = {4} mt = {10}>
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
            <Input type = "text" placeHolder = "Fecha" name = "fechaBoleta" onChange={handleChange}></Input>
        </FormControl>                
    </Stack>
    <Button colorScheme="blue" mt = {10} mb = {10} onClick = {submitBoleta}>Crear Boleta</Button>


</Container>
)}

export default crearBoleta
import { useState } from 'react'
import { getBoleta, updateBoleta } from './data/boleta'
import {Button, Container, Heading, HStack, Stack} from "@chakra-ui/react"
import InputForm from "./components/InputForm"
import TextareaInput from "./components/textAreaInput"


export const getServerSideProps = async (context) => {
    const response = await getBoletas(context.query.boleta)
    return {
        props:{
            boletas: response.data
        }
    }
}


const editar = ({boleta}) => {
    const [boletas, setBoletas] = useState(boleta)

    const handleChange = (e) => {
        setBoleta({
            ...boletas,
            [e.target.name]: e.target.value
        })
    }
}

    const submitBoleta = (e) => {
        e.preventDefault()
        createBoletas(boletas).then(res=>{
            console.log(res)
        })
    }

    return(
        <Container maxW="container.x1" mt={10}>
            <Heading as="H1" textAlign={"center"} size="2xl" color={"blue"}>Editar Boleta</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label = "Tipo" placeHolder = "Tipo Producto" name = "tipoBoleta" handleChange={handleChange} type = "text"></InputForm>
                <HStack>
                    <InputForm label = "Monto" placeHolder = "Monto Producto" name = "montoBoleta" handleChange={handleChange} type = "number"></InputForm>
                    <InputForm label = "Fecha" placeHolder = "Mes y Año" name = "fechaBoleta" handleChange={handleChange} type = "text"></InputForm>
                </HStack>
            </Stack>
        </>
    )
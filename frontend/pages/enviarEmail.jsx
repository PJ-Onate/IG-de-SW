import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Flex, Grid, Box, Container, Heading, HStack, Stack, Text, Input, Textarea, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'


const enviarEmail = () => {

    const router = useRouter();
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_email_envio', 'template_psex14h', form.current, 'g6S4lqxg0Fe1Db9zs')
        .then((result) => {
            Swal.fire({
                position: "center",
                icon: 'success',
                title: 'Email Enviado Correctamente',
                showConfirmButton: false,
                timer: 1500
              })
        }, (error) => {
            Swal.fire({
                position: "center",
                icon: "error",
                title: 'Ocurrio un error',
                showConfirmButton: false,
                timer: 1500
            })
        });
    };

  return (
    <Grid background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(0,212,255,1) 65%, rgba(0,212,255,1) 82%)">
    <Container maxW="sm" centerContent>
<form ref={form} onSubmit={sendEmail}>
<Heading as="H1" textAlign={"center"} size="2xl" color={"orange"}>Contactenos!</Heading>
<Heading as="H2" textAlign={"center"} size="md" color={"orange"}>Formulario de contacto con administrador</Heading>
<Button colorScheme="blue" mt="5" mb="5" onClick={()=>router.push('./menuPrincipal')}>Volver</Button>
<Box bg="white" mt="5" w='100%' p={4} borderRadius='lg' borderWidth='1px'>
<Heading as="H2" textAlign={"left"} size="sm" color={"black"}>Ingresa tu nombre</Heading>
<Input label="Nombre" name="to_name" placeholder="Alberto Gutierrez" type="text"/>
<Heading as="H2" textAlign={"left"} size="sm" color={"black"}>Ingresa tu correo</Heading>
<Input label="Nombre" name="from_name" placeholder="ejemplo@gmail.com" type="email"/>
<Heading as="H2" textAlign={"left"} size="sm" color={"black"}>Mensaje</Heading>
<Textarea label="Mensaje" name="message" placeholder='Mensaje' type="textarea"></Textarea>
<Flex minWidth='max-content' alignItems='center' gap='2'>
    <Spacer />
<Button type="submit" colorScheme="blue" mt="5" mb="5" value="Send">Enviar</Button>
</Flex>
</Box>
</form>
</Container>
</Grid>
)}

export default enviarEmail
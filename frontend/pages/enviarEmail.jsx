import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Box, Container, Heading, HStack, Stack, Text, Input, Textarea } from '@chakra-ui/react'
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
    <Container maxW="container.sm" centerContent>
<form ref={form} onSubmit={sendEmail}>
<Heading as="H1" textAlign={"center"} size="2xl" color={"blue"}>Contactenos!</Heading>
<Heading as="H2" textAlign={"center"} size="md" color={"blue"}>Formulario de contacto con administrador</Heading>
<Button colorScheme="blue" mt="20" mb="10" onClick={()=>router.push('./menuPrincipal')}>Volver</Button>

<Heading as="H2" textAlign={"left"} size="sm" color={"blue"}>Ingresa tu nombre</Heading>
<Input label="Nombre" name="to_name" placeholder="Alberto Gutierrez" type="text"/>
<Heading as="H2" textAlign={"left"} size="sm" color={"blue"}>Ingresa tu correo</Heading>
<Input label="Nombre" name="from_name" placeholder="ejemplo@gmail.com" type="email"/>
<Heading as="H2" textAlign={"left"} size="sm" color={"blue"}>Mensaje</Heading>
<Textarea label="Mensaje" name="message" placeholder='Mensaje' type="textarea"></Textarea>
<Button type="submit" colorScheme="blue" mt="20" mb="10" value="Send">Enviar</Button>
</form>
</Container>
)}

export default enviarEmail
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Container, Heading, HStack, Stack, Text, Input, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Spinner } from '@chakra-ui/react'

const enviarEmail = () => {

    const router = useRouter();
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_email_envio', 'template_psex14h', form.current, 'g6S4lqxg0Fe1Db9zs')
        .then((result) => {
            console.log(result.text);
            console.log("mensaje enviado");
        }, (error) => {
            console.log(error.text);
            console.log("no se envio papu")
        });
    };

  return (
    <>
<Container maxW="container.md">
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
</>
)}

export default enviarEmail
import React from 'react'
import { Button, Stack, Input } from '@chakra-ui/react'

const InputStack = ({type, value, placeholder, consolemsg, imprimir}) => {
  return (
      <Stack spacing={3}>
        <Button colorScheme={"blue"} onClick={() => imprimir(consolemsg)} size="md">Ingresar</Button>
      </Stack>
  )
}

export default InputStack

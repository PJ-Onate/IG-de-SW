import React from 'react'
import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'

const TextareaInput = ({name, handleChange, label, placeholder}) => {
  return (
      <FormControl id={name}>
        <FormLabel>{label}</FormLabel>
        <Input placeholder={placeholder} name={name} onChange={handleChange} />
      </FormControl>
  )
}

export default TextareaInput
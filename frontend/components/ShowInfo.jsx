import React from 'react'
import { HStack, Text } from '@chakra-ui/react'
import axios from 'axios'

const ShowInfo = ({ value, color, tag }) => {
    return (
        <HStack>
            <Text fontWeight={"bold"} color={color}>{tag}: </Text>
            <Text>{value}</Text>
        </HStack>
    )
}

export default ShowInfo

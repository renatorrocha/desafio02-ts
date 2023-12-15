import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ContaInfo() {
  return (
    <>
      <Text fontSize={'3xl'} fontWeight={'bold'}>
        Informações da conta
      </Text>
      <Link to={'/conta/1'}>
        <Text fontSize={'xl'}>Conta</Text>
      </Link>
    </>
  )
}

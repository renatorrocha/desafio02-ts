import { Box, Center, Input } from '@chakra-ui/react'
import ButtonForm from './ButtonForm'
import { login } from '../services/login'
import { useState } from 'react'

export const Card = () => {
  const [email, setEmail] = useState<string>('')

  return (
    <Box backgroundColor="white" borderRadius="25px" padding="15px">
      <Center>
        <h1>Faça seu login</h1>
      </Center>
      <Input
        placeholder="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        type="email"
      />
      <Input placeholder="password" type="password" />
      <Center>
        <ButtonForm text="Login" action={() => login(email)} />
      </Center>
    </Box>
  )
}

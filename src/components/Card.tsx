import { Box, Center, Input } from '@chakra-ui/react'
import ButtonForm from './ButtonForm'
import { login } from '../services/login'

interface ICard {
  text: string
}

export const Card = ({ text }: ICard) => {
  return (
    <Box backgroundColor="white" borderRadius="25px" padding="15px">
      <Center>
        <h1>{text}</h1>
      </Center>
      <Input placeholder="email" type="email" />
      <Input placeholder="password" type="password" />
      <Center>
        <ButtonForm text="Login" action={login} />
      </Center>
    </Box>
  )
}

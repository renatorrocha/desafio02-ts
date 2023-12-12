import { Center, Input, Box } from '@chakra-ui/react'
import { login } from './services/login'
import { Layout } from './components/Layout'
import ButtonForm from './components/ButtonForm'

function App() {
  return (
    <Layout>
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <ButtonForm text="Login" action={login} />
          </Center>
        </Box>
      </Box>
    </Layout>
  )
}

export default App

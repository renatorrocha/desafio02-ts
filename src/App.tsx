import { Center, ChakraProvider, Input, Box, Button } from '@chakra-ui/react'
import { login } from './services/login'
import { Layout } from './components/Layout'

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
            
          </Center>
        </Box>
      </Box>
    </Layout>
  )
}

export default App

import { Box, ChakraProvider } from '@chakra-ui/react'
import { Header } from './Header'

export const Layout = ({ children }: any) => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor={'purple.100'}>
        <Header />
        {children}
      </Box>
    </ChakraProvider>
  )
}

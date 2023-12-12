import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: any) => {
  return (
    <ChakraProvider>
      <Header />
      {children}
      <Footer />
    </ChakraProvider>
  )
}

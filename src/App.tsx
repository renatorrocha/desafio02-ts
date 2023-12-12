import { Box } from '@chakra-ui/react'

import { Layout } from './components/Layout'

import { Card } from './components/Card'

export default function App() {
  return (
    <Layout>
      <Box minHeight="100vh" backgroundColor="purple.100" padding="25px">
        <Card text="Faça seu login" />
      </Box>
    </Layout>
  )
}

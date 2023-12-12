import { Center, Heading, Highlight } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Center h={'100px'}>
      <Heading>
        <Highlight
          query="Dio"
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'purple.100' }}
        >
          Dio Login
        </Highlight>
      </Heading>
    </Center>
  )
}

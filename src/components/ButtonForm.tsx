import { Button } from '@chakra-ui/react'

interface Props {
  text: string
  action: () => void
}

export default function ButtonForm({ text, action }: Props) {
  return (
    <Button
      onClick={action}
      colorScheme="purple"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      Button
    </Button>
  )
}

import { Button } from '@chakra-ui/react'

interface IButtonForm {
  text: string
  action: () => void
}

export default function ButtonForm({ text, action }: IButtonForm) {
  return (
    <Button
      onClick={action}
      colorScheme="purple"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      {text}
    </Button>
  )
}

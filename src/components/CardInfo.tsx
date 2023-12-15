import { Box, Text } from '@chakra-ui/react'

interface IcardInfo {
  title: string
  subtitle: string
}

export default function CardInfo({ title, subtitle }: IcardInfo) {
  return (
    <Box
      backgroundColor="white"
      minHeight="120px"
      padding={8}
      borderRadius="25px"
    >
      <Text fontSize={'2xl'} fontWeight="bold">
        {title}
      </Text>
      <Text fontSize={'xl'}>{subtitle}</Text>
    </Box>
  )
}

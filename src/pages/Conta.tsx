import { Center, SimpleGrid, Spinner } from '@chakra-ui/react'
import CardInfo from '../components/CardInfo'
import { useEffect, useState } from 'react'
import { api } from '../api'
import { useNavigate, useParams } from 'react-router-dom'

interface IUserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

export default function Conta() {
  const [userData, setUserData] = useState<null | IUserData>()
  const actualData = new Date()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api
      setUserData(data)
    }

    getData()
  }, [])

  if (userData && id !== userData.id) {
    navigate('/')
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size={'xl'} color="black" />
          </Center>
        ) : (
          <>
            <CardInfo
              title={`Bem vindo ${userData?.name}`}
              subtitle={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} / ${actualData.getHours()}:${actualData.getMinutes()}`}
            />
            <CardInfo title="Saldo:" subtitle={`R$ ${userData.balance}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  )
}

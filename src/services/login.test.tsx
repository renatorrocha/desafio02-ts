import { login } from './login'
import { api } from '../api'

describe('login', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert
  const mockEmail = 'renatorocha@gmail.com'

  it('Deve exibir um alert com boas vindas caso o email seja valido.', async () => {
    await login(mockEmail)
    expect(mockAlert).toHaveBeenCalledWith(`Boas Vindas ${mockEmail}!`)
  })

  it('Não deve exibir a mensagem de boas vindas sem o email.', () => {
    login(mockEmail)
    expect(mockAlert).not.toHaveBeenCalledWith('Boas Vindas')
  })

  it('Deve exibir um erro caso o email seja invalido', async () => {
    await login('email@invalido.com')
    expect(mockAlert).toHaveBeenCalledWith('Email invalido')
  })
})

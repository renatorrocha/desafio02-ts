const conta = {
  email: 'renatorocha@gmail.com',
  password: '123456',
  name: 'renato rocha',
  balance: 2000.0,
  id: '1'
}

export const api = new Promise(resolve => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})

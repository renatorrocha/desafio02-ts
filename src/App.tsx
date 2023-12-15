import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Conta from './pages/Conta'
import { Layout } from './components/Layout'
import ContaInfo from './pages/ContaInfo'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conta/:id" element={<Conta />} />
          <Route path="/infoConta" element={<ContaInfo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

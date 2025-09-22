import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage'
import { CheckOutPage } from './pages/CheckOutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path="/checkout" element={<CheckOutPage/>} />
      <Route path="/orders" element={<OrdersPage/>} />
      <Route path="/tracking" element={<TrackingPage/>} />
    </Routes>
  )
}

export default App

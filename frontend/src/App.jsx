import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
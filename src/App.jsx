import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Login from './pages/login/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
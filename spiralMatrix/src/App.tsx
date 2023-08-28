import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Logout from './components/Logout'
import './App.css'

function App() {

  return (
    <div>
        <h1>Application</h1>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App

import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import './App.css';

export const Ctx = createContext();
function App() {
  const [user, setUser] = useState('');
  return (
    <div className='row'>
      <div className='col'>
        <Navbar user={user} />
      </div>
    <div className='row bg-img d-flex min-vh-100'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome/>}/>
            <Route
              path='/login'
              element={
                <Ctx.Provider value={{ user, setUser }}>
                  <Login />
                </Ctx.Provider>
              }
            />
            <Route path='/logout' element={<Logout />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<h3> Not found.. </h3>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;

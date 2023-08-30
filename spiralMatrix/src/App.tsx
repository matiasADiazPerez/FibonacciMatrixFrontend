import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import './App.css';

export const Ctx = createContext();
function App() {
  const [user, setUser] = useState('');
  return (
    <div className='row justify-content-center'>
      <div className='col'>
        <Navbar user={user} />
      </div>
      <div className='row justify-content-md-center'>
        <BrowserRouter>
          <Routes>
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
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;

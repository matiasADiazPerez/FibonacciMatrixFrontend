import React, {useEffect, useState} from 'react';

export default function Navbar(props) {
    const [user, setUser] = useState(props.user.name);
    console.log(props);
    useEffect(()=> {
        if (!props.user.name) {
            setUser(localStorage.getItem('user'));
            
        } else {
            setUser(props.user.name)
        }

    
    },[props]);
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='/'>
        Fibonacci Spiral Matrix
      </a>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='/dashboard'>
              Dashboard 
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/logout'>
              logout
            </a>
          </li>
        </ul>
      </div>
      <span className='col-4'>{user ? `Welcome ${user}` : ''}</span>
    </nav>
  );
}

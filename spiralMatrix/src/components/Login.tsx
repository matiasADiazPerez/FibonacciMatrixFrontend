import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    try {
      const body = {
        id: +email,
        password: pass,
      };
      console.log(body);
      const rawres = await fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      const res = await rawres.json();
      localStorage.setItem('access', res.Payload);
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={login}>
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'>User mail</label>
        <input
          type='text'
          className='form-control'
          id='exampleInputEmail1'
          value={email}
          autoComplete='off'
          aria-describedby='emailHelp'
          placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputPassword1'>Password</label>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          value={pass}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}

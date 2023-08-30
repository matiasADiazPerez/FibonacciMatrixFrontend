import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Ctx } from '../App';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [err, setErr] = useState('');
  const { user, setUser } = useContext(Ctx);
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email: email,
        password: pass,
      };
      console.log(body);
      const rawres = await fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      const res = await rawres.json();
      if (rawres.status !== 200) {
        setErr(res);
        return;
      }
      localStorage.setItem('access', res.Payload.token);
      console.log(res.Payload.user);
      setUser(res.Payload.user);
      localStorage.setItem('user', res.Payload.user.name);
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='container col-3 align-center'>
      <h2>Login</h2>
      <div>{err ? <>Something went wrong, try again</> : <></>}</div>
      <form onSubmit={login} className='align-center'>
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
      <br/>
        <button type='submit' className='Submit'>
          Submit
      </button>
      </form>
    </div>
  );
}

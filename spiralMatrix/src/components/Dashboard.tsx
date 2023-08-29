import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import MatrixTable from './MatrixTable'
export default function Dashboard() {
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);
  const [matrixValues, setMatrixValues] = useState([]);
  const token = localStorage.getItem('access');
  if (!token) {
    return <Navigate to='/login' replace />;
  }
    const setMatrix = (e) => {
        e.preventDefault();
        setMatrixValues([cols,rows]);
    }

  return (
      <div>
          <div>

    <form onSubmit={setMatrix}>
      <div className='form-group'>
        <label htmlFor='colsInput'>cols</label>
        <input
          type='number'
          className='form-control'
          id='colsInput'
          value={cols}
          autoComplete='off'
          onChange={(e) => setCols(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='rowsInput'>rows</label>
        <input
          type='number'
          className='form-control'
          id='rowsInput'
          value={rows}
          placeholder='Password'
          onChange={(e) => setRows(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
      </div>
      <div>
          <MatrixTable matrixValues={matrixValues} />
      </div>
    </div>
  );
}

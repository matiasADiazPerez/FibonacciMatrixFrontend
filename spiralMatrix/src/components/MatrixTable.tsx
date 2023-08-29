import React, { useState, useEffect } from 'react';
const getMatrix = async (matrixValues) => {
    try {
    console.log(matrixValues.length);
    if (matrixValues.length !== 2) {
        return {};
    }
    const cols = matrixValues[0];
    const rows = matrixValues[1]
    const raw = await fetch(`http://localhost:8080/spiral?cols=${cols}&rows=${rows}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application-json',
        Authorization: 'Bearer ' + localStorage.getItem('access'),
      },
    });
    const res = await raw.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
export default function MatrixTable(props) {
  const [res, setRes] = useState();
  useEffect(() => {
    getMatrix(props.matrixValues).then((r) => setRes(r));
  }, [props]);
  if (!res || !res.Payload) {
    return <h2>Insert cols and rows</h2>;
  }
  const items = [];
  for (const row of res.Payload) {
    const item = [];
    for (const val of row) {
      item.push(<td>{val}</td>);
    }
    items.push(<tr>{item}</tr>);
  }
  return (
    <table className='table table-bordered'>
      <tbody>{items}</tbody>
    </table>
  );
}

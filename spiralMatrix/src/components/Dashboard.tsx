import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
  const Matrix = () => {
      const [res, setRes] = useState();
      const getMatrix = async () => {
      
      try {
        const raw = await fetch("http://localhost:8080/spiral?cols=3&rows=3", {
            method: "GET",
            headers: {
              "Content-Type": "application-json",
              "Authorization": "Bearer " + localStorage.getItem("access")
            }
        });
        const res = await raw.json();
        return res;
      } catch (err) {
        console.log(err);
      }
      }
      useEffect(()=>{
          getMatrix().then(r => setRes(r))
      },[])
      if (!res) {
        return <h2>Loading...</h2>
      }
      console.log(res);
         const items = [];
        for (const row of res.Payload) {
            const item = [];
            for (const val of row) {
                item.push(<td>{val}</td>)
            }
            items.push(<tr>{item}</tr>)
        }
        return(
          <table className="table table-bordered">
              <tbody> 
                  {items}
              </tbody>
       </table>
        );
  }
export default function Dashboard() {
  const token = localStorage.getItem("access");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  return(
      <div>
          <Matrix/>
      </div>
  );
}

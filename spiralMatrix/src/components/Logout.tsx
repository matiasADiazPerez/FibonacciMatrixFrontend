import { Navigate } from 'react-router-dom';

export default function Logout() {
  localStorage.removeItem("access")
  return <Navigate to="/login" replace />;
}

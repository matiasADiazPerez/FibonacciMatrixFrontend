import { Navigate } from 'react-router-dom';

export default function Logout() {
  localStorage.removeItem('access');
  localStorage.removeItem('user');
  return <Navigate to='/login' replace />;
}

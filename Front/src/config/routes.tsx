import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Login from '../pages/login'
import Mainwb from '../pages/main'
import Todaywb from '../pages/today'
import Pastwb from '../pages/past'
import Allwb from '../pages/all'
import Storywb from '../pages/story'
import Test from '../pages/test'
import { getToken } from '../Repo/auth';

type Props = {
  children: JSX.Element
}
const ProtectedRoute = ({children}: Props) => {
  const location = useLocation()
  const token = getToken()
  if (token == null){
    console.log('backTo = ', location.pathname)
    return  <Navigate to="/login" replace state={{backTo: location.pathname}}/>;
  }
  return children;
} 
  
  

const AppRoutes = () => {
    return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login/>} />
        <Route path="main" element={<ProtectedRoute><Mainwb/></ProtectedRoute>} />
        <Route path="today" element={<ProtectedRoute><Todaywb/></ProtectedRoute>}/>
        <Route path="past" element={<ProtectedRoute><Pastwb/></ProtectedRoute>} />
        <Route path="all" element={<ProtectedRoute><Allwb/></ProtectedRoute>} />
        <Route path="/story/:id"  element={<ProtectedRoute><Storywb/></ProtectedRoute>} />
        <Route path="test" element={<Test/>} />
      </Routes>
    </Router>
    );
  };
  
  export default AppRoutes;
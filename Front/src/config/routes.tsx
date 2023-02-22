import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login'
import Mainwb from '../pages/main'

const AppRoutes = () => {
    return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login/>} />
        <Route path="main" element={<Mainwb/>} />
      </Routes>
    </Router>
    );
  };
  
  export default AppRoutes;
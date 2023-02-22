import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login'


const AppRoutes = () => {
    return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </Router>
    );
  };
  
  export default AppRoutes;
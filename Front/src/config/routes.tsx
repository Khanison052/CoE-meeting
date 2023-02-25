import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login'
import Mainwb from '../pages/main'
import Todaywb from '../pages/today'
import Pastwb from '../pages/past'
import Allwb from '../pages/all'
import Storywb from '../pages/story'
const AppRoutes = () => {
    return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login/>} />
        <Route path="main" element={<Mainwb/>} />
        <Route path="today" element={<Todaywb/>}/>
        <Route path="past" element={<Pastwb/>} />
        <Route path="all" element={<Allwb/>} />
        <Route path="story" element={<Storywb/>} />
      </Routes>
    </Router>
    );
  };
  
  export default AppRoutes;
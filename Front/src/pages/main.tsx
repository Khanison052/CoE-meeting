import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Form from "../Component/form";
import './main.css';
import Userrole from "../model/role";
import Repo from "../Repo";

function Main(){
    const [UserRole, setUserRole] = useState<Userrole[]>([]);

    const fetchUserRole = async() => {
      const result = await Repo.UserRole.getuser()
      console.log(result)
      if (result) {
        setUserRole([result]);
      }}
      console.log(UserRole)
    useEffect(() => {
        fetchUserRole();
    }, []);

    return (
        <>
        <Box className={'main'}>ยินดีต้อนรับเข้าสู่ CoE E-meeting</Box>
        {UserRole.map((UserRole) => (
                <Form userRole={UserRole}></Form>
            ))}
        </>
      );
    
}

export default Main;

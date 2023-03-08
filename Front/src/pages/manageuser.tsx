import Form from "../Component/form"
import Userrole from "../model/role"
import userResults from "../model/User"
import Repo from "../Repo"
import { useState, useEffect} from 'react'
import UserCard from "../Component/userCard"
import {Box} from "@mui/material";

function ManageUser(){
    
    const [UserRole, setUserRole] = useState<Userrole[]>([])

    const fetchUserRole = async () => {
        const result = await Repo.UserRole.getuser()
        console.log(result)
        if (result) {
            setUserRole([result]);
        }
    }

    useEffect(() => {
        fetchUserRole();
    }, []);


    return (
        <>
            {UserRole.map((UserRole) =>(
                <Form userRole={UserRole}></Form>
            ))}
            <Box className={'title'} >จัดการสมาชิก</Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                <UserCard></UserCard>
            </Box>

        </>
    )
}

export default ManageUser
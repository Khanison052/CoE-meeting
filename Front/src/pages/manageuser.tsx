import Form from "../Component/form"
import Userrolecard from "../Component/userCard"
import Userrole from "../model/role"
import Repo from "../Repo"
import { useState, useEffect } from 'react'
import { Box } from "@mui/material"

function ManageUser() {

    const [UserRole, setUserRole] = useState<Userrole[]>([]);
    const [UserRolelist, setUserRoleList] = useState<Userrole[]>([])

    const fetchUserRole = async () => {
        const result = await Repo.UserRole.getuser()
        console.log(result)
        if (result) {
            setUserRole([result]);
            console.log()
        }
    }
    const fetchUserRolelist = async () => {
        const result = await Repo.UserRole.getAll()
        console.log(result)
        if (result) {
            setUserRoleList(result);
        }
    }

    const onUpdateUserRole = (userRole: Userrole) => {
        setUserRoleList((prevUserRoleList) =>
            prevUserRoleList.map((item) => (item.id === userRole.id ? userRole : item))
        );
    };




    useEffect(() => {
        fetchUserRole();

    }, []);
    useEffect(() => {
        fetchUserRolelist();
        console.log(UserRolelist);
    }, []);
    console.log(UserRolelist)

    return (
        <>  
            <Box className={"title"}>สมาชิก</Box>
            {UserRole.map((UserRole) => (
                <Form userRole={UserRole}></Form>
            ))}

            {UserRolelist.map((UserRolelist) => (
                UserRolelist.username !== 'admin' && (
                    <Userrolecard
                        UserRole={UserRolelist}
                        onUpdateUserRole={onUpdateUserRole}
                    />
                )))}
        </>
    )
}

export default ManageUser
import Form from "../Component/form"
import Userrolecard from "../Component/userCard"
import Userrole from "../model/role"
import Repo from "../Repo"
import { useState, useEffect } from 'react'
import { Box, Button, Dialog, DialogTitle, IconButton } from "@mui/material"
import { Add, Close } from "@mui/icons-material"
import Userform from "../Component/userform"

function ManageUser() {

    const [UserRole, setUserRole] = useState<Userrole[]>([]);
    const [UserRolelist, setUserRoleList] = useState<Userrole[]>([])
    const [createFormPopup, setCreateFormPopup] = useState(false);

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
    const onCreate = async (ann: any) => {
        const user = ann;
        const { department: { title, ...rest } } = user;
        const updatedUser = { ...user, department: { connect: [{ id: 1 }] } };
        updatedUser.role = { connect: [{ id: 1 }] };

        console.log(updatedUser)
        await Repo.UserRole.create(updatedUser)
        fetchUserRolelist()
        setCreateFormPopup(false)
    }



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
            <Box className={"title"}>สมาชิก
                <Button sx={{ m: 2, float: 'right' }} variant="contained" onClick={() => setCreateFormPopup(true)}>
                    <Add /> เพิ่มสมาชิก
                </Button>
            </Box><br />
            {UserRole.map((UserRole) => (
                <Form userRole={UserRole}></Form>
            ))}

            {UserRolelist.map((UserRolelist) => (
                UserRolelist.username !== 'admin' && (
                    <Userrolecard
                        UserRole={UserRolelist}
                        onUpdateUserRole={fetchUserRolelist}
                    />
                )))}


            <Dialog PaperProps={{ sx: { minWidth: "70%" } }} open={createFormPopup} onClose={() => setCreateFormPopup(false)}>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    เพิ่มสมาชิก
                    <IconButton onClick={() => setCreateFormPopup(false)}>
                        <Close />
                    </IconButton>
                </DialogTitle>
                <Userform Userrole={{}} callbackFn={onCreate}></Userform>
            </Dialog>
        </>
    )
}

export default ManageUser
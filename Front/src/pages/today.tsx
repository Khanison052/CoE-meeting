import { useState, useEffect, ChangeEvent } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Form from "../Component/form";
import TopicCard from "../Component/card"
import UserResult from '../model/User';
import Repo from "../Repo";
import './main.css';
import Userrole from "../model/role";
function Today() {
    const [userResultList, setUserResultList] = useState<UserResult[]>([])
    const [UserRole, setUserrole] = useState<Userrole[]>([])
    const [open, setOpen] = useState(false);
    const [modalText, setModalText] = useState('');
    const fetchUserResultList = async () => {
        const openModal = (text: string) => {
            setModalText(text);
            setOpen(true);
        };
        const result = await Repo.UserResults.getAll()
        if (result) {
            if (userResultList.length) {
                setUserResultList([])
            }
            setUserResultList(result)
        }


    }
    const fetchUserRole = async () => {
        const result = await Repo.UserRole.getuser()
        if (result) {
            if (UserRole.length) {
                setUserrole([])
            }
            setUserrole(result)
        }
    }
    const onUpdateUserResult = (userResult: UserResult) => {
        setUserResultList(prevUserResultList => prevUserResultList.map(item => item.id === userResult.id ? userResult : item))
    }


    useEffect(() => {
        fetchUserResultList();
        fetchUserRole();
    }, [userResultList])


    return (
        <>
            <Form userRole={UserRole}></Form>
            <Box className={'title'} >การประชุมที่วันนี้</Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                {userResultList.map((userResult, index) =>
                    <Box key={index} sx={{ height: '200px', margin: '1px' }}>
                        <TopicCard userResult={userResult} onUpdateUserResult={onUpdateUserResult} />
                    </Box>
                )}
            </Box>

        </>
    )
};

export default Today;
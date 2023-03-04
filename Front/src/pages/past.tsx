import { useState, useEffect, ChangeEvent } from "react";
import { Button, Dialog, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Form from "../Component/form";
import TopicCard from "../Component/card"
import UserResult from '../model/User';
import './main.css';
import Repo from "../Repo";

function Past() {
    const [userResultList, setUserResultList] = useState<UserResult[]>([])
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
    const onUpdateUserResult = (userResult: UserResult) => {
        // update userResult in userResultList
        setUserResultList(prevUserResultList => prevUserResultList.map(item => item.id === userResult.id ? userResult : item))
    }


    useEffect(() => {
        fetchUserResultList()
    }, [userResultList])

    return (
        <>
            <Form></Form>
            <Box className={'title'} >การประชุมที่ผ่านมาแล้ว</Box>
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
export default Past;
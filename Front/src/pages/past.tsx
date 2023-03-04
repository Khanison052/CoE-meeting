import { useState, useEffect, ChangeEvent } from "react";
import { Button, Dialog, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Form from "../Component/form";
import TopicCard from "../Component/card"
import UserResult from '../model/User';
import './main.css';
import Repo from "../Repo";
function Past(){
    const [userResultList, setUserResultList] = useState<UserResult[]>([])

    const fetchUserResultList = async () => {
       

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
        setUserResultList(prevUserResultList => prevUserResultList.map(item => item.id === userResult.id ? userResult : item))}
    
      useEffect(() => {
        fetchUserResultList()
      }, [userResultList])

    return (
        <>
        <Form></Form>
        <Box className={'title'} >การประชุมที่ผ่านมาแล้ว</Box>
        <Box>
        <Grid container spacing={{ xs: 10, md: 10 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 10 }}>
          {userResultList.map((userResult, index) => 
            <Grid item xs={2} sm={4} md={4} lg={3} xl={2} key={index}>
              <TopicCard userResult={userResult} onUpdateUserResult={onUpdateUserResult} />
            </Grid>
          )}
        </Grid>
        </Box></>
)}
export default Past
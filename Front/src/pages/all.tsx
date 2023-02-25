import { useState, useEffect, ChangeEvent } from "react";
import { Button, Dialog, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Add, Close } from '@mui/icons-material/';
import { useAuth } from "react-oidc-context";
import topic from "../model/topic";
import Form from "../Component/form";
import TopicCard from "../Component/card"
import './main.css';
function all(){
    console.log('main')
    return (
        <>
        <Form></Form>
        <Box className={'title'} >การประชุมทั้งหมด</Box>
        <Box><TopicCard></TopicCard></Box>
        </>
)
    }
export default all
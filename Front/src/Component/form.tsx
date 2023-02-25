import { Menu as MenuIcon, AccountCircle, ChevronLeft, Home, Campaign, Today } from "@mui/icons-material";
import { useState } from "react";
import { useAppCtx } from "../AppProvider";
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import { useNavigate, useLocation } from 'react-router-dom';
function Form(){
    const navigate = useNavigate();
    const location = useLocation();
    function Today(){navigate('/today')}
    function Past(){navigate('/past')}
    function All(){navigate('/all')}
    function Main(){navigate('/main')}


    return (
        <>
        <Box sx={{ position: 'absolute',width: '100%',height: '15%',background: '#721001'}}>
            <Typography sx={{ fontSize: 30 ,color: 'white' }}>text</Typography>
        </Box>
        <Box sx={{ background:'#A6A6A6',position:'absolute',width: '70%',height: 79,left: '30%',top: '15%'}}>
            <Typography sx={{ fontSize: 30 ,color: 'white' }} onClick={Main} >หน้าหลัก</Typography>
        </Box>
        <Box sx={{position: 'absolute',width: '30%',height: 79,left: 0,top: '15%',background: '#D9D9D9'}}>ผู้ใช้</Box>
        <Box sx={{position: 'absolute',backgroundColor: '#A6A6A6',width: 500,height: 150,left:0,top:300,display: 'flex',flexDirection: 'column',fontSize:100}}>
            menu
            </Box>
            <Box sx={{position: 'absolute',background:'#ffffff',width: 500,height: 700,left: 0,top: 450,border: 2}}>
            <Typography sx={{ fontSize: 30 ,color: 'black' }} onClick={Today} >text</Typography>
            <Typography sx={{ fontSize: 30 ,color: 'black' }} onClick={Past} >text</Typography>
            <Typography sx={{ fontSize: 30 ,color: 'black' }} onClick={All} >text</Typography></Box>
        <Box sx={{position: 'absolute',backgroundColor: '#D9D9D9',height: 150,width:1000,top:300,left:500,display: 'flex',flexDirection: 'column',fontSize:100}}>แสดง</Box>
        </>
    )
}
export default Form
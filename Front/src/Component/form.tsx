import { Menu as MenuIcon, AccountCircle, ChevronLeft, Home, Campaign } from "@mui/icons-material";
import { useState } from "react";
import { useAppCtx } from "../AppProvider";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
function Form(){


    return (
        <>
        <Box sx={{ position: 'absolute',width: 1440,height: 205,background: '#721001'}}>
            <Typography sx={{ fontSize: 30 ,color: 'white' }}>text</Typography>
        </Box>
        <Box   sx={{ background:'#A6A6A6',position:'absolute',width: 1137,height: 79,left: 545,top: 210}}>ผู้ใช้</Box>
        <Box sx={{position: 'absolute',width: 543,height: 79,left: 0,top: 210,background: '#D9D9D9'}}>hello</Box>
        <Box sx={{position: 'absolute',backgroundColor: '#A6A6A6',height: 300,top:500,padding: '10px',margin: '15px',display: 'flex',flexDirection: 'column',fontSize:100}}>
            menu
            <Box sx={{background:'#A6A6A6',width: 466,height: 200,left: 0,top: 300}}>
            <Typography sx={{ fontSize: 30 ,color: 'black' }}>text</Typography>
            <Typography sx={{ fontSize: 30 ,color: 'black' }}>text</Typography>
            <Typography sx={{ fontSize: 30 ,color: 'black' }}>text</Typography></Box>
        </Box>

        </>
    )
}
export default Form
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
        <Box sx={{ background:'#A6A6A6',position:'absolute',width: 1137,height: 79,left: 545,top: 210}}>ผู้ใช้</Box>
        <Box sx={{position: 'absolute',width: 543,height: 79,left: 0,top: 210,background: '#D9D9D9'}}>hello</Box>
        <Box sx={{position: 'absolute',backgroundColor: '#A6A6A6',width: 500,height: 150,left:0,top:300,display: 'flex',flexDirection: 'column',fontSize:100}}>
            menu
            </Box>
            <Box sx={{position: 'absolute',background:'#ffffff',width: 500,height: 700,left: 0,top: 450,border: 2}}>
            <Typography sx={{ fontSize: 30 ,color: 'black' }}>text</Typography>
            <Typography sx={{ fontSize: 30 ,color: 'black' }}>text</Typography>
            <Typography sx={{ fontSize: 30 ,color: 'black' }}>text</Typography></Box>
        <Box sx={{position: 'absolute',backgroundColor: '#D9D9D9',height: 150,width:1000,top:300,left:500,display: 'flex',flexDirection: 'column',fontSize:100}}>แสดง</Box>
        </>
    )
}
export default Form
import { Menu as MenuIcon, AccountCircle, ChevronLeft, Home, Campaign, Today, Logout } from "@mui/icons-material";
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
    function Logout(){navigate('/login')}

    return (
        <>
         <Box sx={{ position: 'absolute',width: '100%',height: '15%',background: '#721001'}}>
            <Typography sx={{ fontSize: 45 ,color: 'white' }}>เอกสารการประชุมคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์</Typography>
        </Box>

        <Box sx={{ background:'#A6A6A6',position:'absolute',width: '50%',height: '8%',left: '30%',top: '15%',border: 1, display:'flex'}}>
            <Typography sx={{ fontSize: 35 ,color: 'white',textAlign:'center', marginLeft:'75%'}} onClick={Main} >หน้าหลัก </Typography>
        </Box>
        <Box sx={{ background:'#A6A6A6',position:'absolute',width: '20%',height: '8%',left: '80%',top: '15%',border: 1, display:'flex-start'}}>
            <Typography sx={{ fontSize: 35 ,color: 'white',textAlign:'center' }} onClick={Logout} >ออกจากระบบ</Typography>
        </Box>
        <Box sx={{position: 'absolute', width: '30%',height: '8%',left: 0,top: '15%', background: '#D9D9D9' ,fontSize: 30 ,border: 1, textAlign:'left'}}>ผู้ใช้:</Box>
        <Box sx={{position: 'absolute',backgroundColor: '#A6A6A6',width: '30%',height: '9.9%',left:0,top:'23%',display: 'flex',flexDirection: 'column',fontSize:40,border: 1,textAlign:'center'}}>
            รายการ
            </Box>
            <Box sx={{position: 'absolute',background:'#ffffff',width: '30%',height: '80%',left: 0,top: '33%',border: 1}}>
            <Typography sx={{ fontSize: 30 ,color: 'black',margin:10 }} onClick={Today} >การประชุมวันนี้</Typography>
            <Typography sx={{ fontSize: 30 ,color: 'black',margin:10 }} onClick={All} >การประชุมทั้งหมด</Typography>
            <Typography sx={{ fontSize: 30 ,color: 'black',margin:10 }} onClick={Past} >การประชุมที่ผ่านมาแล้ว</Typography></Box>
        <Box sx={{position: 'absolute',backgroundColor: '#D9D9D9',height:'9.9%',width:'70%',top:'23%',left:'30.1%',display: 'flex',flexDirection: 'column',fontSize:40,border: 1,textAlign:'center'}}>แสดงรายละเอียดการประชุม</Box>
        </>
    )
}
export default Form
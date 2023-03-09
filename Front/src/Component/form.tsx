import { Menu as MenuIcon, AccountCircle, ChevronLeft, Home, Campaign, Today, Logout } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useAppCtx } from "../AppProvider";
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './form.css' ;
import Userrole from "../model/role"

interface Prop {
    userRole: Userrole;
}
function Form(props: Prop) {

    const userRole = props.userRole
    const navigate = useNavigate();
    function Today() { navigate('/today') }
    function Past() { navigate('/past') }
    function All() { navigate('/all') }
    function Main() { navigate('/main') }
    function Logout() { navigate('/login') }
    function ManageUser() { navigate('/manageuser')}
    const myArray = [userRole]
    console.log(myArray);
    console.log(userRole);


    return (
        <>
            <Box sx={{ position: 'absolute', width: '100%', height: '15%', background: '#721001', display: 'flex',flexDirection: 'row', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: '20px', top: '0%' }}>
                <img src={require("../images/logoengpsu.png")} className='image' />
                <Typography sx={{ width: '100%', fontSize: 41, color: 'white', display: 'flex', flexDirection: 'column' ,fontFamily: 'Mitr',textAlign:'center'}}>เอกสารการประชุมคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์</Typography>
            </Box>


            <Box sx={{ background: '#A6A6A6', position: 'absolute', width: '49.5%', height: '7%', left: '30%', top: '15%', borderRight: 1.7, display: 'flex' }}>
                <Typography sx={{ fontSize: 28, color: 'white', textAlign: 'center', marginLeft: '75%', display: 'flex',fontFamily: 'Prompt, sans-serif' }} onClick={Main} >หน้าหลัก </Typography>
            </Box>

            <Box sx={{ background: '#A6A6A6', position: 'absolute', width: '20.4%', height: '7%', left: '79.59%', top: '15%', border: 'none', display: 'flex-start' }}>
                <Typography sx={{ fontSize: 28, color: 'white', textAlign: 'center', display: 'flex', flexDirection: 'column',fontFamily: 'Prompt, sans-serif' }} onClick={Logout} >ออกจากระบบ</Typography>
            </Box>

            {userRole && (
                <Box sx={{ position: 'absolute', width: '30%', height: '7%', left: 0, top: '16%', background: 'white', fontSize: 25, border: 'none', textAlign: 'center' }}>
                    ผู้ใช้ : {userRole.username}
                </Box>
            )}


            <Box sx={{ position: 'absolute', backgroundColor: '#A6A6A6', width: '30%', height: '7%', left: 'none', top: '22%', display: 'flex', flexDirection: 'column', fontSize: 28, borderRight: 1.5 , textAlign: 'center' }}>
                รายการ
            </Box>

            <Box sx={{ position: 'absolute', background: '#ffffff', width: '30%', height: '100%', left: 0, top: '29%', border: 'none',borderRight:1.5, display: 'flex' , flexDirection: 'column'}}>
                <Typography sx={{ fontSize: 26, color: 'white', margin: 3.5 ,fontFamily: 'Mitr', backgroundColor: '#8c1010',borderRadius:7}} onClick={Today} >   • การประชุมวันนี้</Typography>
                <Typography sx={{ fontSize: 26, color: 'white', margin: 3.5 ,fontFamily: 'Mitr', backgroundColor: '#8c1010',borderRadius:7}} onClick={All} > • การประชุมทั้งหมด</Typography>
                <Typography sx={{ fontSize: 26, color: 'white', margin: 3.5 ,fontFamily: 'Mitr', backgroundColor: '#8c1010',borderRadius:7}} onClick={Past} > • การประชุมที่ผ่านมาแล้ว</Typography>
                {userRole.role.name == 'admin'?(<Typography sx={{ fontSize: 26, color: 'white', margin: 3.5 ,fontFamily: 'Mitr', backgroundColor: '#8c1010',borderRadius:7}} onClick={ManageUser} > • จัดการสมาชิก</Typography>):(null)}
            </Box>
            <Box sx={{ position: 'absolute', backgroundColor: '#D9D9D9', height: '7%', width: '69.97%', top: '22%', left: '30.05%', display: 'flex', flexDirection: 'column', fontSize: 28, border: 'none', textAlign: 'center',fontFamily: 'Prompt, sans-serif' }}>แสดงรายละเอียดการประชุม</Box>
        </>
    )
}
export default Form

import {IconButton, Grid, Box, Card, CardActionArea, CardContent, CardHeader, Dialog, DialogTitle, DialogContent, Typography, Tabs, Tab} from "@mui/material";
import {Close} from "@mui/icons-material";
import { useState, useEffect} from "react";
import Userdata from '../model/role';

interface UserInfo {
    userdata: Userdata;
}

function UserCard(){
    // const username = user.userdata.username
    // const email = user.userdata.email
    // const department = user.userdata.department.title

    const [popup, setPopup] = useState(false);

    return (
        <Box sx={{ position: 'relative', left: '30%', top: '150%', width: '70%', height: '30%' }}>
            
            <Card sx={{ width: 250, maxheight: 400, margin: 2 }}> 
                <CardActionArea onClick={() => setPopup(true)}>
                    <CardHeader
                        sx={{ height: '50%', fontSize: '2rem', style: {} }}
                        title='User'
                        subheader='Department'
                        //onClick={(handleClick)}
                    />
                </CardActionArea>
            </Card>                        
            
            <Dialog PaperProps={{ sx: { minWidth: "20%", height: "35%", fontSize: '1vw' } }} open={popup} onClose={() => setPopup(false)}>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', background: '#f6685e' }}>             
                        หน้าต่างข้อมูลสมาชิก
                    <IconButton onClick={() => setPopup(false)}>
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography>Name : Charif.S</Typography>
                    <Typography>Email : charif.s@psu.ac.th</Typography>
                    <Typography>Department : ฝ่ายวิชการ</Typography>
                </DialogContent>
            </Dialog>
        </Box>

    )
    
}


export default UserCard;
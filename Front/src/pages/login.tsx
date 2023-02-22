import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Login as LoginIcon } from '@mui/icons-material';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../index.css';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './login.css';


function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [User, setUser] = React.useState('');
    const [Pass, setPass] = React.useState('');
    const handleChangeuser = (event: React.ChangeEvent<HTMLInputElement>) => {
            setUser(event.target.value);
          };
    const handleChangepass = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPass(event.target.value);
          };
    function Gomain(){
        console.log('hello')
        navigate('/main')
        
    }      

  return (
    <>
    <Box className="topbox" >
    </Box>

    <Box className="box">
    <Typography sx={{ fontSize: 30 ,color: 'white' }}>COE E MEETING</Typography>
    
    <TextField  id="box-input" label="Username" sx={{ backgroundColor: 'white' }}
    value={User} onChange={handleChangeuser} variant="outlined"/>
    
    <TextField id="box-input" label="Password"  sx={{ backgroundColor: 'white' }}
    value={Pass} onChange={handleChangepass} variant="outlined"/>
    <Button variant='contained' sx={{ fontSize: 'large' }} onClick={Gomain} >
        <LoginIcon sx={{ mr: 1 }} />
        เข้าสู่ระบบ
      </Button>
    </Box>

    </>
    
  );
};
export default Login;
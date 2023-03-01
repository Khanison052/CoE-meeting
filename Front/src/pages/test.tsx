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
import Repo from '../Repo'
import User from '../model/User';
import { ClassNames } from '@emotion/react';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [User, setUser] = React.useState('');
    const [Pass, setPass] = React.useState('');
    const [userResultList, setUserResultList] = useState<User[]>([])
    const fetchUserResultList = async () => {
      let params: { keyword?: string, isPinned?: boolean} = {}
      const result = await Repo.UserResults.getAll(params)
      if (result) {
          if (userResultList.length) {
              setUserResultList([])
          }
          setUserResultList(result)
      } 
  }
    
    
    
    const handleChangeuser = (event: React.ChangeEvent<HTMLInputElement>) => {
            setUser(event.target.value);
          };
    const handleChangepass = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPass(event.target.value);
          };
    function Loginto(){
      const result = Repo.UserResults.post(User,Pass)
      console.log(result)
    }      
    useEffect(() => {
      fetchUserResultList() })

  return (
    <>
    <div className='body'>
      <div>
        <img src={require("../images/logopsu.png")}className='images'/>
      </div>
      <div>
        <img src={require("../images/logo coe.jpg")}className="imagecoe"/>
      </div>
    <Box className="box">
    <Typography sx={{ fontSize: 60 ,color: 'white' }}  ></Typography>
    <div className="image">
      <img src={require("../images/logopsupass.png")}/>
    </div>
    
    <TextField  id="box-input" label="Username" sx={{ backgroundColor: 'white' }}
    value={User} onChange={handleChangeuser} variant="outlined"/>
    
    <TextField id="box-input" label="Password"  sx={{ backgroundColor: 'white' }}
    value={Pass} onChange={handleChangepass} variant="outlined"/>
    <Box className="boxs"></Box>
    <Button variant='contained' sx={{ fontSize: 'large' }} onClick={Loginto} >
        <LoginIcon sx={{ mr: 1 }} />
        เข้าสู่ระบบ
      </Button>
    </Box>

    </div>
    </>
  );
  
};
export default Login;
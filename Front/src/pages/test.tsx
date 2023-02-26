import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Login as LoginIcon, Token } from '@mui/icons-material';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../index.css';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './login.css';
import Repo from '../Repo'
import User from '../model/User';
import authenticateUser from '../config';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log('letgo')
    const Token = authenticateUser('abcd','123456')
    





  return (
    <> 
    <Button variant='contained' sx={{ fontSize: 'large' }}  >
        <LoginIcon sx={{ mr: 1 }} />
        เข้าสู่ระบบ
      </Button>
    </>
    
  );
};
export default Login;
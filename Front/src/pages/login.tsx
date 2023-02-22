import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Login as LoginIcon } from '@mui/icons-material';
import { TextField } from '@mui/material';
import '../index.css';
import React from 'react';
function Login() {
    const [User, setUser] = React.useState('');
    const [Pass, setPass] = React.useState('');
    const handleChangeuser = (event: React.ChangeEvent<HTMLInputElement>) => {
            setUser(event.target.value);
          };
    const handleChangepass = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPass(event.target.value);
          };


  return (
    <><div>
    <h1>test</h1>
    </div>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 100 }}>
    <TextField id="box-input" label="Username" 
    value={User} onChange={handleChangeuser} variant="outlined"/>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 100 }}>
    <TextField id="box-input" label="Password" 
    value={Pass} onChange={handleChangepass} variant="outlined"/>
    
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 100 }}>
    <Button variant='contained' sx={{ fontSize: 'large' }} >
        <LoginIcon sx={{ mr: 1 }} />
        Log in
      </Button>
    </Box></>
  );
};

export default Login;
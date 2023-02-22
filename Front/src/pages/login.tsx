import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Login as LoginIcon } from '@mui/icons-material';
import { TextField } from '@mui/material';
import '../index.css';
import React from 'react';
function Login() {
    const [value, setValue] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
          };
  return (
    <><div>
    <h1>test</h1>
    </div>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 100 }}>
    <TextField
      id="box-input"
      label="Enter text here"
      value={value}
      onChange={handleChange}
      variant="outlined"
    />
      <Button variant='contained' sx={{ fontSize: 'large' }} >
        <LoginIcon sx={{ mr: 1 }} />
        Log in
      </Button>
    </Box></>
  );
};

export default Login;
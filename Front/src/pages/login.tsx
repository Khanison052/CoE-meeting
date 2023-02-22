import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Login as LoginIcon } from '@mui/icons-material';

import '../index.css';
function Login() {
  return (
    <><div>
    <h1>test</h1>
    </div>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 100 }}>
      <Button variant='contained' sx={{ fontSize: 'large' }} >
        <LoginIcon sx={{ mr: 1 }} />
        Log in
      </Button>
    </Box></>
  );
};

export default Login;
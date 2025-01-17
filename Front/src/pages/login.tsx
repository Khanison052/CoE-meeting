import { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Box } from '@mui/system';
import { Login as LoginIcon } from '@mui/icons-material';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../index.css';
import React from 'react';
import { useNavigate} from 'react-router-dom';
import './login.css';
import Repo from '../Repo'
import { setToken } from '../Repo/auth';

function Login() {
  
  const navigate = useNavigate();
  const [User, setUser] = React.useState('');
  const [Pass, setPass] = React.useState('');
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  const openModal = (text: string) => {
    setModalText(text);
    setOpen(true);
  };
  
  const handleChangeuser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };
  const handleChangepass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };
  async function Loginto() {
    try {
      const jwt = await Repo.UserResults.post(User, Pass);
      console.log(jwt);
      setToken(jwt);
      navigate('/main');
    }
    catch (error) {
      openModal('รหัสผ่านหรือชื่อผู้ใช้ไม่ถูกต้อง');
    }
  }
  
  return (
    <>
      <div className='body'>
        <div>
          <img src={require("../images/logopsu.png")} className='images' />
        </div>
        <div>
          <img src={require("../images/logo coe.jpg")} className="imagecoe" />
        </div>
        <Box className="box">
          <Typography sx={{ fontSize: 60, color: 'white' }}  ></Typography>
          <Box className="boxCoEEmeeting" sx={{ fontSize: 70, color: 'white' }}>CoE E-meeting</Box>  
        <div>
             <img src={require("../images/logopsupass.png")} className="boxImgPSUpassport" />
           </div>
        

          <TextField 
            id="box-input" 
            label="Username" 
            sx={{ backgroundColor: 'white' }}
            value={User} 
            onChange={handleChangeuser} 
            variant="outlined" 
            className="boxUsername"
          />

          <TextField 
            id="box-input" 
            label="Password" 
            sx={{ backgroundColor: 'white' }}
            value={Pass} 
            onChange={handleChangepass} 
            variant="outlined" 
            type="password"  
            className="boxPassword"
            style={{ margin: "10px" }}
          />


          <Button style={{ backgroundColor: '#A9A9A9', borderRadius: '30px' }} variant='contained' sx={{ fontSize: 'large', color: 'black', margin: "10px" , textAlign: 'center'}} onClick={Loginto} >
            <LoginIcon sx={{ mr: 1 , color: 'black' }} style={{ backgroundColor: '#A9A9A9'}} />
            เข้าสู่ระบบ
          </Button>
        </Box>

      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>แจ้งเตือน</DialogTitle>
        <DialogContent>
          <p>{modalText}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>

    </>
  );
  
};
export default Login;

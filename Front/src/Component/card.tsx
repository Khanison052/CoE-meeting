import {  Card, CardActionArea, CardContent, CardHeader, Dialog, DialogTitle, Grid, IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Close } from "@mui/icons-material";

import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import UserResult from "../model/meeting";
import './card.css'

interface Prop {
  userResult: UserResult;
  onUpdateUserResult: (userResult: UserResult) => void;
}

function TopicCard(props: Prop) {

  const userResult = props.userResult
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const [popup, setPopup] = useState(false);
  const xlsxHeading = [
    'แผนก'
  ];
  const departments = userResult.attributes.departments.data;
  function handleClick() { story(userResult.id) }
  function story(id: number) {
    navigate(`/story/${id}`)
  }
<<<<<<< HEAD
  
=======


>>>>>>> 8d251b8148157f7df72e2d751aac68f380e3c917
  const formatTime = (timeString: string) => {
    const timeParts = timeString.split(':');
    const hour = timeParts[0].padStart(2, '0');
    const minute = timeParts[1].padStart(2, '0');
    const second = timeParts[2].split('.')[0].padStart(2, '0');
    return `${hour}:${minute}:${second}`;
  };

<<<<<<< HEAD
  return (<Box sx={{ position: 'relative', background: '#990000', left: '31%', top: '120%', width: '68%', height: '65%',fontFamily: 'Sarabun', borderRadius:3, border:0,textAlign: 'left' }} >
=======
  return (<Box sx={{ position: 'relative', background: '#BEBEBE', left: '31%', top: '120%', width: '68%', height: '65%',fontFamily: 'Sarabun', borderRadius:3, border:0,textAlign: 'left' }} >
>>>>>>> 8d251b8148157f7df72e2d751aac68f380e3c917
    <Card sx={{ Width: 700, maxheight: 400, margin: 1,fontFamily: 'Sarabun', background: '#FFCCCC' }}>
      <CardHeader
        sx={{ height: '50%', fontSize: '2rem', style: {}, background: '#FFCCCC',fontFamily: 'Sarabun',top:'50%' }}
        title={userResult.attributes.Topic}
        subheader={`สถานที่ประชุม: ${userResult.attributes.location.toString()} เวลา: ${userResult.attributes.date.toString()} ${formatTime(userResult.attributes.time)}`}
        onClick={(handleClick)}
      />
      <CardActionArea sx={{ top:'54%',width: "21%", height: '17%', left: '77.5%', backgroundColor: '#FF6666', borderRadius:'40px',boxShadow:'0px 0px 3.5px' }} onClick={() => setPopup(true)}>
        <CardContent sx={{ height: '30%' }}>
          <Grid container spacing={2} columns={5}>
            <Grid item xs={5} >
              <Typography component="div" sx={{ fontSize: '1.13vw', color: 'white', textAlign: 'center' ,fontFamily: 'Sarabun'}}>
                {'ผู้ประชุมที่เกี่ยวข้อง'}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>

    </Card>
    <Dialog PaperProps={{ sx: { minWidth: "50%", height: "55%", fontSize: '1vw',fontFamily: 'Sarabun' } }} open={popup} onClose={() => setPopup(false)}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tabs value={tabIndex} onChange={(event: React.SyntheticEvent, newValue: number) => setTabIndex(newValue)} aria-label="basic tabs example">
          <Tab sx={{ fontSize: '1vw' ,fontFamily: 'Sarabun'}} label="ผู้ประชุมที่เกี่ยวข้อง" />
        </Tabs>
        <IconButton onClick={() => setPopup(false)}>
          <Close />
        </IconButton>
      </DialogTitle>
      <Box hidden={tabIndex !== 0}>
        <Table >
          <TableHead>
            <TableRow >
              {xlsxHeading.map((it, index) => <TableCell sx={{ fontSize: '1vw' }} key={index}><b>{it}</b></TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(departments) && departments.map((department: any) => (
              <TableRow key={department.id} sx={{ backgroundColor: 'white' }}>
                <TableCell sx={{ fontSize: '1vw' ,fontFamily: 'Sarabun' }}>{department.attributes.title}</TableCell>
              </TableRow>
            ))}


          </TableBody>
        </Table>
      </Box>
    </Dialog>
  </Box>
  )

}
export default TopicCard

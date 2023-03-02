import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Dialog, DialogTitle, Grid, IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Close, Delete, Edit, Upload } from "@mui/icons-material";
import { read, utils } from 'xlsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import Repo from '../Repo'
import UserResult from "../model/User";
import User from "../model/User";


function TopicCard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);
  const [popup, setPopup] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [userResultList, setUserResultList] = useState<User[]>([])
  const xlsxHeading = [
    'ชื่อ',
    'นามสกุล',
    'รหัสประจำตัว',
    'แผนก'
  ];
  function story() { navigate('/story') }
  const fetchUserResultList = async () => {
    const result = await Repo.UserResults.getAll()
    if (result) {
      if (userResultList.length) {
        setUserResultList([])
      }
      setUserResultList(result)
    }
  }
  useEffect(() => {
    fetchUserResultList()
  })

  return (<Box sx={{ position: 'absolute', left: '30%', top: '45%', width: '70%', height: '30%' }} >
    <Card sx={{ maxWidth: 1200, height: 300, margin: 10 }}>
      <CardHeader
        sx={{ height: '50%', fontSize: '2rem', style: {} }}
        title={userResultList[0].attributes.Topic}
        subheader={`สถานที่ประชุม: ${userResultList[0]?.attributes?.location?.toString()} เวลา: ${userResultList[0]?.attributes?.date?.toString()}`}

        onClick={story}
      />
      <CardActionArea sx={{ width: "20%", height: '18%', left: '75%', background: '#721001' }} onClick={() => setPopup(true)}>
        <CardContent sx={{ height: '30%' }}>
          <Grid container spacing={2} columns={5}>
            <Grid item xs={5}>
              <Typography component="div" sx={{ fontSize: '1vw', color: 'white', textAlign: 'center' }}>
                {'รายชื่อสมาชิก'}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>

    </Card>
    <Dialog PaperProps={{ sx: { minWidth: "50%", height: "55%", fontSize: '1vw' } }} open={popup} onClose={() => setPopup(false)}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tabs value={tabIndex} onChange={(event: React.SyntheticEvent, newValue: number) => setTabIndex(newValue)} aria-label="basic tabs example">
          <Tab sx={{ fontSize: '1vw' }} label="สมาชิก" />
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
            <TableRow sx={{ backgroundColor: 'white' }}>
              <TableCell sx={{ fontSize: '1vw' }}>{'นายภาคิน'}</TableCell>
              <TableCell sx={{ fontSize: '1vw' }}>{'จิตสกุลชัยเดช'}</TableCell>
              <TableCell sx={{ fontSize: '1vw' }}>{'6510110347'}</TableCell>
              <TableCell sx={{ fontSize: '1vw' }}>{'ชั้นปีการศึกษาที่ 1'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Dialog>
  </Box>
  )

}
export default TopicCard
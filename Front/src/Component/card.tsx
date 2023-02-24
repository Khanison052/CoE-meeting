import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Dialog, DialogTitle, Grid, IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Close, Delete, Edit, Upload } from "@mui/icons-material";
import { read, utils } from 'xlsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";


function TopicCard(){
    const navigate = useNavigate();
    const location = useLocation();
    const [tabIndex, setTabIndex] = useState(0);
    const [popup, setPopup] = useState(false);
    const [isImporting, setIsImporting] = useState(false);
    const xlsxHeading = [
        'ชื่อ',
        'นามสกุล',
        'รหัสประจำตัว',
        'แผนก'
      ];
      function Showmeet(){
        navigate('/All');
      }



    return(<Box sx={{position:'fixed',left: 320 ,top: 400,width: 1000,height: 125}}>
        <Card sx={{ maxWidth: 1200, height: 240 }}>
          <CardHeader onClick={Showmeet}
            sx={{ height: '30%' }}
            title={'โครงการ'}
            action={
              <IconButton sx={{ '&:hover': { color: 'red' } }} >
                <Delete />
              </IconButton>
            }
          />
          <CardActionArea sx={{ height: '56%' }} onClick={() => setPopup(true)}>
            <CardContent sx={{ height: '40%' }}>
              <Grid container spacing={2} columns={5}>
                <Grid item xs={3}>
                  <Typography component="div">
                    {'รายชื่อสมาชิก'}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Edit color="primary" />
            </CardActions>
          </CardActionArea>
        </Card>
  
        <Dialog PaperProps={{ sx: { minWidth: "50%", height: "55%" } }} open={popup} onClose={() => setPopup(false)}>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Tabs value={tabIndex} onChange={(event: React.SyntheticEvent, newValue: number) => setTabIndex(newValue)} aria-label="basic tabs example">
              <Tab label="สมาชิก" />
              <Tab label="สมาชิก" />
            </Tabs>
            <IconButton onClick={() => setPopup(false)}>
              <Close />
            </IconButton>
          </DialogTitle>
          <Box hidden={tabIndex !== 0}>
          <Table>
              <TableHead>
                <TableRow>
                  {xlsxHeading.map((it, index) => <TableCell key={index}><b>{it}</b></TableCell>)}
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow  sx={{ backgroundColor: '#f78279'  }}>
                    <TableCell>{'นายภาคิน'}</TableCell>
                    <TableCell>{'จิตสกุลชัยเดช'}</TableCell>
                    <TableCell>{'6510110347'}</TableCell>
                    <TableCell>{'ชั้นปีการศึกษาที่ 1'}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Dialog>
      </Box>
    )
  
}
export default TopicCard
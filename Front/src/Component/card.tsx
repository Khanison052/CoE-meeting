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
        'userCode',
        'result',
        'resultType',
        'remark'
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
                    {'hello'}
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
              <Tab label="General" />
              <Tab label="Results List" />
            </Tabs>
            <IconButton onClick={() => setPopup(false)}>
              <Close />
            </IconButton>
          </DialogTitle>
          <Box hidden={tabIndex !== 0}>
          </Box>
          <Box hidden={tabIndex !== 1}>
            <Button variant="contained" component="label" sx={{ mx: 2 }}>
              <Upload />
              Import
              <input hidden type="file" accept=".pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"  />
            </Button>
            <Table>
              <TableHead>
                <TableRow>
                  {xlsxHeading.map((it, index) => <TableCell key={index}><b>{it}</b></TableCell>)}
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow  sx={{ backgroundColor: '#f78279'  }}>
                    <TableCell>{'hello1'}</TableCell>
                    <TableCell>{'hello2'}</TableCell>
                    <TableCell>{'hello3'}</TableCell>
                    <TableCell>{'hello4'}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
            <Button disabled={!isImporting} variant="contained" component="label" sx={{ m: 2, float: 'right' }} >
              Submit
            </Button>
          </Box>
        </Dialog>
      </Box>
    )
  
}
export default TopicCard
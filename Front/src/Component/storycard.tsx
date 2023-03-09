import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import UserResult from "../model/User";
import './storycard.css';
import axios from 'axios';
import Repo from "../Repo";

interface Prop {
  userResult: UserResult;
  isadmin: boolean;
}
function Storycard(props: Prop) {
  const isadmin = props.isadmin;
  const userResult = props.userResult;
  const navigate = useNavigate();
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  console.log(userResult)
  console.log(isadmin)

  const data1 = userResult.attributes.Notice.data;
  const data2 = userResult.attributes.Certifying.data;
  const data3 = userResult.attributes.Continued.data;
  const data4 = userResult.attributes.Backlog.data;
  const data5 = userResult.attributes.Present.data;
  const data6 = userResult.attributes.Invite.data;
  const data7 = userResult.attributes.Other.data;

  function handleUpload() {
    setIsUploadDialogOpen(true);
  }

  function geturl(data: any) {
    const url = Array.isArray(data) ? data[0]?.attributes?.url : data?.attributes?.url;
    return url
  }

  async function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    console.log(file)
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData)
    try {
      console.log('File uploaded successfully:', formData);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
    setIsUploadDialogOpen(false);
  }





  return (
    <>
      <Box sx={{ position: 'absolute', left: '33%', top: '35%', width: '30%', height: '10%', background: '#ffffff', margin: -2 }}>
        <Typography sx={{ fontSize: 40 }}>{userResult.attributes.Topic}</Typography>
      </Box>

      <Box sx={{ position: 'absolute', left: '31.7%', top: '40%', width: '66.5%', height: '80%', background: '#FFCCCC', flexdirection: 'column' }}>
        <div style={{ position: 'relative' }}>
          <Typography sx={{ fontSize: '1.55rem', display: 'inline-block',fontFamily: 'Sarabun' }}>ระเบียบวาระที่ 1 เรื่องที่ประธานแจ้งให้ที่ประชุมทราบ</Typography>
          {isadmin ? <Button variant="contained" color="primary" onClick={handleUpload} style={{ top: -5, left: 10, display: 'inline-block' }}>Upload</Button> : null}
        </div>
        {data1 ? (
          <a href={`http://localhost:1337${geturl(data1)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography sx={{fontFamily: 'Sarabun'}}>ไม่มีข้อมูล</Typography>
        )}


        <div style={{ position: 'relative' }}>
          <Typography sx={{ fontSize: '1.55rem', display: 'inline-block',fontFamily: 'Sarabun' }}>ระเบียบวาระที่ 2 เรื่องการรับรองการประชุม</Typography>
          {isadmin ? <Button variant="contained" color="primary" onClick={handleUpload} style={{ top: -5, left: 10, display: 'inline-block' }}>Upload</Button> : null}
        </div>
        {data2 ? (
          <a href={`http://localhost:1337${geturl(data2)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography sx={{fontFamily: 'Sarabun'}}>ไม่มีข้อมูล</Typography>
        )}


        <div style={{ position: 'relative' }}>
          <Typography sx={{ fontSize: '1.55rem', display: 'inline-block',fontFamily: 'Sarabun' }}>ระเบียบวาระที่ 3 เรื่องสืบเนื่อง</Typography>
          {isadmin ? <Button variant="contained" color="primary" onClick={handleUpload} style={{ top: -5, left: 10, display: 'inline-block' }}>Upload</Button> : null}
        </div>
        {data3 ? (
          <a href={`http://localhost:1337${geturl(data3)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography sx={{fontFamily: 'Sarabun'}}>ไม่มีข้อมูล</Typography>
        )}


        <div style={{ position: 'relative' }}>
          <Typography sx={{ fontSize: '1.55rem', display: 'inline-block',fontFamily: 'Sarabun' }}>ระเบียบวาระที่ 4 เรื่องที่เสนอให้ที่ประชุมพิจารณา</Typography>
          {isadmin ? <Button variant="contained" color="primary" onClick={handleUpload} style={{ top: -5, left: 10, display: 'inline-block' }}>Upload</Button> : null}
        </div>
        {data4 ? (
          <a href={`http://localhost:1337${geturl(data4)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography sx={{fontFamily: 'Sarabun'}}>ไม่มีข้อมูล</Typography>
        )}


        <div style={{ position: 'relative' }}>
          <Typography sx={{ fontSize: '1.55rem', display: 'inline-block',fontFamily: 'Sarabun' }}>ระเบียบวาระที่ 5 เรื่องทักท้วง</Typography>
          {isadmin ? <Button variant="contained" color="primary" onClick={handleUpload} style={{ top: -5, left: 10, display: 'inline-block' }}>Upload</Button> : null}
        </div>
        {data5 ? (
          <a href={`http://localhost:1337${geturl(data5)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography sx={{fontFamily: 'Sarabun'}}>ไม่มีข้อมูล</Typography>
        )}

        <div style={{ position: 'relative' }}>
          <Typography sx={{ fontSize: '1.55rem', display: 'inline-block',fontFamily: 'Sarabun' }}>ระเบียบวาระที่ 6 เรื่องแจ้งทราบ</Typography>
          {isadmin ? <Button variant="contained" color="primary" onClick={handleUpload} style={{ top: -5, left: 10, display: 'inline-block' }}>Upload</Button> : null}
        </div>

        {data6 ? (
          <a href={`http://localhost:1337${geturl(data6)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography sx={{fontFamily: 'Sarabun'}}>ไม่มีข้อมูล</Typography>
        )}

        <div style={{ position: 'relative' }}>
          <Typography sx={{ fontSize: '1.55rem', display: 'inline-block',fontFamily: 'Sarabun' }}>ระเบียบวาระที่ 7 เรื่องอื่นๆ</Typography>
          {isadmin ? <Button variant="contained" color="primary" onClick={handleUpload} style={{ top: -5, left: 10, display: 'inline-block' }}>Upload</Button> : null}
        </div>
        {data7 ? (
          <a href={`http://localhost:1337${geturl(data7)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography sx={{fontFamily: 'Sarabun'}}>ไม่มีข้อมูล</Typography>
        )}
      </Box>
      <Dialog open={isUploadDialogOpen} onClose={() => setIsUploadDialogOpen(false)}>
        <DialogTitle>Upload a PDF file</DialogTitle>
        <DialogContent>
          <input type="file" accept="application/pdf" onChange={handleFileSelect} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsUploadDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Storycard;

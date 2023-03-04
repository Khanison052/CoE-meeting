import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Close, Delete, Edit, Upload } from "@mui/icons-material";
import { read, utils } from 'xlsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import UserResult from "../model/User";
import axios from 'axios';
interface Prop {
  userResult: UserResult;
}
function Storycard(props: Prop) {
  const userResult = props.userResult
  const navigate = useNavigate();
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);
  const [popup, setPopup] = useState(false);
  console.log()




  return (<><Box sx={{ position: 'absolute', left: '35%', top: '40%', width: '30%', height: '20%', background: '#ffffff', margin: -2 }}>
    <Typography sx={{ fontSize: 40 }}>{userResult.attributes.Topic}</Typography>
  </Box>
    <Box sx={{ position: 'absolute', left: '35%', top: '45%', width: '50%', height: '55%', background: '#D9D9D9', flexdirection: 'column' }}>
      <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 1 เรื่องที่ประธานแจ้งให้ที่ประชุมทราบ</Typography>
      {userResult.attributes.Notice.attributes?.url !== null ? (
        <a href={process.env.REACT_APP_STRAPI_URL + "/uploads/System_Design_1cf6e0b5d0.pdf"} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
      ) : (
        <Typography>ไม่มีข้อมูล</Typography>
      )}

      <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 2 เรื่องการรับรองการประชุม</Typography>
      {userResult.attributes.Certifying.url ? (
        <a href={userResult.attributes.Certifying.url} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
      ) : (<Typography>ไม่มีข้อมูล</Typography>)}
      <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 3 เรื่องสืบเนื่อง</Typography>
      <a href={userResult.attributes.Continued.url} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
      <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 4 เรื่องที่เสนอให้ที่ประชุมพิจารณา</Typography>
      <a href={userResult.attributes.Backlog.url} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
      <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 5 เรื่องทักท้วง</Typography>
      <a href={userResult.attributes.Present.url} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
      <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 6 เรื่องแจ้งทราบ</Typography>
      <a href={userResult.attributes.Invite.url} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
      <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 7 เรื่องอื่นๆ</Typography>
      <a href={userResult.attributes.Other.url} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
    </Box></>
  )

}
export default Storycard
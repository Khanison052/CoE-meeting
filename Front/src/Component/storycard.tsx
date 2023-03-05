import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import UserResult from "../model/User";
import axios from 'axios';
interface Prop {
  userResult: UserResult;
}
function Storycard(props: Prop) {
  const userResult = props.userResult;
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const [popup, setPopup] = useState(false);

  const data1 = userResult.attributes.Notice.data;
  const data2 = userResult.attributes.Certifying.data;
  const data3 = userResult.attributes.Continued.data;
  const data4 = userResult.attributes.Backlog.data;
  const data5 = userResult.attributes.Present.data;
  const data6= userResult.attributes.Invite.data;
  const data7 = userResult.attributes.Other.data;



  function geturl(data:any){
  const url = Array.isArray(data) ? data[0]?.attributes?.url : data?.attributes?.url;
  return url
  }
  return (
    <>
      <Box sx={{ position: 'absolute', left: '33%', top: '35%', width: '30%', height: '10%', background: '#ffffff', margin: -2 }}>
        <Typography sx={{ fontSize: 40 }}>{userResult.attributes.Topic}</Typography>
      </Box>
      <Box sx={{ position: 'absolute', left: '33%', top: '40%', width: '50%', height: '70%', background: '#D9D9D9', flexdirection: 'column' }}>
        <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 1 เรื่องที่ประธานแจ้งให้ที่ประชุมทราบ</Typography>
        {data1 ? (
          <a href={`http://localhost:1337${geturl(data1)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography>ไม่มีข้อมูล</Typography>
        )}
      
        <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 2 เรื่องการรับรองการประชุม</Typography>
        {data2 ? (
          <a href={`http://localhost:1337${geturl(data2)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography>ไม่มีข้อมูล</Typography>
        )}
      
        <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 3 เรื่องสืบเนื่อง</Typography>
        {data3 ? (
          <a href={`http://localhost:1337${geturl(data3)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography>ไม่มีข้อมูล</Typography>
        )}
      
        <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 4 เรื่องที่เสนอให้ที่ประชุมพิจารณา</Typography>
        {data4 ? (
          <a href={`http://localhost:1337${geturl(data4)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography>ไม่มีข้อมูล</Typography>
        )}
      
        <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 5 เรื่องทักท้วง</Typography>
        {data5 ? (
          <a href={`http://localhost:1337${geturl(data5)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography>ไม่มีข้อมูล</Typography>
        )}
        <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 6 เรื่องแจ้งทราบ</Typography>
        {data6 ? (
          <a href={`http://localhost:1337${geturl(data6)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography>ไม่มีข้อมูล</Typography>
        )}
        <Typography sx={{ fontSize: '2rem' }}>ระเบียบวาระที่ 7 เรื่องอื่นๆ</Typography>
        {data7 ? (
          <a href={`http://localhost:1337${geturl(data7)}`} target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        ) : (
          <Typography>ไม่มีข้อมูล</Typography>
        )}
      </Box>
    </>
  );
}

export default Storycard;

import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Dialog, DialogTitle, Grid, IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Close, Delete, Edit, Upload } from "@mui/icons-material";
import { read, utils } from 'xlsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
function Storycard(){
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
      



    return(<Box sx={{position:'absolute',left: '55%' ,top: '65%',width: '30%',height: '50%',background:'#D9D9D9'}}>
        <Typography>ชื่อโครงการ</Typography>
        <Box sx={{flexdirection:'column'}}>
          <Typography>ระเบียบวาระที่ 1 เรื่องที่ประธานแจ้งให้ที่ประชุมทราบ</Typography>
          <a href="/mockpdf/System.pdf" target="_blank" rel="noopener noreferrer">Click to view PDF</a>
          <Typography>ระเบียบวาระที่ 2 เรื่องการรับรองการประชุม</Typography>
          <a href="/mockpdf/System.pdf" target="_blank" rel="noopener noreferrer">Click to view PDF</a>
          <Typography>ระเบียบวาระที่ 3 เรื่องสืบเนื่อง</Typography>
          <a href="/mockpdf/System.pdf" target="_blank" rel="noopener noreferrer">Click to view PDF</a>
          <Typography>ระเบียบวาระที่ 4 เรื่องที่เสนอให้ที่ประชุมพิจารณา</Typography>
          <a href="/mockpdf/System.pdf" target="_blank" rel="noopener noreferrer">Click to view PDF</a>
          <Typography>ระเบียบวาระที่ 5 เรื่องทักท้วง</Typography>
          <a href="/mockpdf/System.pdf" target="_blank" rel="noopener noreferrer">Click to view PDF</a>
          <Typography>ระเบียบวาระที่ 6 เรื่องแจ้งทราบ</Typography>
          <a href="/mockpdf/System.pdf" target="_blank" rel="noopener noreferrer">Click to view PDF</a>
          <Typography>ระเบียบวาระที่ 7 เรื่องอื่นๆ</Typography>
          <a href="/mockpdf/System.pdf" target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        </Box>
      </Box>
    )
  
}
export default Storycard
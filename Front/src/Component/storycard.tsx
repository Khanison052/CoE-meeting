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
      



    return(<Box sx={{position:'absolute',left: '55%' ,top: '65%',width: '30%',height: '10%'}}>
        <Typography>ชื่อโครงการ</Typography>
        <Box sx={{flexdirection:'column'}}>
          <Typography>ระเบียบวาระที่ 1 เรื่องที่ประธานแจ้งให้ที่ประชุมทราบ</Typography>
          <a href="../mockpdf/System.pdf" target="_blank" rel="noopener noreferrer">Click to view PDF</a>
        </Box>



      </Box>
    )
  
}
export default Storycard
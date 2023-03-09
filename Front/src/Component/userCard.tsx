import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Dialog, DialogTitle, Grid, IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Close, Delete, Edit, Upload } from "@mui/icons-material";
import { useEffect, useState } from "react";
import UserRole from "../model/role";


interface Prop {
  UserRole : UserRole;
  onUpdateUserRole: (userResult: UserRole) => void;
}

function TopicCard(props: Prop) {
  const userRole = props.UserRole
  const [popup, setPopup] = useState(false);
  console.log(userRole)
  return (
    <Box sx={{ position: 'relative', left: '30%', top: '40vh', width: '70%', height: '40%' }} >
    <Card sx={{ width: 700, maxHeight: 500, margin: 2 }}>
      <CardHeader
        sx={{ height: '50%', fontSize: '2rem' }}
        title={userRole.username}
        subheader={<>
          Email: {userRole.email}
        <br/>
            แผนก: {userRole.department?.title ? userRole.department.title : '-'}
        </>}
       
      />

      
    </Card>    
  </Box>
  )

}
export default TopicCard
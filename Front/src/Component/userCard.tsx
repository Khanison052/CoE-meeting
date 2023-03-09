import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Dialog, DialogTitle, Grid, IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Close, Delete, Edit, Upload } from "@mui/icons-material";
import { useEffect, useState } from "react";
import UserRole from "../model/role";
import Userform from "./userform";
import Repo from "../Repo";


interface Prop {
  UserRole : UserRole;
  onUpdateUserRole: (userResult: UserRole) => void;
}

function TopicCard(props: Prop) {
  const userRole = props.UserRole
  const [userrole, setUserRole] = useState<UserRole>(props.UserRole);
  const [popup, setPopup] = useState(false);
  console.log(userRole)

  const onUpdate = async (ann: Partial<UserRole>) => {
    const result = await Repo.UserRole.update(ann)
    if (result) {
      setUserRole(result)
    }
    setPopup(false)
  }




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
      <CardActionArea sx={{ height: '56%' }} onClick={() => setPopup(true)}>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Edit color="primary" />
          </CardActions>
        </CardActionArea>
    </Card> 
    <Dialog PaperProps={{ sx: { minWidth: "50%", height: "55%" } }} open={popup} onClose={() => setPopup(false)}>
    <Box>
      <Userform Userrole={userRole} callbackFn={onUpdate}></Userform>
        </Box></Dialog>   
  </Box>

  )

}
export default TopicCard
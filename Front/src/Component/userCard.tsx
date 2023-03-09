import { Button, Card, CardActionArea, CardActions, CardHeader, Dialog, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import UserRole from "../model/role";
import Userform from "./userform";
import Repo from "../Repo";


interface Prop {
  UserRole: UserRole;
  onUpdateUserRole: () => void;
}

function TopicCard(props: Prop) {
  const userRole = props.UserRole
  const [userrole, setUserRole] = useState<UserRole>(props.UserRole);
  const [popup, setPopup] = useState(false);
  const [deletePopup, setdeletePopup] = useState(false);
  console.log(userRole)

  const onUpdate = async (ann: Partial<UserRole>) => {
    const result = await Repo.UserRole.update(ann)
    if (result) {
      setUserRole(result)
    }
    setPopup(false)
  }
  const handleDeleteButtonClick = async () => {
    await Repo.UserRole.delete(userRole.id)
    props.onUpdateUserRole()
    setdeletePopup(false);
  }



  return (
    <Box sx={{ position: 'relative', left: '30%', top: '40vh', width: '70%', height: '40%' }} >
      <Card sx={{ width: '90%', maxHeight: 500, margin: 2 }}>
        <CardHeader
          sx={{ height: '50%', fontSize: '2rem' }}
          title={userRole.username}
          subheader={<>
            Email: {userRole.email}
            <br />
            แผนก: {userRole.department?.title ? userRole.department.title : '-'}
          </>}
          action={
            <IconButton sx={{ '&:hover': { color: 'red' } }} onClick={() => setdeletePopup(true)}>
              <Delete />
            </IconButton>
          }
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
      <Dialog PaperProps={{ sx: { minWidth: "40%", height: "55%" } }} open={deletePopup} onClose={() => setdeletePopup(false)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography sx={{  fontSize: '2rem' ,paddingTop: 20 }} align="center">Are you sure you want to delete?</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between',paddingTop: '10%' }}>
            <Button size="large"  sx={{ height: 40, width: 120 }} variant="contained" color="error" onClick={handleDeleteButtonClick}>Yes  </Button>
            <Box sx={{ width: 100 }} />
            <Button size="large"  sx={{ height: 40, width: 120 }} variant="contained" onClick={() => setdeletePopup(false)}>No</Button>
          </Box>
        </Box>
      </Dialog>
    </Box>


  )

}
export default TopicCard
import { Button, MenuItem, Select, SelectChangeEvent, TextField, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import Userrole from "../model/role";
import './userform.css';

interface Prop {
    Userrole: Partial<Userrole>
    callbackFn: (ann: Partial<Userrole>) => void
}

function UserroleForm(props: Prop) {
    
    const Userrole = props.Userrole
    const usernameRef = useRef<HTMLInputElement>(null)
    // const usersurnameRef = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [department, setDepartment] = useState<Userrole["department"]>();
    const [valuede, setValuede] = useState<number>(0);
    console.log(Userrole)

    const onSubmit = () => {
        console.log(department)
        props.callbackFn({
            id: props.Userrole.id,
            username: usernameRef.current?.value,
            email: email.current?.value,
            password: password.current?.value,
            department: department
        })
    }
    const handleDepartmentChange = (event: SelectChangeEvent<number>) => {
        if (event.target.value === 1) {
            const newDepartment = { id: 1, title: "ฝ่ายงบประมาณ" };
            setDepartment(newDepartment);
            setValuede(1);
        }
        if (event.target.value === 2) {
            const newDepartment = { id: 2, title: "ฝ่ายบุคคล" };
            setDepartment(newDepartment);
            setValuede(2);
        }
        if (event.target.value === 3) {
            const newDepartment = { id: 3, title: "ฝ่ายวิชาการ" };
            setDepartment(newDepartment);
            setValuede(3);
        }
        if (event.target.value === 4) {
            const newDepartment = { id: 4, title: "ฝ่ายทั่วไป" };
            setDepartment(newDepartment);
            setValuede(4);
        }
    };

    return (
        <Box>
            <div style={{ margin: 20 }}>
                <TextField fullWidth sx={{ minWidth: 120 }} label="Username" variant="outlined" defaultValue={props.Userrole.username} inputRef={usernameRef} />
            </div>
            <div style={{ margin: 20 }}>
                <TextField fullWidth sx={{ minWidth: 120 }} rows={4} label="E-mail" variant="outlined" defaultValue={props.Userrole.email} inputRef={email} />
            </div>
            
                <div style={{ margin: 20 }}>
                    <TextField fullWidth sx={{ minWidth: 120 }} rows={4} label="Password" variant="outlined" inputRef={password} />
                </div>
            

            <div style={{ margin: 20, fontFamily: 'Prompt, sans-serif' }}>
                <InputLabel id="แผนก">Department</InputLabel>
                <Select
                    fullWidth
                    labelId="แผนก"
                    id="department"
                    variant="outlined"
                    value={valuede} // use the value state to render the selected value
                    onChange={handleDepartmentChange}
                >
                    <MenuItem value={1}>ฝ่ายงบประมาณ</MenuItem>
                    <MenuItem value={2}>ฝ่ายบุคคล</MenuItem>
                    <MenuItem value={3}>ฝ่ายวิชาการ</MenuItem>
                    <MenuItem value={4}>ฝ่ายทั่วไป</MenuItem>
                </Select>
            </div>
            <div style={{ margin: 20 }}>
                <Button variant="contained" sx={{ mb: 1, float: 'right', verticalAlign: 'bottom',background:'#0000FF'  }} onClick={onSubmit}>{props.Userrole.id ? 'Update' : 'Create'}</Button>
            </div>
        </Box>
    )
}

export default UserroleForm;

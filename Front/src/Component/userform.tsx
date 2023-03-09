import { Button, MenuItem, Select, SelectChangeEvent, TextField, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import Userrole from "../model/role";

interface Prop {
    Userrole: Partial<Userrole>
    callbackFn: (ann: Partial<Userrole>) => void
}

function UserroleForm(props: Prop) {
    const Userrole = props.Userrole
    const usernameRef = useRef<HTMLInputElement>(null)
    const usersurnameRef = useRef<HTMLInputElement>(null)
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
            const newDepartment = { id: 1, title: "นักศึกษาชั้นปีที่1" };
            setDepartment(newDepartment);
            setValuede(1);
        }
        if (event.target.value === 2) {
            const newDepartment = { id: 2, title: "นักศึกษาชั้นปีที่2" };
            setDepartment(newDepartment);
            setValuede(2);
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
            {props.Userrole.id == undefined && (
                <div style={{ margin: 20 }}>
                    <TextField fullWidth sx={{ minWidth: 120 }} rows={4} label="Password" variant="outlined" inputRef={password} />
                </div>
            )}

            <div style={{ margin: 20 }}>
                <InputLabel id="แผนก">Department</InputLabel>
                <Select
                    fullWidth
                    labelId="แผนก"
                    id="department"
                    variant="outlined"
                    value={valuede} // use the value state to render the selected value
                    onChange={handleDepartmentChange}
                >
                    <MenuItem value={1}>นักศึกษาชั้นปีที่1</MenuItem>
                    <MenuItem value={2}>นักศึกษาชั้นปีที่2</MenuItem>
                </Select>
            </div>
            <div style={{ margin: 20 }}>
                <Button variant="contained" sx={{ mb: 1, float: 'right', verticalAlign: 'bottom' }} onClick={onSubmit}>{props.Userrole.id ? 'Update' : 'Create'}</Button>
            </div>
        </Box>
    )
}

export default UserroleForm;

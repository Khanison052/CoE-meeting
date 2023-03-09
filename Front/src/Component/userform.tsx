import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import Userrole from "../model/role";

interface Prop {
    Userrole: Partial<Userrole>
    callbackFn: (ann: Partial<Userrole>) => void
}

function UserroleForm(props: Prop) {
    const usernameRef = useRef<HTMLInputElement>(null)
    const usersurnameRef = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const onSubmit = () => {
        props.callbackFn({
            id: props.Userrole.id,
            username:  usernameRef.current?.value,
            email: email.current?.value,
            password: password.current?.value,
    })
    }

    return (
        <Box>
            <div style={{ margin: 20 }}>
                <TextField fullWidth sx={{ minWidth: 120 }} label="username" variant="outlined" defaultValue={props.Userrole.username} inputRef={usernameRef} />
            </div>
            <div style={{ margin: 20 }}>
                <TextField fullWidth  sx={{ minWidth: 120 }} rows={4} label="email" variant="outlined" defaultValue={props.Userrole.email} inputRef={email} />
            </div>
            <div style={{ margin: 20 }}>
                <TextField fullWidth  sx={{ minWidth: 120 }} rows={4} label="password" variant="outlined" inputRef={password} />
            </div>
            <div style={{ margin: 20 }}>
                <Button variant="contained" sx={{ mb: 1, float: 'right', verticalAlign: 'bottom' }} onClick={onSubmit}>{props.Userrole.id ? 'Update' : 'Create'}</Button>
            </div>
        </Box>
    )
}

export default UserroleForm;
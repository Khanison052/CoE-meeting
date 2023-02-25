import { useState, useEffect, ChangeEvent } from "react";
import { Button, Dialog, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Add, Close } from '@mui/icons-material/';
import { useAuth } from "react-oidc-context";
import topic from "../model/topic";
import Form from "../Component/form";
import Storycard from "../Component/storycard";
import './main.css';
function Story(){
    return (
        <>
        <Form></Form>
        <Storycard></Storycard>
        
        </>
)
    }
export default Story
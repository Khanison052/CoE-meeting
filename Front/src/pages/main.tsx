import { useState, useEffect, ChangeEvent } from "react";
import { Button, Dialog, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Add, Close } from '@mui/icons-material/';
import { useAuth } from "react-oidc-context";
import topic from "../model/topic";
import PannAppBar from "../Component/pann-app-bar";
import './main.css';
function first(){
    console.log('main')
    return (
        <>
        <PannAppBar></PannAppBar>
        
        </>
)
    }
export default first
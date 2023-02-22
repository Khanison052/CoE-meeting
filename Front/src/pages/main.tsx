import { useState, useEffect, ChangeEvent } from "react";
import { Button, Dialog, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Add, Close } from '@mui/icons-material/';
import { useAuth } from "react-oidc-context";
import topic from "../model/topic";
import PannAppBar from "../Component/pann-app-bar";
import './main.css';
function main(){
    console.log('main')
    return (
        <>
        <PannAppBar></PannAppBar>
        <div className="main1">การประชุมวันนี้</div>
        <div className="main2"></div>
        </>
)
    }
export default main
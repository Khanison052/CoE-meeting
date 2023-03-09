import { useState, useEffect, ChangeEvent } from "react";
import { Button, Dialog, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Form from "../Component/form";
import TopicCard from "../Component/card"
import UserResult from '../model/meeting';
import './main.css';
import Repo from "../Repo";
import Userrole from "../model/role";
import React from "react";

function Past() {
    const [userResultList, setUserResultList] = useState<UserResult[]>([]);
    const [UserRole, setUserRole] = useState<Userrole[]>([]);
    const [departmentTitle, setDepartmentTitle] = useState<string>('');
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate = new Date(`${year}-${month}-${day}`);
    const fetchUserResultList = async () => {
        const result = await Repo.UserResults.getAll();
        if (result) {
            if (userResultList.length) {
                setUserResultList([]);
            }
            setUserResultList(result);
        }
    };

    const fetchUserRole = async () => {
        const result = await Repo.UserRole.getuser();
        if (result && result.department) {
            setUserRole([result]);
            setDepartmentTitle(result.department.title);
        }
    };

    const onUpdateUserResult = (userResult: UserResult) => {
        setUserResultList((prevUserResultList) =>
            prevUserResultList.map((item) => (item.id === userResult.id ? userResult : item))
        );
    };

    useEffect(() => {
        fetchUserResultList();
        fetchUserRole();
    }, []);

    useEffect(() => {
        if (UserRole.length > 0) {
            setDepartmentTitle(UserRole[0].department.title);
        }
    }, [UserRole]);
    console.log(userResultList)
    return (
        <>  <Box className={"title"}>การประชุมที่ผ่านมาแล้ว</Box>
            <React.Fragment>
                {UserRole.map((UserRole) => (
                    <Form userRole={UserRole} />
                ))}
            </React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "left" }}>
                {userResultList.map((userResult, index) => {
                    const userDate = new Date(userResult.attributes.date);
                    console.log(userDate.getTime())
                    console.log(formattedDate.getTime())
                    const datade = userResult.attributes.departments?.data;
                    const departTitles = Array.isArray(datade) ? datade.map(department => department.attributes.title) : [datade?.attributes?.title];
                    if (departmentTitle === "admin" || (departmentTitle && departTitles.includes(departmentTitle) &&  formattedDate.getTime() > userDate.getTime() )) {
                        return (
                            <Box key={index} sx={{ height: "250px", margin: "1px" }}>
                                <TopicCard userResult={userResult} onUpdateUserResult={onUpdateUserResult} />
                            </Box>
                        );
                    }
                })}

            </Box>
        </>
    );
}

export default Past;
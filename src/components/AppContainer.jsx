import React from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Header from "./Header";
import LiveResults from "../pages/LiveResults";
import LeagueTable from "../pages/LeagueTable";
import LeagueTableLive from "../pages/LeagueTableLive";
import Login from "../pages/Login";
import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import {getToken} from "../services/userAtuhService";
import {getTeams } from "../services/teamService";

const AppContainer = () => {

    let location = useLocation();
    const [token, setToken] = useState(null);
    useEffect( () => {
        getTeams();
        if (getToken()){
            setToken(getToken());

        }else {
            setToken(null);
        }
    })

    const handleToken = (token) => {
        setToken(token);
    }
    return (
        <>
            <Header path={location.pathname} token={token}/>
            <Container>
                <Routes>
                    <Route path={"/"} element={<LiveResults/>}/>
                    <Route path={"/league-table"} element={<LeagueTable/>}/>
                    <Route path={"/league-table-live"} element={<LeagueTableLive/>}/>
                    <Route path={"/login"} element={<Login token={token} onToken={handleToken}/>}/>
                </Routes>
            </Container>
        </>
    );
};

export default AppContainer;
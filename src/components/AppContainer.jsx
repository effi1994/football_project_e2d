import React from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Header from "./Header";
import LiveResults from "../pages/LiveResults";
import LeagueTable from "../pages/LeagueTable";
import LeagueTableLive from "../pages/LeagueTableLive";
import Login from "../pages/Login";
import {Container} from "@mui/material";

const AppContainer = () => {

    let location = useLocation()
    return (
        <>
            <Header path={location.pathname}/>
            <Container>
                <Routes>
                    <Route path={"/"} element={<LiveResults/>}/>
                    <Route path={"/league-table"} element={<LeagueTable/>}/>
                    <Route path={"/league-table-live"} element={<LeagueTableLive/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                </Routes>
            </Container>
        </>
    );
};

export default AppContainer;
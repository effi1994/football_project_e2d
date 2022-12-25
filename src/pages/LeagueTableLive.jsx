import React from 'react';
import {useEffect, useState} from "react";
import { calculateTableLeagueLive, tableLeagueLive} from "../services/CalculationTableService";
import {getTeams} from "../services/teamService";
import {getAllGames} from "../services/gameService";
import  LeaguesList from "../components/LeaguesList";

const LeagueTableLive = () => {
    const [lifeTable,setLifeTable] = useState([]);

    useEffect(()=>{
        getTeams();
        getAllGames();
        calculateTableLeagueLive();
        setLifeTable(tableLeagueLive);
        const interval = setInterval(() => {
            getTeams();
            getAllGames();
            calculateTableLeagueLive();
            setLifeTable(tableLeagueLive);
        }, 1000);
        return () => clearInterval(interval);
    },[])


    return (
        <div>
            <LeaguesList leagues={lifeTable} mode={"leagueTable"}/>
        </div>
    );


};

export default LeagueTableLive;
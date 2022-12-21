import React from 'react';
import {calculateTableLeague,tableLeagueEnd} from "../services/CalculationTableService";
import {useEffect, useState} from "react";
import {getTeams} from "../services/teamService";
import {getEndGames} from "../services/gameService";
import LeaguesList from "../components/LeaguesList";

const LeagueTable = () => {
    const [tableLeague, setTableLeague] = React.useState([]);

    useEffect(() => {
        getTeams();
        getEndGames();
        calculateTableLeague();
        setTableLeague(tableLeagueEnd);
    })



    return (
        <div>
            <LeaguesList leagues={tableLeague} mode={"leagueTable"}/>
        </div>
    );
};

export default LeagueTable;
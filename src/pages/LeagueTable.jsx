import React from 'react';
import {calculateTableLeague} from "../services/CalculationTableService";
import {useEffect, useState} from "react";
import {getTeams,teams} from "../services/teamService";
import {getEndGames ,endGames} from "../services/gameService";

const LeagueTable = () => {
    const [tableLeague, setTableLeague] = React.useState([]);



    return (
        <div>
            LeagueTable


        </div>
    );
};

export default LeagueTable;
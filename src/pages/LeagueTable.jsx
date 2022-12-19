import React from 'react';
import {calculateTableLeague} from "../services/CalculationTableService";
import {useEffect, useState} from "react";
import {getTeams,teams} from "../services/teamService";
import {getEndGames ,endGames} from "../services/gameService";

const LeagueTable = () => {
    const [tableLeague, setTableLeague] = React.useState([]);
    useEffect( () => {
        if (tableLeague.length === 0) {
            getTeams();
            getEndGames();
            if (teams.length > 0) {
                if (endGames.length > 0)
                    setTableLeague(calculateTableLeague());


            } else {
                setTableLeague([]);
            }
        }else {
            console.log(tableLeague);
        }
    })


    return (
        <div>
            LeagueTable
        </div>
    );
};

export default LeagueTable;
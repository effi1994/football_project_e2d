import React from 'react';
import {calculateTableLeague} from "../services/CalculationTableService";
import {useEffect, useState} from "react";

const LeagueTable = () => {
    //const [tableLeague, setTableLeague] = React.useState([]);
    useEffect()

    console.log(calculateTableLeague())
    return (
        <div>
            LeagueTable
        </div>
    );
};

export default LeagueTable;
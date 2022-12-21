import React, {useEffect, useState} from 'react';
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip
} from "@mui/material";

import {randomUniqKey} from "../utilities/utilities"


const LeaguesList = (props) => {
    let width = window.innerWidth;

    const gamesTableCell = [
        {name: "Session"},
        {name: "Home team"},
        {name: "Foreign team"},
        {name: "Goals to foreign"},
        {name: "Goals to home"},
    ]

    const leagueTableCell = [
        {name: ""},
        {name: "Team"},
        {name: "Played"},
        {name: "Won"},
        {name: "Draw"},
        {name: "Lost"},
        {name: "For"},
        {name: "Against"},
        {name: "GD"},
        {name: "Points"},
    ]

    let chooseColor = (goalsToTeam1, goalsToTeam2) => {
        if(goalsToTeam1 > goalsToTeam2) {
            return "rgba(67, 226, 145, 0.87)"
        }
        else if (goalsToTeam1 < goalsToTeam2) {
            return "rgba(231, 41, 50, 0.87)"
        }

        return "rgba(229, 231, 41, 0.87)"
    }
    console.log(props.games)
    return (
        <>
            <TableContainer sx={{boxShadow: '5px 5px 20px #ccc',
                padding: 3,
                margin: "auto",
                marginTop: 3,
                maxWidth: width-(width*(1/4)),
                backgroundColor: "rgba(168, 173, 170, 0.28)"
            }}
                            component={Paper}
            >
                <Table  sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                props.mode==="result"&&
                                <>
                                    {
                                        gamesTableCell.map((cell) => {
                                            return (
                                                <TableCell align="center">{cell.name}</TableCell>
                                            )
                                        })
                                    }
                                </>
                            }

                            {
                                props.mode==="leagueTable"&&
                                <>
                                    {
                                        leagueTableCell.map((cell) => {
                                            return (
                                                <TableCell align="center">{cell.name}</TableCell>
                                            )
                                        })
                                    }
                                </>
                            }


                        </TableRow>
                    </TableHead>
                    <TableBody>
                         {
                            props.mode === "result"&&
                            props.games.map((game) => (
                                    <TableRow sx={{
                                        transition:  "0.1s linear",
                                        opacity: 0.85,
                                        ":hover": {
                                            opacity: 1,
                                            backgroundColor:"rgba(168, 173, 170, 0.05)"
                                        }
                                    }}
                                              key={randomUniqKey()}
                                    >

                                        <TableCell align="center"><span> { game.gameSession}</span></TableCell>
                                        <TableCell align="center">
                                    <span
                                        style={{
                                            color:chooseColor(game.foreignScore, game.homeScore)}}
                                    >
                                            {game.homeTeam}
                                    </span>
                                        </TableCell>
                                        <TableCell align="center">
                                    <span
                                        style={{
                                            color: chooseColor(game.homeScore, game.foreignScore)}}
                                    >
                                            {game.foreignTeam}
                                    </span>
                                        </TableCell>
                                        <TableCell align="center"><span>{game.foreignScore}</span></TableCell>
                                        <TableCell align="center"><span>{game.homeScore}</span></TableCell>
                                    </TableRow>
                                ))

                        }

                        {
                            props.mode==="leagueTable"&&
                            props.leagues.map((league,i) => (
                                <TableRow key={league.id}>
                                    <TableCell align="center">{i+1}</TableCell>
                                    <TableCell align="center"><span>{league.nameTeams}</span></TableCell>
                                    <TableCell align="center"><span>{league.games}</span></TableCell>
                                    <TableCell align="center"><span>{league.wins}</span></TableCell>
                                    <TableCell align="center"><span>{league.draws}</span></TableCell>
                                    <TableCell align="center"><span>{league.losses}</span></TableCell>
                                    <TableCell align="center"><span>{league.goalsFor}</span></TableCell>
                                    <TableCell align="center"><span>{league.goalsAgainst}</span></TableCell>
                                    <TableCell align="center"><span>{league.goalDifference}</span></TableCell>
                                    <TableCell align="center"><span>{league.points}</span></TableCell>
                                </TableRow>
                            ))

                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
};
//{
//     "id": 3,
//     "gameSession": "1",
//     "homeTeam": "Chelsea",
//     "foreignTeam": "Real Madrid CF",
//     "homeScore": 3,
//     "foreignScore": 3,
//     "userId": "\u0001",
//     "live": true
// }

export default LeaguesList;


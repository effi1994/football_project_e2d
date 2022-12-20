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
        {name: "Place"},
        {name: "Team name"},
        {name: "Total points"},
        {name: "Total winnings"},
        {name: "Total loses"},
        {name: "Total draws"},
        {name: "Total goal difference"}
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
                                props.mode=="result"&&
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
                                props.mode=="leagueTable"&&
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
                            props.mode == "result"&&
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

                                        <TableCell align="center"><span>{game.session}</span></TableCell>
                                        <TableCell align="center">
                                    <span
                                        style={{
                                            color:chooseColor(game.goalsForeign, game.goalsHome)}}
                                    >
                                            {game.homeTeam}
                                    </span>
                                        </TableCell>
                                        <TableCell align="center">
                                    <span
                                        style={{
                                            color: chooseColor(game.goalsHome, game.goalsForeign)}}
                                    >
                                            {game.foreignTeam}
                                    </span>
                                        </TableCell>
                                        <TableCell align="center"><span>{game.goalsForeign}</span></TableCell>
                                        <TableCell align="center"><span>{game.goalsHome}</span></TableCell>
                                    </TableRow>
                                ))

                        }

                        {
                            props.mode=="leagueTable"&&
                            props.leagues.map((league) => (
                                <TableRow>

                                </TableRow>
                            ))

                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
};

export default LeaguesList;
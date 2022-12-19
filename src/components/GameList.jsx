import React, {useEffect, useState}  from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    Box,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Tooltip,
    Typography
} from "@mui/material";

import {key} from "../utilities/utilities"


const GameList = (props) => {
    let width = window.innerWidth;

    const [editIndex, setEditIndex] = useState(-1)

    useEffect(() => {
        if ((Object.keys(props.editGame).length === 0)) {
            setEditIndex(-1)
        }

    },[props.editGame])



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
                           <TableCell align="center">Session</TableCell>
                           <TableCell align="center">Home team</TableCell>
                           <TableCell align="center">Foreign team</TableCell>
                           <TableCell align="center">Goals to foreign</TableCell>
                           <TableCell align="center">Goals to Home</TableCell>
                           <TableCell align="center">Ended</TableCell>
                           <TableCell align="right"></TableCell>
                           {
                               props.mode==1&&
                               <TableCell align="right"></TableCell>
                           }
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {props.games.map((game, index) => (
                           <TableRow sx={{
                               backgroundColor: editIndex==index ? "rgba(132, 159, 219, 0.44)": "",
                               transition:  "0.1s linear",
                               opacity: 0.85,
                               ":hover": {
                                   backgroundColor: editIndex!=index ? "rgba(168, 173, 170, 0.05)" : "",
                                   opacity: 1
                               },
                           }}
                               key={key()}
                           >

                               <TableCell align="center">{game.session}</TableCell>
                               <TableCell align="center">{game.homeTeam}</TableCell>
                               <TableCell align="center">{game.foreignTeam}</TableCell>
                               <TableCell align="center">{game.goalsForeign}</TableCell>
                               <TableCell align="center">{game.goalsHome}</TableCell>
                               <TableCell align="center">{!game.isLive ? "Yes" : "No"}</TableCell>
                               {
                                   props.mode == 1&&
                                   <TableCell align={"right"}>
                                       <Tooltip title={"Delete game"}>
                                           <IconButton
                                               onClick={() => props.handleRemove(index)}
                                               color={"error"} aria-label="delete">
                                               <DeleteIcon/>
                                           </IconButton>
                                       </Tooltip>
                                   </TableCell>
                               }
                               <TableCell align={props.mode==1 ? "left" : "center"}>
                                   <Tooltip title={"Edit game"}>
                                       <IconButton
                                           disabled={editIndex >= 0}
                                           value={editIndex}
                                           onClick={() => {
                                               setEditIndex(index)
                                               props.handleEdit(index)
                                           }}
                                           color={"info"} aria-label="edit">
                                           <EditIcon />
                                       </IconButton>
                                   </Tooltip>
                               </TableCell>
                           </TableRow>
                       ))}
                   </TableBody>
               </Table>
           </TableContainer>

       </>
    )
}

export default GameList;
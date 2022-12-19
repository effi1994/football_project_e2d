import React, {useEffect, useState} from 'react';
import StyledBox from "./Styled/StyledBox";
import {Typography} from "@mui/material";
import GameList from "./GameList";
import StyledButton from "./Styled/StyledButton";
import {objectIsEmpty} from "../utilities/utilities"



const AddEditGamesForm = (props) => {

    const gamesToEdit = [

        {
            session: 1,
            homeTeam: "team1",
            foreignTeam: "team2",
            goalsForeign: 0,
            goalsHome: 0,
            isLive: true


        },
        {
            session: 2,
            homeTeam: "team3",
            foreignTeam: "team4",
            goalsForeign: 0,
            goalsHome: 1,
            isLive: true


        },
        {
            session: 4,
            homeTeam: "team1",
            foreignTeam: "team4",
            goalsForeign: 1,
            goalsHome: 0,
            isLive: true


        }

    ]

    useEffect(() => {
        if (props.mode!=1) {
            setGames(gamesToEdit)
        }

    },[props.mode])

    const allGamesButtonSX = {
        marginTop: 2,
        padding: 2,
        marginLeft: 2,
        borderRadius: 5
    }



    const [editGame, setEditGame] = useState({});

    const [games, setGames] = useState([])

    const [teams, setTeams] = useState([
        {id: 0, name: "team1"},
        {id: 1, name: "team2"},
        {id: 2, name: "team3"},
        {id: 3, name: "team4"},
        {id: 4, name: "team5"},
        {id: 5, name: "team6"},
        {id: 6, name: "team7"},
    ])

    const createGame = (newGame) => {
        setGames([...games, newGame])

    }

    const update = (updatedGame) => {
        const index = games.findIndex(object => {
            return (
                object.session===editGame.session&&
                object.homeTeam===editGame.homeTeam&&
                object.foreignTeam===editGame.foreignTeam&&
                object.goalsForeign===editGame.goalsForeign&&
                object.goalsHome===editGame.goalsHome
            )
        })

        const currentGames=games
        currentGames[index]=updatedGame
        setGames(currentGames)
        setEditGame({})


    }

    const handleRemoveAllGames = () => {
        setGames([])
        setEditGame({})
    }

    const handleRemoveGame = (index) => {

        let clone = [...games]
        clone.splice(index, 1)
        setGames(clone);
        if (games[index] === editGame) {
            setEditGame({})
        }

    }

    const handleEditGame = (index) => {
        setEditGame(games[index])

    }

   return(
       <>

           <Typography variant={"h4"} padding={2} textAlign={"center"}>{props.mode==1 ? objectIsEmpty(editGame)? "Add games" : "Edit game" :"Edit existing games"}</Typography>
           <StyledBox create={createGame}
                      update={update}
                      editGame={editGame}
                      teams={teams}
                      mode={props.mode}
           />
           {
               games.length > 0&&
               <GameList games={games}
                         teams={teams}
                         handleRemove={handleRemoveGame}
                         handleEdit={handleEditGame}
                         editGame={editGame}
                         mode={props.mode}
               />
           }

           {
               games.length > 0&&
               <>
                   <StyledButton text={"Save all games"}
                                 sx={allGamesButtonSX}
                                 color={"success"}
                                 icon={"v"}
                   />
                   {
                       props.mode==1&&
                       <StyledButton text={"Remove all games"}
                                     sx={allGamesButtonSX}
                                     color={"warning"}
                                     icon={"x"}
                                     onClick={handleRemoveAllGames}

                       />
                   }
               </>
           }

       </>
   )
};

export default AddEditGamesForm;
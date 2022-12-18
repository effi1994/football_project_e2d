import React, {useEffect, useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import StyledButton from "./StyledButton";

//

const StyledBox = (props) => {
    let width = window.innerWidth;
    let randomKey = () => {
        return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
    }
//eeeee
    ///yuyuy
    const handleNumFieldChange = (e) => {
        let isNum = /^\d+$/.test(e.target.value);
        if (isNum) {
            setGame((prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            })))
        }
    }
    ///aa


    const handleTextFieldChange = (e) => {
        setGame((prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })))
    }
    const styledBoxButtonSx={
        marginLeft: 3,
        borderRadius: 3,
    }
    const formControlSx = {
        marginLeft: 3
    }

    const sessionMinVal = 1
    const goalsHomeMinVal = 0
    const goalsForeignMinVal = 0

    //const [game, setGame] = useState(...props.game)

    const initialGame = {
        session: 1,
        homeTeam: "",
        foreignTeam: "",
        goalsForeign: 0,
        goalsHome: 0,
        isLive: true


    }


    const [game, setGame] = useState(initialGame)


    useEffect(() => {
        if (!(Object.keys(props.editGame).length === 0)) {
            setGame(props.editGame)
        }
        else {
            setGame(initialGame)
        }
    }, [props.editGame]);


    const addNewGame = (e) => {
        e.preventDefault()
        const newGame = {
            ...game
        }
        props.create(newGame)
        setGame(initialGame)
    }

    const updateGame = (e) => {
        e.preventDefault()
        const updatedGame = {
            ...game
        }

        props.update(updatedGame)
        setGame(initialGame)

    }

    return (
        <Box display={"flex"}
             flexDirection={"column"}
             maxWidth={width-(width*(1/4))}
             margin={"auto"}
             justifyContent={"center"}
             marginTop={0}
             padding={3}
             borderRadius={3}
             boxShadow={'5px 5px 10px #ccc'}
             sx={{
                 transition: "0.2s ease-in",
                 ":hover": {
                     boxShadow: '5px 5px 20px #ccc'
                 },
                 flexDirection: "row",
             }}
        >
            <FormControl>
                <InputLabel></InputLabel>
                <TextField
                    sx={{maxWidth:100}}
                    name={"session"}
                    label="Session"
                    type="number"
                    value={game.session}
                    onChange={handleNumFieldChange}
                    InputProps={{ inputProps: { min: sessionMinVal } }}

                />
            </FormControl>

            <FormControl sx={formControlSx}>
                <InputLabel>Home team</InputLabel>
                <Select sx={{ minWidth: 130}}
                        name={"homeTeam"}
                        label="Home team"
                        value={game.homeTeam}
                        onChange={handleTextFieldChange}
                >
                    {
                        props.teams.map((team) => {
                            return(
                                <MenuItem
                                    key={team.id}
                                    value={team.name}
                                    disabled={game.foreignTeam==team.name}
                                >
                                    {team.name}
                                </MenuItem>
                            )
                        })
                    }

                </Select>
            </FormControl>


            <FormControl sx={formControlSx}>
                <InputLabel>Foreign team</InputLabel>
                <Select sx={{ minWidth: 140}}
                        label="Foreign team"
                        name={"foreignTeam"}
                        value={game.foreignTeam}
                        onChange={handleTextFieldChange}
                >

                    {
                        props.teams.map((team) => {
                            return(
                                <MenuItem
                                    key={team.id}
                                    value={team.name}
                                    disabled={game.homeTeam==team.name}
                                >
                                    {team.name}
                                </MenuItem>
                            )
                        })
                    }

                </Select>
            </FormControl>

            <FormControl sx={formControlSx}>
                <InputLabel></InputLabel>
                <TextField
                    sx={{maxWidth:150}}
                    id="outlined-number"
                    label="Goals to foreign"
                    type="number"
                    name={"goalsForeign"}
                    value={game.goalsForeign}
                    InputProps={{ inputProps: { min: goalsForeignMinVal } }}
                    onChange={handleNumFieldChange}
                />
            </FormControl>

            <FormControl sx={formControlSx}>
                <InputLabel></InputLabel>
                <TextField
                    sx={{maxWidth:150}}
                    id="outlined-number"
                    label="Goals to home"
                    type="number"
                    name={"goalsHome"}
                    value={game.goalsHome}
                    InputProps={{ inputProps: { min: goalsHomeMinVal } }}
                    onChange={handleNumFieldChange}
                />


            </FormControl>

            {
                Object.keys(props.editGame).length === 0 && props.mode==1 ?
                    <StyledButton disabled={(game.homeTeam == "" || game.foreignTeam == "") }
                                  text={"Add Game"}
                                  sx={styledBoxButtonSx}
                                  onClick={addNewGame}
                                  icon={"+"}
                                  color={"secondary"}
                    />
                    :
                    <StyledButton disabled={Object.keys(props.editGame).length === 0}
                                  text={"Edit Game"}
                                  sx={styledBoxButtonSx}
                                  onClick={updateGame}
                                  icon={"/"}
                                  color={"info"}
                    />
            }



        </Box>
    );
};

export default StyledBox;